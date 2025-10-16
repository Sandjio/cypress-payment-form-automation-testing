// Test suite: Layout & Responsiveness

describe("Layout & Responsiveness", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS8-TC01 - mobile layout stacks fields", () => {
    cy.viewport(375, 667);
    cy.contains("Contact Name").should("be.visible");
    cy.contains("Register").should("be.visible");
  });
});
