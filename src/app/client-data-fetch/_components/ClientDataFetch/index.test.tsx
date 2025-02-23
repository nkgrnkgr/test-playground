import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, expect, test, vi } from "vitest";
import { ClientDataFetch } from ".";
import { MockedAppProvider } from "../../../../components/AppProvider/mocked";
import { repositories } from "../../../../lib/repositories";
import { server } from "../../../../mocks/server";

const TEST_DATA = {
  userId: 1,
  id: 1,
  title: "test",
  completed: false,
};

describe("ClientDataFetch", () => {
  test("vi.spyOnでMockする", async () => {
    // FetcherをSpyして通信をMockするパターン
    vi.spyOn(repositories, "fetchTodo").mockResolvedValue(TEST_DATA);

    render(
      <MockedAppProvider>
        <ClientDataFetch todoId={1} />
      </MockedAppProvider>,
    );
    const data = await screen.findByTestId("data");
    expect(data).toBeInTheDocument();
  });

  test("mswでMockする", async () => {
    const handler = http.get(
      "https://jsonplaceholder.typicode.com/todos/1",
      () => HttpResponse.json(TEST_DATA),
    );
    server.use(handler);

    render(
      <MockedAppProvider>
        <ClientDataFetch todoId={1} />
      </MockedAppProvider>,
    );
    const data = await screen.findByTestId("data");
    expect(data).toBeInTheDocument();
  });
});
