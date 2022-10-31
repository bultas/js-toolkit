# JS Toolkit

A set of handy Javascript functions

## Example

### Debounce

```
pipe(
  (v) => v + 1,
  (v) => v * 2
)(0)
// 2
```

### Multicond

```
multiCond(
  ["first", "second", "third"],
  (v) => v == "second"
);
// true

```

### Debounce

```
const debouncedLog = ((e) => console.log(log), 300);

debouncedLog("something to log")
```
