describe('Change a vocab cards learn status', () => {
  it('moves a card form the to be learned list to the first position of the learned card list', () => {
    cy.visit('http://localhost:3000')

    cy.contains('The glass')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('button').click()
      })

    cy.get('[data-cy="status-btn"]')
      .contains('Learned')
      .click()

    cy.get('main')
      .find('h2')
      .contains('The glass')
      .should('not.exist')

    cy.get('section:first > button:nth-child(2)').click()

    cy.get('h2:first').contains('The glass')
  })

  it('moves the card back to the first position of the to be learned card list', () => {
    cy.get('main > section:first > button').click()

    cy.get('[data-cy="status-btn"]')
      .contains('To be Learned')
      .click()

    cy.get('main')
      .find('h2')
      .contains('The glass')
      .should('not.exist')

    cy.get('section:first > button:first').click()

    cy.get('h2:first-child').contains('The glass')
  })
})
