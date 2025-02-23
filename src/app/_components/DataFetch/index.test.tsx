import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DataFetch } from ".";
import { repositories } from "../../../lib/repositories";
import { MockedAppProvider } from "../MockedAppRrovider";

describe("DataFetch", () => {
  vi.spyOn(repositories, "fetchTodo").mockResolvedValue({
    userId: 1,
    id: 1,
    title: "test",
    completed: false,
  });
  render(
    <MockedAppProvider>
      <DataFetch todoId={1} />
    </MockedAppProvider>,
  );

  test("dataが表示されている", async () => {
    const data = await screen.findByTestId("data");
    expect(data).toBeInTheDocument();
    console.log(data.textContent);
  });
});
