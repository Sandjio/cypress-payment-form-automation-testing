# Form Validation — UI Test Automation

End-to-end tests for the payment form UI using Cypress v15. Tests the form at:
`https://practice.expandtesting.com/form-validation`

## 🚀 Quick Start

1. Install dependencies:

```bash
npm install
```

2. Open Cypress Test Runner:

```bash
npx cypress open
```

3. Run all tests headless:

```bash
npx cypress run
```

## 📁 Project Structure

```
cypress/
├── tests/                    # Test suites organized by functionality
│   ├── field-presence-labels/      # Basic field presence checks
│   ├── input-validation-*/         # Input validation test suites
│   ├── date-picker-ui/            # Date picker interactions
│   └── ...                        # Other test suites
├── fixtures/                 # Test data and API mocks
└── support/                  # Shared commands and configurations
```

## 🧪 Test Suites

The test suite follows a structured approach, with tests organized into logical groupings:

1. **Field Presence & Labels** - Basic form structure verification
2. **Input Validation** - Field-level validation testing
3. **UI Components** - Date picker, dropdowns, etc.
4. **Responsiveness** - Layout and mobile adaptation
5. **Accessibility** - Keyboard navigation and focus management
6. **Error Handling** - Validation message display
7. **Form Submission** - End-to-end form submission flows

## 🛠️ Configuration

The project uses `cypress.config.js` for central configuration:

- Base URL and environment variables
- Spec patterns and test timeouts
- Custom commands and plugins

## 📝 Test Case Matrix

Below is the detailed test case matrix for UI validation:

> Columns: Test Suite, Test Case ID, Test Case Title, Preconditions, Test Steps, Expected Result, Actual Result, Status, Notes

| Test Suite                        | Test Case ID | Test Case Title                                               | Preconditions                                                           | Test Steps                                                                                                             | Expected Result                                                                                                                                                                   | Actual Result | Status | Notes                                                                                             |
| :-------------------------------- | :----------- | :------------------------------------------------------------ | :---------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------: | -----: | :------------------------------------------------------------------------------------------------ |
| Field Presence & Labels           | UI-TS1-TC01  | Verify all form fields and labels are present                 | Form page is loaded: https://practice.expandtesting.com/form-validation | 1. Open the form page.                                                                                                 | All listed fields and labels are present and visible on the page.                                                                                                                 |           nan |    nan | Check for presence of the 'Looks good!' text near Contact Name (initially hidden until valid).    |
|                                   |              |                                                               |                                                                         | 2. Visually inspect presence of: 'Contact Name', 'Contact number', 'PickUp Date', 'Payment Method', 'Register' button. |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Verify visible validation helper texts.                                                                             |                                                                                                                                                                                   |               |        |                                                                                                   |
| Field Content & Placeholder       | UI-TS1-TC02  | Verify placeholders and helper text for inputs                | Form page loaded                                                        | 1. Inspect Contact Name field for placeholder/text hint.                                                               | Placeholders/helper text appear as visible; Payment Method default shows 'Choose...' and is not a valid selection.                                                                |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Inspect Contact number and PickUp Date for placeholders.                                                            |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Inspect Payment Method default option text (e.g., 'Choose...').                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
| Input Validation - Contact Name   | UI-TS2-TC01  | Empty Contact Name validation message                         | Form page loaded                                                        | 1. Leave Contact Name empty.                                                                                           | Validation message 'Please enter your Contact name.' is displayed; input marked invalid visually.                                                                                 |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Click Register.                                                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Observe validation message next to Contact Name.                                                                    |                                                                                                                                                                                   |               |        |                                                                                                   |
| Input Validation - Contact Name   | UI-TS2-TC02  | Valid Contact Name shows success state                        | Form page loaded                                                        | 1. Enter a typical name (e.g., 'John Doe') into Contact Name.                                                          | 'Looks good!' (or similar success indicator) is displayed and input is visually marked as valid.                                                                                  |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Move focus away (tab or click elsewhere).                                                                           |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Observe validation / success text.                                                                                  |                                                                                                                                                                                   |               |        |                                                                                                   |
| Input Validation - Contact Name   | UI-TS2-TC03  | Contact Name accepts special/invalid characters (UI behavior) | Form page loaded                                                        | 1. Enter 'John123!@#' into Contact Name.                                                                               | UI should either accept characters (and validate on submit) or show immediate validation; no unexpected UI breakage.                                                              |           nan |    nan | Define expected business rule in collaboration with product; this test notes current UI behavior. |
|                                   |              |                                                               |                                                                         | 2. Observe whether input allows characters and whether any validation message appears.                                 |                                                                                                                                                                                   |               |        |                                                                                                   |
| Input Validation - Contact Number | UI-TS3-TC01  | Empty Contact number validation                               | Form page loaded                                                        | 1. Leave Contact number empty.                                                                                         | 'Please provide your Contact number.' message shown and input marked invalid.                                                                                                     |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Click Register.                                                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Observe validation message.                                                                                         |                                                                                                                                                                                   |               |        |                                                                                                   |
| Input Validation - Contact Number | UI-TS3-TC02  | Contact number accepts only digits (UI behavior)              | Form page loaded                                                        | 1. Enter letters 'abcdef' into Contact number.                                                                         | Ideally letters are rejected or flagged as invalid; digits are accepted. UI should not crash or truncate unexpectedly.                                                            |           nan |    nan | If pattern enforcement exists, test should reflect exact error text.                              |
|                                   |              |                                                               |                                                                         | 2. Observe whether letters are allowed and whether any inline validation appears.                                      |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Enter digits '0123456789' and observe.                                                                              |                                                                                                                                                                                   |               |        |                                                                                                   |
| Date Picker UI                    | UI-TS4-TC01  | PickUp Date field shows date picker and accepts valid date    | Form page loaded                                                        | 1. Click on PickUp Date field.                                                                                         | Date-picker appears (when applicable) and selected date is populated; no validation error shown for valid date.                                                                   |           nan |    nan | If only manual entry is supported, ensure format instructions are clear.                          |
|                                   |              |                                                               |                                                                         | 2. Verify a calendar/date-picker widget opens (or manual input allowed).                                               |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Select a valid future date and move focus away.                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
| Date Picker UI                    | UI-TS4-TC02  | Invalid date shows validation message                         | Form page loaded                                                        | 1. Enter invalid date string '31/02/2025' or malformed input.                                                          | 'Please provide valid Date.' message is shown and date input visually flagged invalid.                                                                                            |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Click Register.                                                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Observe validation message near PickUp Date.                                                                        |                                                                                                                                                                                   |               |        |                                                                                                   |
| Dropdown / Payment Method         | UI-TS5-TC01  | Payment Method default and options                            | Form page loaded                                                        | 1. Inspect Payment Method dropdown.                                                                                    | Default shows 'Choose...'; Dropdown contains at least 'cash on delivery' and 'card'.                                                                                              |           nan |    nan | Also check for typos in label 'Paymeny Method' visible on page.                                   |
|                                   |              |                                                               |                                                                         | 2. Verify default option text is 'Choose...'.                                                                          |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Open dropdown and list options.                                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
| Dropdown / Payment Method         | UI-TS5-TC02  | Selecting Payment Method updates form state                   | Form page loaded                                                        | 1. Select 'card' option.                                                                                               | Selection is visible in dropdown and no visual glitches occur. If additional UI appears for 'card', it should be displayed correctly.                                             |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Observe any additional UI changes (e.g., extra fields) and whether selection is reflected.                          |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Select 'cash on delivery' and observe.                                                                              |                                                                                                                                                                                   |               |        |                                                                                                   |
| Register Button Behavior          | UI-TS6-TC01  | Register button enabled/disabled state on invalid form        | Form page loaded                                                        | 1. With all fields empty, observe Register button state.                                                               | Button should be clickable; if business rule requires disabling until valid, button should remain disabled until form valid. On click with invalid form, show inline validations. |           nan |    nan | Document actual observed behavior for product decisions.                                          |
|                                   |              |                                                               |                                                                         | 2. Fill only one field (e.g., Contact Name) and observe.                                                               |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Fill all required fields with valid values and observe.                                                             |                                                                                                                                                                                   |               |        |                                                                                                   |
| Visual Feedback & Styling         | UI-TS7-TC01  | Validation message styling and color contrast                 | Form page loaded                                                        | 1. Trigger validation messages for fields (leave empty and click Register).                                            | Error messages are visually distinct (e.g., red color) and accessible; success message visible (green or positive style) and does not overlap other UI.                           |           nan |    nan | Verify contrast ratio as needed with accessibility tools.                                         |
|                                   |              |                                                               |                                                                         | 2. Observe color, font-size and placement of error texts (e.g., 'Please provide your Contact number.').                |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Check that success text 'Looks good!' appears in success state.                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
| Layout & Responsiveness           | UI-TS8-TC01  | Form layout on narrow screens (mobile)                        | Form page loaded in responsive emulator or on a mobile device           | 1. Resize viewport to mobile width (e.g., 375px width).                                                                | Form gracefully stacks fields; labels remain visible and inputs usable without overlap.                                                                                           |           nan |    nan | Test also on tablet and desktop breakpoints.                                                      |
|                                   |              |                                                               |                                                                         | 2. Inspect layout, labels, inputs, and button alignment.                                                               |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Ensure no overlapping, truncation, or horizontal scroll appears.                                                    |                                                                                                                                                                                   |               |        |                                                                                                   |
| Keyboard & Focus                  | UI-TS9-TC01  | Tab order and focus outlines                                  | Form page loaded                                                        | 1. Press Tab repeatedly from top of page and observe focus moving through form fields and Register button.             | Logical tab order (Contact Name -> Contact number -> PickUp Date -> Payment Method -> Register). Focus outline visible and keyboard interactions work.                            |           nan |    nan | If order differs, note and file accessibility bug.                                                |
|                                   |              |                                                               |                                                                         | 2. Verify focus outline is visible on each interactive control.                                                        |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Try activating dropdown and datepicker with keyboard.                                                               |                                                                                                                                                                                   |               |        |                                                                                                   |
| Text Content & Localization       | UI-TS10-TC01 | Verify static text and spelling                               | Form page loaded                                                        | 1. Read all visible labels and helper text.                                                                            | All static text is correct and free of typos. Any typos are logged as UI copy defects.                                                                                            |           nan |    nan | Page currently shows 'Paymeny' — record as defect if present.                                     |
|                                   |              |                                                               |                                                                         | 2. Check for typos (e.g., 'Paymeny Method').                                                                           |                                                                                                                                                                                   |               |        |                                                                                                   |
| Responsive Controls               | UI-TS11-TC01 | Hover/active/disabled visual states for Register button       | Form page loaded on desktop                                             | 1. Hover the Register button and observe hover state.                                                                  | Button shows distinct hover and active states; disabled state (if applicable) is visually distinct and non-interactive.                                                           |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Click and hold to see active state.                                                                                 |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. If disabled state exists, verify its appearance.                                                                    |                                                                                                                                                                                   |               |        |                                                                                                   |
| Error Handling                    | UI-TS12-TC01 | Multiple validation messages displayed without overlap        | Form page loaded                                                        | 1. Leave all fields empty and click Register.                                                                          | All relevant error messages are visible, readable, and positioned correctly without overlapping UI elements.                                                                      |           nan |    nan | nan                                                                                               |
|                                   |              |                                                               |                                                                         | 2. Observe that multiple error messages are displayed and do not overlap other elements.                               |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Scroll to confirm visibility.                                                                                       |                                                                                                                                                                                   |               |        |                                                                                                   |
| Form Submission UI                | UI-TS13-TC01 | Successful form submission feedback (UI)                      | Form page loaded; valid values for all required fields                  | 1. Fill all required fields with valid data.                                                                           | The page shows a confirmation message or navigates to a success screen; success UI is clear to the user.                                                                          |           nan |    nan | If backend not connected, observe client-side behavior only.                                      |
|                                   |              |                                                               |                                                                         | 2. Click Register.                                                                                                     |                                                                                                                                                                                   |               |        |                                                                                                   |
|                                   |              |                                                               |                                                                         | 3. Observe any confirmation UI, redirect, or success message.                                                          |                                                                                                                                                                                   |               |        |                                                                                                   |

## 🔧 Development Guidelines

### Writing Tests

1. **Folder Structure**

   - Place tests in appropriate suite folders under `cypress/tests/`
   - Follow the naming pattern: `<feature>.cy.js`

2. **Best Practices**

   - Use `data-cy` attributes for stable selectors
   - Keep tests atomic and independent
   - Use fixtures for test data
   - Mock network calls with `cy.intercept()`

3. **Common Patterns**

```javascript
// Visit using environment configuration
cy.visit(Cypress.env("formPath"));

// Use fixtures for test data
cy.fixture("example").then((data) => {
  cy.get("[data-cy=contact-name]").type(data.name);
});

// Mock API responses
cy.intercept("POST", "/api/submit", { statusCode: 200 });
```

### Running Tests

1. **Interactive Mode**

```bash
# Open Cypress Test Runner
npx cypress open
```

2. **Headless Mode**

```bash
# Run all tests
npx cypress run

# Run specific suite
npx cypress run --spec "cypress/tests/field-presence-labels/*.cy.js"
```

3. **Configuration**

- Edit `cypress.config.js` for environment-specific settings
- Use `cypress.env.json` for sensitive data (gitignored)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Write and test your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [GitHub Repository](https://github.com/Sandjio/cypress-payment-form-automation-testing)

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
