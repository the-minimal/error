export const error = (
  name: string
) => (cause: unknown, message = "", code = 500) => {
  throw {
    name,
    cause,
    message,
    code
  };
};
