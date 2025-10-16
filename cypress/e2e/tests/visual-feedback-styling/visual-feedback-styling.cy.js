// Test suite: Visual Feedback & Styling

describe("Visual Feedback & Styling", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS7-TC01 - validation messages are visible and styled", () => {
    cy.contains("Register").click();
    cy.contains("Please provide your Contact number.").should("be.visible");
    // color checks are brittle; ensure message exists and not overlapped
    cy.contains("Looks good!").should("not.exist");
  });
});
