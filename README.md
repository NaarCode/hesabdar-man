# Hesabdar Man

**Personal finance, designed for everyday use in Persian.**

**Development status: In progress.** Hesabdar Man is not yet a finished or publicly released product. Several modules are implemented in the reviewed source, while others remain under development, testing, or refinement. Features described below represent the current project scope, not a promise of production readiness.

[فارسی](README.fa.md) · [Engineering overview](docs/ARCHITECTURE.md) · [Release and security notes](docs/SECURITY.md)

Hesabdar Man is a mobile personal-finance application built with React Native and Expo. It brings accounts, transactions, categorized spending, budgets, reports and shopping lists into a Persian right-to-left interface. Core financial records are stored locally on the device with SQLite.

## Product areas

- **Accounts:** multiple accounts, balances and account activity.
- **Transactions:** income, expenses, categories and transfers.
- **Planning:** budgets, monthly summaries and spending reports.
- **Shopping:** lists, items and progress tracking.
- **Persian-first design:** right-to-left layouts, Persian dates and localized presentation.
- **Local data:** SQLite-backed storage and migrations, with Zustand for application state.

These areas exist in the supplied source snapshot; their implementation and user experience are being improved as development continues. **Shopping reminder notifications are not yet operational** in that snapshot.

## Technology

React Native · Expo · JavaScript · SQLite (expo-sqlite) · Zustand · React Navigation · Jalaali date utilities

## Architecture

![Conceptual architecture](assets/architecture.svg)

Screens and reusable components interact with application state and domain services. Database queries persist financial records locally. [Architecture overview](docs/ARCHITECTURE.md).

## Project status and roadmap

This is an **active development project**, not a stable release. Current priorities include refining feature workflows, testing database migrations and edge cases, improving the mobile experience, and completing planned functionality such as reminders. No completion date or public release date has been announced.


## Selected source example

A small, source-derived code sample is available: [Persian numeral conversion](examples/persian-digits.js). It illustrates an isolated engineering technique used in the original project. The associated [test file](examples/persian-digits.test.js) uses synthetic inputs and contains no customer or production data.

```sh
node --test examples/persian-digits.test.js
```

The example has been separated from the original application and may be lightly adapted for standalone review. **It is not the full product, a deployment package, or a representation of every proprietary module.**

## Repository scope

This repository is a **portfolio showcase**, not the installable application. The private application source, financial records, database files, signing credentials and proprietary implementation are not distributed here. The architecture graphic is illustrative, not a product screenshot.

## Ownership

© NaarCode. All rights reserved. No open-source license is granted for these showcase materials. See [RIGHTS.md](RIGHTS.md).

[Visit NaarCode](https://naarcode.com/fa)
