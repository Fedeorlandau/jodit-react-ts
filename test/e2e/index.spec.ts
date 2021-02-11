/// <reference types="cypress" />

describe('JoditReact tests', () => {
  it('should render the example with the default value', () => {
    cy.visit('/');
    cy.get("[data-testid='value']").contains('Hi');
  });
});
