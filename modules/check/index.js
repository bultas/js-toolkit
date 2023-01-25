export function check(question, { timeout } = { timeout: 500 }) {
  let called = 0;

  const check = (res, reject) => {
    if (question()) {
      res(called);
    } else if (called >= 10) {
      reject();
    } else {
      called++;
      setTimeout(() => {
        check(res, reject);
      }, timeout);
    }
  };

  return new Promise((res, reject) => {
    check(res, reject);
  });
}
