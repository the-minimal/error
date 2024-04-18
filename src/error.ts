import {ERROR} from "./constants";
import {Context,Message, Reason, Value } from "./types";

export const error = (
  reason: Reason,
  value: Value = null,
  context: Context = null,
  message: Message = null,
) => {
  throw {
    [ERROR]: 1,
    reason,
    value,
    context,
    message,
  };
};

export const isError = (e: any): e is Error => e.hasOwnProperty(ERROR);
