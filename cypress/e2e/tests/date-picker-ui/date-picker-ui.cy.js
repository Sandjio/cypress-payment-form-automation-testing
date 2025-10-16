// Test suite: Date Picker UI

describe("Date Picker UI", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS4-TC01 - date picker appears or manual input allowed", () => {
    cy.contains("PickUp Date").parent().find("input").click();
    // basic assertion that the field exists and can be typed into
    cy.contains("PickUp Date").parent().find("input").type("2025-12-01").blur();
  });

  it("UI-TS4-TC02 - invalid date shows validation message", () => {
    cy.contains("PickUp Date")
      .parent()
      .find("input")
      .clear()
      .type("31/02/2025");
    cy.contains("Register").click();
    cy.contains("Please provide valid Date.").should("exist");
  });
});
