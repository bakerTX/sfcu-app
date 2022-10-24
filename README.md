# SFCU - Spooky Federal Credit Union

## Problem Description

Provide a basic ATM (Automated Teller Machine) implementation. At a minimum, this
program should offer the following features:

- Enter a PIN to identify a unique customer
- Query and show the current account balance
- Simulate the withdrawal of cash
- Simulate a deposit
- A daily withdrawal limit

## Live app:

[https://sfcu-app.vercel.app/](https://sfcu-app.vercel.app/)

- Use pin '1337' to login

## Source code:

[https://github.com/bakertx/sfcu-app](https://github.com/bakertx/sfcu-app)

## Notes:

- Use pin '1337' to login
- The daily withdrawal limit is 5000 so the withdraw function will stop after that point.
- For the sake of time, there is currently no database. User and balance data is just stored in memory, see `/services/ATMService.js`.
- In the same vein, dev mode has an issue with data persistence, related to NextJS recompiling the backend on each API request. I recommend building in prod mode for an accurate, working example. (see below)

## Installation:

1. Fork the repo
2. Clone the repo
3. Install dependencies with `npm install`
4. (recommended) Run the application in prod mode with `npm run build` then `npm run start`.

or

4. Run the application in dev mode with `npm run dev`

## Tests:

- found in /tests
- run `npm run test`

## Next steps/ideas for discussion:

- In dev mode, persistence is busted - move to an actual database soon.
- The controlled components' default values are buggy with "0" and backspacing.
- It would be an improved UX to control the PIN input with a keyboard as well as a mouse.
- Show updated daily withdrawal limits on UI.
- Add logged-in state to local storage.
- Show loading states when the API is slow.
- Fix bug on mobile where number inputs are overlaid by the graphics at the bottom of the page.
- Reset the daily limit at midnight every night.
- Add multiple users with their own balances.
