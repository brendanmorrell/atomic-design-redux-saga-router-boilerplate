// temporary patch until act error is fixed in react alpha 16.9.1
let originalError = console.error;
beforeEach(
  () =>
    (console.error = (...args) => {
      originalError(
        ...args.filter(arg => typeof arg === 'string' && !arg.includes('act(')),
      );
    }),
);

afterEach(() => (console.error = originalError));
