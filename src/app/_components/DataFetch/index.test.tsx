import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DataFetch } from ".";
import { repositories } from "../../../lib/repositories";
import { MockedAppProvider } from "../MockedAppRrovider";

const TEST_DATA = {
  userId: 1,
  id: 1,
  title: "test",
  completed: false,
};

describe("DataFetch", () => {
  test("dataが表示されている", async () => {
    // FetcherをSpyして通信をMockするパターン
    vi.spyOn(repositories, "fetchTodo").mockResolvedValue(TEST_DATA);

    render(
      <MockedAppProvider>
        <DataFetch todoId={1} />
      </MockedAppProvider>,
    );
    const data = await screen.findByTestId("data");
    expect(data).toBeInTheDocument();
  });
});
