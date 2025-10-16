// Test suite: Form Submission UI

describe("Form Submission UI", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS13-TC01 - successful form submission feedback (client-side)", () => {
    cy.get("input").first().type("John Doe");
    cy.get("input").eq(1).type("0123456789");
    cy.get("select").select(1);
    cy.contains("Register").click();
    cy.contains(/success|thank you|confirmation/i).should("exist");
  });
});
