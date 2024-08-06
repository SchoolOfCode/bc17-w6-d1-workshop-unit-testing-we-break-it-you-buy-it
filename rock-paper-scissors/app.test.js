import { test, expect } from "vitest";
import {
  calculateRoundResult,
  generateComputerMove,
  calculateNewScores,
  ROCK,
  PAPER,
  SCISSORS,
  DRAW,
  WIN,
  LOSS
} from "./app.js";

test("Player chooses rock, computer chooses rock, should be draw", () => {
  expect(calculateRoundResult(ROCK, ROCK)).toStrictEqual({ outcome: DRAW, message: "Both players chose rock. It's a draw." })
})

test("Player chooses paper, computer chooses paper, should be draw", () => {
  expect(calculateRoundResult(PAPER, PAPER)).toStrictEqual({ outcome: DRAW, message: "Both players chose paper. It's a draw." })
})

test("Player chooses scissors, computer chooses scissors, should be draw", () => {
  expect(calculateRoundResult(SCISSORS, SCISSORS)).toStrictEqual({ outcome: DRAW, message: "Both players chose scissors. It's a draw." })
})