describe('Create a vocab card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')

    cy.get('input[name="wordTitle"]').type('Das Haus')

    cy.get('input[name="translation"]').type('La maison')

    cy.get('select[name="partOfSpeechCategory"]').select('Noun')

    cy.get('form > button').click()
  })

  it('displays the correct submitted information in the new card', () => {
    cy.get('section:first-child > button').click()

    cy.get('.content-title').contains('Das Haus')

    cy.get('.translation-title').contains('La maison')

    cy.get('.content > span').contains('Noun')

    cy.get('a.closing-icon').click()
  })
})
