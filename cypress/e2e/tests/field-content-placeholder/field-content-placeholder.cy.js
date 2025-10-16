// Test suite: Field Content & Placeholder

describe("Field Content & Placeholder", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS1-TC02 - placeholders and helper text exist", () => {
    cy.contains("Contact Name").parent().find("input,textarea").should("exist");
    cy.contains("Payment Method").should("exist");
    // Payment Method default shows 'Choose...' in UI; assert option text exists when opened
    cy.get("select").then(($sel) => {
      if ($sel.length) cy.wrap($sel).contains("Choose", { matchCase: false });
    });
  });
});
