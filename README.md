# Workflow Course Assignment

This repository is a fork used for the Noroff Workflow course assignment.

The project was improved with modern development tooling to strengthen code quality, formatting consistency, automated testing, and Git workflow practices.

Implemented tooling includes:

- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

---

## Installation

Install dependencies from the project root:

```bash
npm install
```

---

## Running the project

Open the project in VS Code and start the project using Live Server.

Expected local URL:

```text
http://127.0.0.1:5500
```

---

## Available scripts

Start Tailwind CSS watcher:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Run Prettier formatting:

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

---

## Environment variables

Create a local `.env` file using `.env.example` as a template.

Required environment variables:

```env
TEST_EMAIL=
TEST_PASSWORD=
```

Do not commit real environment variable values.

---

## Testing

Unit tests are located in:

```text
tests/unit
```

End-to-end tests are located in:

```text
tests/e2e
```

Playwright tests use mocked API responses where appropriate to reduce dependency on unstable external APIs during testing.

---

## Code quality workflow

This project uses:

- ESLint for static code analysis
- Prettier for consistent formatting
- Husky for automated Git hooks
- lint-staged for staged file validation
- Vitest for unit testing
- Playwright for end-to-end testing

During development, ESLint identified several minor code-quality issues in the existing codebase.

One example was an unnecessary mutable assignment in `displayMessage.js`. The issue did not affect runtime behavior, but refactoring the implementation improved readability and aligned the code with modern JavaScript best practices.

Husky and lint-staged were configured to automatically run checks before commits, helping prevent improperly formatted or failing code from being committed to the repository.
