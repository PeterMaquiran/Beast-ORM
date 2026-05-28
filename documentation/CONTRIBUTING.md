# Contributing to Beast ORM

Thank you for contributing to Beast ORM.

This project is focused on providing a promise-based ORM for IndexedDB with a clean developer experience, strong typing, and browser-first architecture.

---

# Development Philosophy

This project follows a TDD (Test Driven Development) workflow.

## Contribution Flow

1. Create or update a test first
2. Run the tests and confirm the failure
3. Implement the feature or fix
4. Run tests again until everything passes
5. Open a pull request

The test should describe the expected behavior before implementation.

---

# Requirements

This project uses:

* Node.js `22.22.0`
* pnpm `11.0.9`

The recommended way to manage versions is with Volta.

## Install Volta

* macOS/Linux:

```bash
curl https://get.volta.sh | bash
```

* Windows:

Download from:
https://volta.sh

---

# Install Dependencies

```bash
pnpm install
```

---

# Project Structure

```txt
src/           -> ORM source code
playground/    -> Browser playground used for testing
cypress/       -> End-to-end tests
dist/          -> Production build output
```

---

# Running the Development Environment

Start the playground server and Cypress together:

```bash
pnpm dev
```

This command:

* Starts the Vite playground server
* Opens Cypress
* Reloads automatically when source files change

---

# Running Tests

Run tests in headless mode:

```bash
pnpm test
```

---

# Building the Project

Generate the production build:

```bash
pnpm build
```

---

# Writing Tests

Tests are written using Cypress against a real browser environment.

This project intentionally tests against actual browser APIs such as:

* IndexedDB
* DOM APIs
* Transactions
* Browser storage behavior

Avoid mocking browser database behavior whenever possible.

---

# Development Notes

The playground imports directly from `src/`.

This means:

* No rebuild step is required during development
* Vite handles hot reload automatically
* Changes are reflected instantly in the browser

---

# Pull Request Guidelines

Before opening a PR:

* Ensure all tests pass
* Keep PRs focused and small
* Add tests for new features
* Update documentation when behavior changes

---

# Reporting Issues

When reporting bugs, include:

* Browser version
* Operating system
* Reproduction steps
* Minimal example if possible

---

# Thank You

Your contributions help improve the IndexedDB ecosystem for everyone.
