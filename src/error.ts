export const error = (
  name: string
) => (cause: unknown, message = "") => {
  throw {
    name,
    cause,
    message,
  };
};
