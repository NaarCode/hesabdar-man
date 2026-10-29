# Architecture overview

The reviewed project is built with React Native and Expo. React Navigation handles navigation and reusable UI components support Persian right-to-left layouts. Zustand stores manage application state. Persistence uses expo-sqlite, database schema and migration modules, a data-service layer and domain-specific queries.

## Source areas

Accounts and account summaries; transactions and transfers; categories; budgets; financial reports; shopping lists and items; Persian dates and formatting; local receipt files.

## Data flow

1. A user interacts with a screen or reusable component.
2. Application state and domain services coordinate the action.
3. Query functions read from or update SQLite on the device.
4. The screen reflects the updated state.

The diagram is a conceptual overview, not an exact runtime sequence diagram. Proprietary schema details and application logic are excluded.

## Development scope

This project remains in active development. In the supplied snapshot, src/utils/notifications.js contains placeholder notification functions rather than an operational scheduler. The showcase does not advertise active reminders. Source review does not constitute a full functional or security audit.
