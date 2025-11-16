// Test adds a transaction through the form
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "../../components/App";
import { vi } from "vitest";

describe("Add Transactions Test", () => {
  it("calls POST with correct body", async () => {
    // Mock fetch for GET and POST requests
    const fetchMock = vi.fn((url, options) => {
      if (!options || options.method === "GET") {
        return Promise.resolve({
          ok: true,
          json: async () => [],
        });
      }

      if (options.method === "POST") {
        return Promise.resolve({
          ok: true,
          json: async () => ({
            id: 99,
            date: "2022-01-10",
            description: "Test Add",
            category: "Misc",
            amount: "99.99",
          }),
        });
      }
    });

    global.fetch = fetchMock;

    let utils;

    // Render the app inside an act() call to handle state updates
    await act(async () => {
      utils = render(<App />);
    });

    const { container } = utils;

    // Select the form inputs
    const dateInput = container.querySelector('input[name="date"]');
    const descriptionInput = screen.getByPlaceholderText("Description");
    const categoryInput = screen.getByPlaceholderText("Category");
    const amountInput = screen.getByPlaceholderText("Amount");

    // Fill out the form fields
    fireEvent.change(dateInput, { target: { value: "2022-01-10" } });
    fireEvent.change(descriptionInput, { target: { value: "Test Add" } });
    fireEvent.change(categoryInput, { target: { value: "Misc" } });
    fireEvent.change(amountInput, { target: { value: "99.99" } });

    const form = container.querySelector("form");

    // Attach the input fields to the form so e.target.date.value works
    form.date = dateInput;
    form.description = descriptionInput;
    form.category = categoryInput;
    form.amount = amountInput;

    // Submit the form
    await act(async () => {
      fireEvent.submit(form);
    });

    // Verify that POST was called once
    const postCalls = fetchMock.mock.calls.filter(
      ([_, opts]) => opts && opts.method === "POST"
    );

    expect(postCalls.length).toBe(1);

    // Extract and verify the request body
    const body = JSON.parse(postCalls[0][1].body);

    expect(body).toEqual({
      date: "2022-01-10",
      description: "Test Add",
      category: "Misc",
      amount: "99.99",
    });
  });
});
