import { test, expect } from "vitest";

import { calculate } from "./calculator.js";

// test addition
test("adds 9 + 10 to equal 19", () => {
    expect(calculate("+", 9, 10)).toBe(19);
});

// test subtraction
test("adds 10 - 9 to equal 1", () => {
    expect(calculate("-", 10, 9)).toBe(1);
});