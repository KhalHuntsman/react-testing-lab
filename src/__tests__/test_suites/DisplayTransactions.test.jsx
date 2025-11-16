// Test that transactions appear when the app loads
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";

describe("Display Transactions Test", () => {
  it("renders transactions on startup", async () => {
    // Mock GET response with two transactions
    global.setFetchResponse([
      { id: 1, description: "Coffee", category: "Food", date: "2022-01-01", amount: "5.00" },
      { id: 2, description: "Rent", category: "Housing", date: "2022-01-02", amount: "1200.00" },
    ]);

    // Render the app
    render(<App />);

    // Wait for the transaction text to appear on screen
    await waitFor(() => {
      expect(screen.getByText("Coffee")).toBeInTheDocument();
      expect(screen.getByText("Rent")).toBeInTheDocument();
    });
  });
});
