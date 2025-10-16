// Test suite: Register Button Behavior

describe("Register Button Behavior", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS6-TC01 - Register button state with empty form", () => {
    cy.contains("Register").should("exist");
    // click when empty to surface validations
    cy.contains("Register").click();
    cy.contains("Please enter your Contact name.").should("exist");
  });

  it("enables when form valid (manual check)", () => {
    // fill required inputs
    cy.get("input").first().type("John Doe");
    cy.get("input").eq(1).type("0123456789");
    cy.get("select").select("card");
    cy.contains("Register").click();
    // either success UI or navigation
    cy.contains("success", { matchCase: false }).should("exist");
  });
});
