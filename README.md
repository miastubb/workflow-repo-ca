# Workflow Course Assignment

This repository is a fork used for the Workflow course assignment. The project has been updated with ESLint, Prettier, Husky, lint-staged, Vitest, and Playwright to improve code quality and testing workflow.

## Installation

Run the following command in the project root:

```bash
npm install
```

## Run the project

Open the project in VS Code and select:

```text
Open with Live Server
```

Expected local URL:

```text
http://127.0.0.1:5500
```

## Available scripts

Run Tailwind CSS watcher:

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run format
```

Run Vitest unit tests:

```bash
npm test
```

Run Vitest in watch mode:

```bash
npm run test:watch
```

Run Playwright end-to-end tests:

```bash
npm run test:e2e
```

Run Playwright UI mode:

```bash
npm run test:e2e:ui
```

## Environment variables

Create a local `.env` file using `.env.example` as a template.

Required environment variables:

```env
TEST_EMAIL=
TEST_PASSWORD=
```

Do not commit real `.env` values.

## Testing

Unit tests are located in:

```text
tests/unit
```

End-to-end tests are located in:

```text
tests/e2e
```

The Playwright tests mock API responses to avoid dependency on unstable external APIs.

## Code quality tools

This project uses:

- ESLint for linting
- Prettier for formatting
- Husky for Git hooks
- lint-staged for staged file checks
- Vitest for unit testing
- Playwright for end-to-end testing

ESLint successfully identified minor code-quality issues in the existing codebase
One example was a no-useless-assignment warning in displayMessage.js
The warning did not affect runtime behavior but demonstrated static analysis working correctly
