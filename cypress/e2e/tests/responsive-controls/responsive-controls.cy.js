// Test suite: Responsive Controls

describe("Responsive Controls", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS11-TC01 - hover/active/disabled states for Register", () => {
    cy.viewport(1280, 800);
    cy.contains("Register").trigger("mouseover");
    cy.contains("Register").should("be.visible");
  });
});
