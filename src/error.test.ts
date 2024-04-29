import { expect, it } from "vitest";
import { error } from "./error";

const AssertionError = error("Assertion");

it("should throw error", () => {
	expect(() => AssertionError({}, "This is wrong!")).toThrow();
});
