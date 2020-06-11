/// <reference types="Cypress" />
import logger from '../helpers/logger';

describe('Accessibility tests', () => {
  it('should be accessible', () => {
    cy.fixture('endpoints').then(pages => {
      pages.forEach(page => {
        cy.visit(page);
        cy.injectAxe();
        [[1920, 1080], 'macbook-11', 'iphone-6', 'ipad-mini'].forEach(size => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1]);
          } else {
            cy.viewport(size);
          }
          cy.checkA11y(null, null, logger);
        });
      });
    });
  });
});
