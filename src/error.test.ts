import { expect, it } from "vitest";
import { error, isError } from "./error";

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
