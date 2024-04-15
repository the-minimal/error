import type { Nullable } from "@the-minimal/types";

const ERROR = Symbol();

export type Reason<
	$Left extends string = string,
	$Right extends string = string,
> = `${$Left}:${$Right}`;

export type InferReasonLeft<$Reason extends Reason> = $Reason extends Reason<
	infer $Left,
	string
>
	? $Left
	: never;

export type InferReasonRight<$Reason extends Reason> = $Reason extends Reason<
	string,
	infer $Right
>
	? $Right
	: never;

export type Value = Nullable<unknown>;

export type Context = Nullable<unknown>;

export type Message = Nullable<string>;

export type Error<
	$Reason extends Reason = Reason,
	$Value extends Value = any,
	$Context extends Context = any,
	$Message extends Message = any,
> = {
	reason: $Reason;
	value: $Value;
	context: $Context;
	message: $Message;
};

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

export const isError = (e: any): e is Error => ERROR in e;
