import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, expect, test, vi } from "vitest";
import { MockedAppProvider } from "../../components/AppProvider/mocked";
import { repositories } from "../../lib/repositories";
import { server } from "../../mocks/server";
import Page from "./page";

const TEST_DATA = {
  userId: 1,
  id: 1,
  title: "test",
  completed: false,
};

describe("client-data-fetch page", () => {
  test("vi.spyOnでMockする", async () => {
    // FetcherをSpyして通信をMockするパターン
    vi.spyOn(repositories, "fetchTodo").mockResolvedValue(TEST_DATA);

    render(
      <MockedAppProvider>
        <Page />
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
        <Page />
      </MockedAppProvider>,
    );
    const data = await screen.findByTestId("data");
    expect(data).toBeInTheDocument();
  });
});
