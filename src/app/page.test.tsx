import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Home from "./page";

describe("Counter", () => {
  test("CountUp", async () => {
    render(<Home />);
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("Counter: 0");
    const user = userEvent.setup();
    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    await user.click(addButton);
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("Counter: 1");
  });
});
