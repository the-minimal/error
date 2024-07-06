/**
 * Creates error factory.
 *
 * @param {string} name - Name of error
 *
 * @example
 * ```ts
 * const AssertionError = error<string>("AssertionError");
 * ```
 */
export const error = <Cause = unknown>(
  name: string
) => {
  /**
   * Throws error.
   *
   * @param {Cause} cause - Error cause
   * @param {string} message - Error message
   * @param {number} code - Error code
   *
   * @example
   * ```ts
   * AssertionError("number", "Value of type string should be number");
   * ```
   */
  return (
    cause: Cause,
    message: string = "",
    code: number = 500
  ) => {
    throw {
      name,
      cause,
      message,
      code
    };
  };
};
