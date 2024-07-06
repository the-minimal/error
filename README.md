## Example

```ts
const AssertionError = error<string>("AssertionError");

// ..

if(typeof value !== "number") {
  AssertionError("number", `Value ${value} should be of type number`);
}
```

## Install

```bash
yarn add @the-minimal/error
```

## Benchmark

- Blue = baseline
- Orange = `Error`
- Green = `@the-minimal/error`

### CPU

![CPU benchmark](https://github.com/the-minimal/error/blob/main/docs/benchmark.cpu.png?raw=true)

### RAM

![RAM benchmark](https://github.com/the-minimal/error/blob/main/docs/benchmark.ram.png?raw=true)
