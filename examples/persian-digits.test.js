import assert from "node:assert/strict";
import test from "node:test";
import { cleanDigits, toPersianDigits } from "./persian-digits.js";
test("converts ASCII digits to Persian numerals", () => {
  assert.equal(toPersianDigits("12045"), "۱۲۰۴۵");
});
test("normalizes Persian digits for numeric input", () => {
  assert.equal(cleanDigits("۱,۲۳۴ تومان"), "1234");
});
