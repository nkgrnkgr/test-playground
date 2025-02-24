import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, expect, test } from "vitest";
import type { User } from "../../lib/repositories/fetchUsers";
import { server } from "../../mocks/server";
import Page from "./page";

const USER_DATA: User[] = [
  { id: 1, name: "a", email: "a@gmail.com", username: "a" },
  { id: 2, name: "b", email: "b@gmail.com", username: "b" },
  { id: 1, name: "c", email: "a@gmail.com", username: "c" },
];

describe("FormDialog", () => {
  test("should render", async () => {
    const handler = http.get("https://jsonplaceholder.typicode.com/users", () =>
      HttpResponse.json(USER_DATA),
    );
    server.use(handler);
    render(<Page />);
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });
});
