describe('App Flow + Home and User Pages', () => {
  it('should load the home page', () => {
    // Use the baseUrl from the environment variable, defaulting to http://localhost:3000
    const baseUrl = Cypress.env('CYPRESS_baseUrl') || 'http://localhost:3000';
    cy.visit(baseUrl);
    cy.get('h1').should('contain', 'Github Users');

    // Check for avatar images
    cy.get('img[alt^="Avatar for"]').should('exist');

    // Get the text of the first link
    cy.get('a')
      .first()
      .invoke('text')
      .then((linkText) => {
        // Click on the link and open in the current tab
        cy.get('a').first().click();

        // Check the URL after the click
        cy.url().should('include', '/user/' + linkText);

        // Use the generateMetadata function to construct the expected title
        const expectedTitle = `Users Page | ${linkText}`;

        // Check the page title
        cy.title().should('eq', expectedTitle);
        cy.contains('Followers');
        cy.contains('Organizations');
        cy.contains('Repositories');

        // Check for images
        cy.get('img[alt^="Avatar for"]').should('exist');
        cy.get('img[alt^="follower avatar image"]').should('exist');
      });

    // Go back to the home page
    cy.get('a')
      .first()
      .click()
      .then(() => {
        cy.get('h1').should('contain', 'Github Users');
      });

    cy.get('a')
      .last()
      .click()
      .then(() => {
        // Click on the link and open in a new tab
        cy.get('a').last().click();
      });
  });
});
