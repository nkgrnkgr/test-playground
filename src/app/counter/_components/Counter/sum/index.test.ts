import { describe, expect, test } from "vitest";
import { sum } from ".";

type TestProps = {
  description: string;
  param: { a: number; b: number };
  expected: number;
};

describe("sum", () => {
  test.each<TestProps>([
    {
      description: "整数",
      param: { a: 1, b: 2 },
      expected: 3,
    },
    {
      description: "少数",
      param: { a: 1.0000000001, b: 2.0000000001 },
      expected: 3.0000000002,
    },
  ])("$description", ({ param, expected }) => {
    const { a, b } = param;
    const actual = sum(a, b);
    expect(actual).toBe(expected);
  });
});
