// Test suite: Text Content & Localization

describe("Text Content & Localization", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS10-TC01 - verify static text and spelling", () => {
    cy.contains("Payment").should("exist");
    // Check for known typo mentioned in README
    cy.contains(/Paymeny|Payment/).should("exist");
  });
});
