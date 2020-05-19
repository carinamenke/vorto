describe('Search for a vocab card', () => {
  it('displays the correct search result for the entered search term', () => {
    cy.visit('http://localhost:3000')

    cy.get('nav > a:nth-child(3)').click()

    cy.get('input[name="q"]').type('tHe plATe')

    cy.get('.content-title').contains('The plate')
  })

  it('displays no search results when the search input is cleared', () => {
    cy.get('.closing-icon').click()

    cy.get('main').should('be.empty')
  })
})
