# JS Toolkit

A set of handy Javascript functions

## Example

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
