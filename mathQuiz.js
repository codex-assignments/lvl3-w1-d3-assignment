"use strict";

import prompt from "prompt-sync";
import chalk from "chalk";

const input = prompt();
let score = 0;

const testData = [
  { question: "what is 5 + 5?", answer: "10" },
  { question: "what is 5 * 5?", answer: "25" },
  { question: "what is 5 / 5?", answer: "1" },
  { question: "what is 5 - 5?", answer: "0" },
  { question: "what is 5 - 4?", answer: "1" },
];

export function startQuiz() {
  for (let d of testData) {
    const userAnswer = input(d.question);
    if (userAnswer === d.answer) {
      score++;
    }
  }
  const testScore = ((score / testData.length) * 100).toFixed(2);
  const testResult = colorCodeTestScore(testScore);
  return testResult;
}

function colorCodeTestScore(testScore) {
  if (testScore < 50) {
    return chalk.red(testScore) + "%";
  } else if (testScore < 75) {
    return chalk.yellow(testScore) + "%";
  } else {
    return chalk.green(testScore) + "%";
  }
}
