// Test suite: Dropdown / Payment Method

describe("Dropdown / Payment Method", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS5-TC01 - default option and options exist", () => {
    cy.contains("Payment Method").parent().find("select").should("exist");
    cy.get("select").then(($sel) => {
      if ($sel.length) {
        cy.wrap($sel).find("option").its("length").should("be.gte", 1);
      }
    });
  });

  it("UI-TS5-TC02 - selecting payment method updates state", () => {
    cy.get("select").select("card").should("have.value", "card");
    cy.get("select")
      .select("cash on delivery")
      .should("have.value", "cash on delivery");
  });
});
