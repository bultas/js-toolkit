import { equal } from "assert";
import { check } from "./index.js";

describe("check", function () {
  it("check", async function () {
    let count = 0;
    equal(
      await check(
        () => {
          count = count + 1;
          if (count > 3) {
            return true;
          }
          return false;
        },
        { timeout: 10 }
      ),
      3
    );
  });
});
