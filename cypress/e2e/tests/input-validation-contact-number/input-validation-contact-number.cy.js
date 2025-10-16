// Test suite: Input Validation - Contact Number

describe("Input Validation - Contact Number", () => {
  beforeEach(() => cy.visit(Cypress.env("formPath")));

  it("UI-TS3-TC01 - shows message when Contact number is empty and Register clicked", () => {
    cy.contains("Register").click();
    cy.contains("Please provide your Contact number.").should("exist");
  });

  it("UI-TS3-TC02 - rejects letters in Contact number or flags invalid", () => {
    cy.get("input").eq(1).type("abcdef").blur();
    // either validation appears or input does not accept letters
    cy.contains("Please provide your Contact number.").should("exist");
  });

  it("should accept digits", () => {
    cy.get("input").eq(1).clear().type("0123456789");
    cy.contains("Looks good!").should("exist");
  });
});
