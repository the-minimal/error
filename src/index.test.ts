import { expect, it } from "bun:test";
import { error, isError } from "index";

it("should throw error", () => {
	expect(() => error("@the-minimal/error:error")).toThrow();
});

it("should return true if error is @the-minimal/error", () => {
  try {
    error("@the-minimal/error:error");
  } catch (e) {
    expect(isError(e)).toBe(true);
  }
});
