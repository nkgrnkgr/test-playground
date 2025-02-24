import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Page from "./page";

describe("Counter page", () => {
  test("Add", async () => {
    render(<Page />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /Add/i });
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("Counter: 0");
    await user.click(button);
    expect(counter).toHaveTextContent("Counter: 1");
  });
});
