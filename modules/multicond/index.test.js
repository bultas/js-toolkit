import { equal } from "assert";
import { multiCond } from "./index.js";

describe("multiCond", function () {
  it("multiCond match", function () {
    const actual = multiCond(["traktor", "bagr", "auto"], (v) => {
      return v == "auto";
    });

    const expected = true;

    equal(actual, expected);
  });

  it("multiCond does not match", function () {
    const actual = multiCond(
      ["traktor", "bagr", "auto"],
      (v) => v == "vrtulnik"
    );

    const expected = false;

    equal(actual, expected);
  });

  it("multiCond does not match", function () {
    equal(
      multiCond(["traktor", "bagr", "auto"], (v) => v.length > 1),
      true
    );

    equal(
      multiCond(["traktor", "bagr", "auto"], (v) => v.length > 10),
      false
    );
  });
});
