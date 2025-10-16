## Purpose

This file gives succinct, actionable guidance for automated coding agents working on the
`cypress-payment-form-automation-testing` repository. It documents the project's layout,
developer workflows, and concrete examples to make the agent productive immediately.

## High-level architecture

- This repository contains Cypress end-to-end tests (Cypress v15) for a web form UI.
- Key areas:
  - `cypress/` — primary test source tree
    - `cypress/e2e/` — expected location for spec files (Cypress default for v10+ projects)
    - `cypress/fixtures/` — JSON fixtures used to mock network responses (e.g. `example.json`)
    - `cypress/support/` — global helpers; `commands.js` contains custom commands and is
      imported by `cypress/support/e2e.js`.
  - `cypress.config.js` — Cypress configuration, uses `defineConfig` and `e2e` section. Node
    event hooks belong here (see `setupNodeEvents`).
  - `package.json` — project metadata and devDependency on `cypress@^15.4.0`.

Why this structure matters

- Tests are written as user-facing flows that exercise the payment form at the target site.
- Fixtures and custom commands centralize test data and repeatable UI actions. Keep logic
  that is reused across specs in `cypress/support/commands.js` rather than duplicating it.

Developer workflows (concrete)

- Install dev deps:
  - Run `npm install` in the repo root.
- Open interactive Cypress runner (local development):
  - `npx cypress open` — picks up `cypress.config.js` and loads `cypress/support/e2e.js`.
- Run headless in CI or locally:
  - `npx cypress run` — runs all specs headless.
  - Run a single spec: `npx cypress run --spec "cypress/e2e/your-spec.cy.js"`.
- Suggested package.json scripts (not currently present):
  - `"cypress:open": "cypress open"`
  - `"cypress:run": "cypress run"`

Repository-specific conventions & patterns

- Spec file naming: use `*.cy.js` (example: `form-validation.cy.js`) and place under
  `cypress/e2e/` so Cypress auto-discovers them.
- Fixtures: store example payloads in `cypress/fixtures/*.json`. Use `cy.fixture('example')`
  to load `cypress/fixtures/example.json` in tests or `cy.intercept()` to mock network calls.
  Example pattern: intercept API calls and reply with a fixture to remove flakiness.
- Support & custom commands: keep reusable UI actions (like filling the payment form)
  in `cypress/support/commands.js` and import them in `cypress/support/e2e.js`.
- Configuration: place environment-specific overrides in `cypress.config.js`'s `setupNodeEvents`
  or via `env` keys if needed by CI.

Integration points and external dependencies

- The tests exercise an external practice site (test cases in the repo README reference
  `https://practice.expandtesting.com/form-validation`). Network calls to that host may
  exist; prefer stubbing via `cy.intercept()` + fixtures to keep tests deterministic.
- Dev dependency: `cypress@^15.4.0` declared in `package.json`. No other CI or tooling
  is configured in the repository.

Concrete examples (copyable snippets)

- Intercept and mock a GET request with a fixture:

```js
cy.intercept("GET", "/api/todo", { fixture: "example.json" });
```

- Load a fixture and assert a form field shows expected text:

```js
cy.fixture("example").then((data) => {
  cy.get("[data-cy=contact-name]").type(data.name);
  cy.contains("Looks good!");
});
```

Debugging tips specific to this repo

- Use `npx cypress open` and the Test Runner to step through failing flows.
- Insert `cy.pause()` or `cy.debug()` in flaky tests to inspect runtime state.
- Prefer `cy.intercept()` with fixtures when possible — the repo already contains
  `cypress/fixtures/example.json` as a template.

Where to look first (important files)

- `cypress/config.js` — general behavior and event hooks (this project uses `cypress.config.js`).
- `cypress/support/commands.js` — reusable commands and helper actions.
- `cypress/support/e2e.js` — imported automatically by Cypress; it wires support code.
- `cypress/fixtures/example.json` — example fixture to model mock responses.
- `README.md` — test case matrix and expected form behaviors; useful when writing specs.

Merging guidance

- If `.github/copilot-instructions.md` already exists, preserve any human-authored
  operational notes at the top and append or merge the sections above. Prefer
  exact file references (paths listed above) and keep short examples.

Questions for the maintainer

- Are there any CI pipelines or browsers we should prefer for CI runs (Chrome, Electron)?
- Are there naming rules for fixtures or custom command exports we must follow?

If anything here is unclear or missing, tell me which area to expand (examples, CI steps,
or common test templates) and I will iterate.
