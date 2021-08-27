"use strict";

// Generate a random number.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Create Score Variable.
let score = 20;

// Create HightScore Variable.
let highScore = 0;

// Implement Check Button function (the Game Logic).
const checkFunction = function () {
  let guessNumber = Number(document.querySelector(".guees-box").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "❌ No Number !";
    return;
  }
  if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 Correct Number !";
    document.querySelector(".box-number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".box-number").style.padding = "3rem 12rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (
    guessNumber !== secretNumber &&
    guessNumber > 0 &&
    guessNumber < 21
  ) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber < secretNumber ? "📉 Too low!" : " 📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 🎈 You Lost the game !";
      document.querySelector(".score").textContent = 0;
      return 0;
    }
  } else {
    document.querySelector(".message").textContent =
      "❌ only from 1 to 20 is allowed";
  }
};

// Implement Again Button function.
const againFunction = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".box-number").style.padding = "3rem 4rem";
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guees-box").value = "";
  document.querySelector(".box-number").textContent = "?";
};

// Check Button Event.
document.querySelector(".check-btn").addEventListener("click", checkFunction);

// Again Button Event.
document.querySelector(".again-btn").addEventListener("click", againFunction);
