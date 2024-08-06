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

//DRAWS
test("Player chooses rock, computer chooses rock, should be draw", () => {
  expect(calculateRoundResult(ROCK, ROCK)).toStrictEqual({ outcome: DRAW, message: "Both players chose rock. It's a draw." })
})

test("Player chooses paper, computer chooses paper, should be draw", () => {
  expect(calculateRoundResult(PAPER, PAPER)).toStrictEqual({ outcome: DRAW, message: "Both players chose paper. It's a draw." })
})

test("Player chooses scissors, computer chooses scissors, should be draw", () => {
  expect(calculateRoundResult(SCISSORS, SCISSORS)).toStrictEqual({ outcome: DRAW, message: "Both players chose scissors. It's a draw." })
})


//WINS 
test("Player chooses rock, computer chooses scissors, should be win", () => {
  expect(calculateRoundResult(ROCK, SCISSORS)).toStrictEqual({ outcome: WIN, message: "Player chose rock and computer chose scissors. Player wins.", })
})

test("Player chooses scissors, computer chooses paper, should be win", () => {
  expect(calculateRoundResult(SCISSORS, PAPER)).toStrictEqual({ outcome: WIN, message: "Player chose scissors and computer chose paper. Player wins.", })
})

test("Player chooses paper, computer chooses rock, should be win", () => {
  expect(calculateRoundResult(PAPER, ROCK)).toStrictEqual({ outcome: WIN, message: "Player chose paper and computer chose rock. Player wins.", })
})