// Test suite: Input Validation - Contact Name

describe("Input Validation - Contact Name", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS2-TC01 - shows message when Contact Name is empty and Register clicked", () => {
    cy.contains("Register").click();
    cy.contains("Please enter your Contact name.").should("exist");
  });

  it("UI-TS2-TC02 - valid contact name shows success state", () => {
    cy.get("input").first().type("John Doe").blur();
    cy.contains("Looks good!").should("exist");
  });

  it("UI-TS2-TC03 - accepts special/invalid characters without UI crash", () => {
    cy.get("input").first().clear().type("John123!@#").blur();
    cy.contains("Looks good!").should("exist");
  });
});
