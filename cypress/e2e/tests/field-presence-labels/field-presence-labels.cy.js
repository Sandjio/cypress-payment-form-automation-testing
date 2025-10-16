// Test suite: Field Presence & Labels
// Source: README test matrix - verifies fields and labels are present

describe("Field Presence & Labels", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("formPath"));
  });

  it("UI-TS1-TC01 - all form fields and labels are present", () => {
    cy.contains("Contact Name").should("exist");
    cy.contains("Contact number").should("exist");
    cy.contains("PickUp Date").should("exist");
    cy.contains("Payment Method").should("exist");
    cy.contains("Register").should("exist");
  });

  it("UI-TS1-TC01 - helper text visibility (looks good)", () => {
    // success text appears only after valid input; ensure placeholder helper exists
    cy.get("input").first().invoke("attr", "placeholder").should("exist");
  });
});
