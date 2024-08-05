//  import `test` and `expect` functions from Vitest
//  import the `sum` function from sum.js
//  create a bare bones test
//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12

import { test, expect } from 'vitest';
import { sum } from './sum.js';


// sum.test.js


// console.assert(sum(1, 2) === 3, 'sum(1, 2) should return 3');

// assert.equal(sum(1, 2), 3);

test('adds 1 + 2 to equal 3', () => {
  expect(sum(10, 5)).toBe(15);
})

