import { test, expect } from "vitest";

import { calculate } from "./calculator.js";

// test addition
test("adds 9 and 10 to equal 19", () => {
    expect(calculate("+", 9, 10)).toBe(19);
    expect(calculate("+", 1, 3)).toBe(4);
});

// test subtraction
test("subtracts 9 from 10 to equal 1", () => {
    expect(calculate("-", 10, 9)).toBe(1);
    expect(calculate("-", 5, 3)).toBe(2);
});

// test multiplication
test("multiplies 3 by 8 to equal 24", () => {
    expect(calculate("*", 3, 8)).toBe(24);
    expect(calculate("*", 5, 10)).toBe(50);
    expect(calculate("*", 4, 1)).toBe(4);
});


// test division
test("divides 12 by 2 to equal 6", () => {
    expect(calculate("/", 12, 2)).toBe(6);
    expect(calculate("/", 6, 3)).toBe(2);
    expect(calculate("/", 1, 0)).toBe(Infinity);
});


// test squaring
test("squares 13 to equal 169", () => {
    expect(calculate("sq", 13, 2)).toBe(169);
    expect(calculate("sq", 2, 8)).toBe(4);
});

// test throwing an error for an unsupported operator

test("expect an error with an unsupported operator", () => { 
    expect(() => calculate("&", 10, 2)).toThrowError('operator'); 
});