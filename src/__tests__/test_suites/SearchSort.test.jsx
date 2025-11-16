// Tests search input and sorting dropdown behavior
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../components/App";

describe("Search & Sort Tests", () => {
  it("search input updates value when user types", () => {
    // Return an empty list for GET requests
    global.setFetchResponse([]);

    // Render the app
    render(<App />);

    // Select the search input
    const searchInput = screen.getByPlaceholderText("Search your Recent Transactions");

    // Type into the search field
    fireEvent.change(searchInput, { target: { value: "coffee" } });

    // Verify the input updates
    expect(searchInput.value).toBe("coffee");
  });

  it("sort select changes value when user selects an option", () => {
    global.setFetchResponse([]);

    // Render the app
    render(<App />);

    // Select the dropdown
    const select = screen.getByRole("combobox");

    // Change the dropdown value
    fireEvent.change(select, { target: { value: "category" } });

    // Verify it updates
    expect(select.value).toBe("category");
  });
});
