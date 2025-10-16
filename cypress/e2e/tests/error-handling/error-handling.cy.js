// Test suite: Error Handling

describe("Error Handling", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS12-TC01 - multiple validation messages displayed without overlap", () => {
    cy.contains("Register").click();
    cy.contains("Please enter your Contact name.").should("exist");
    cy.contains("Please provide your Contact number.").should("exist");
  });
});
