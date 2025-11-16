# Royal Bank of Flatiron App

A simple React application that allows users to view, search, sort, and add financial transactions. This project is commonly used as a learning exercise for React state management and front-end testing.

---

## Features

- View a list of transactions
- Search transactions by description
- Sort transactions by category or description
- Add new transactions using a form
- Fully tested with Vitest + React Testing Library

---

## Running Tests

Install dependencies:

npm install

bash
Copy code

Run the test suite:

npm test

yaml
Copy code

Tests include:

- Adding a transaction  
- Displaying initial transactions  
- Searching and sorting interactions  

---

## ▶Running the App

Start the development server:

npm run dev

arduino
Copy code

Then open:

http://localhost:3000

yaml
Copy code

---

## Project Structure

src/
components/ # React components
tests/ # Test files
test_suites/ # Grouped test cases

yaml
Copy code

---

## Notes

- Tests mock `fetch` to control server responses.
- Some tests manually attach inputs to the `<form>` to match DOM behavior.
- This project is intentionally simple and suitable for learning React basics.

---

## License

Free for educational use.