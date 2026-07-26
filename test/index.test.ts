import { describe, expect, it } from "vitest";

import { mean } from "../src/index.js";

describe("mean", () => {
  it("computes an arithmetic mean", () => expect(mean([1, 2, 6])).toBe(3));
  it("rejects empty input", () =>
    expect(() => mean([])).toThrow("must not be empty"));
  it("rejects non-finite values", () =>
    expect(() => mean([1, Infinity])).toThrow("must be finite"));
});
