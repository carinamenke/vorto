describe('Create a vocab card', () => {
  it('displays the correct submitted information in the new card', () => {
    cy.visit('http://localhost:3000')

    cy.get('nav > a:nth-child(2)').click()

    cy.get('input[name="wordTitle"]').type('Das Haus')

    cy.get('input[name="translation"]').type('La maison')

    cy.get('select[name="partOfSpeechCategory"]').select('Noun')

    cy.get('form > button').click()

    cy.get('[data-cy="vocab"]:first-child > button').click()

    cy.get('.content-title').contains('Das Haus')

    cy.get('.translation-title').contains('La maison')

    cy.get('.content > span').contains('Noun')

    cy.get('a.closing-icon[color="var(--text-color-white)"]').click()
  })
})
