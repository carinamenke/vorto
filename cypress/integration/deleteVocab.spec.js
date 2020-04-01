describe('Delete a vocab card', () => {
  beforeEach('click delete button and open delete confirmation overlay', () => {
    cy.visit('/')

    cy.contains('The glass')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('button').click()
      })

    cy.get('button')
      .contains('Delete')
      .click()

    cy.get('[data-cy="deletion-overlay"]').should('be.visible')
  })

  it('closes the overlay by clicking on closing icon', () => {
    cy.get('[data-cy="deletion-overlay"]  a.closing-icon').click()

    cy.get('[data-cy="deletion-overlay"]').should('not.be.visible')
  })

  it('cancels the deletion by clicking on cancel button', () => {
    cy.get('[data-cy="deletion-overlay"]  button')
      .contains('Cancel')
      .click()

    cy.get('[data-cy="deletion-overlay"]').should('not.be.visible')
  })

  it('deletes the vocab card from local storage', () => {
    cy.get('[data-cy="deletion-overlay"]  button')
      .contains('Delete')
      .click()

    cy.get('[data-cy="deletion-overlay"]').should('not.be.visible')

    cy.reload()

    cy.get('main')
      .find('h2')
      .contains('The glass')
      .should('not.exist')

    cy.get('section:first > button:nth-child(2)').click()

    cy.get('main')
      .find('h2')
      .contains('The glass')
      .should('not.exist')
  })
})
