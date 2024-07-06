import { expect, it } from "vitest";
import { error } from "./error";

const AssertionError = error("Assertion");

it("should throw error", () => {
	expect(() => AssertionError(null, "Missing or invalid token", 401)).toThrow();
});
