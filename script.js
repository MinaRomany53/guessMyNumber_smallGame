"use strict";

// Create Main Game Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a random number.
let score = 20; // every time play decrement by 1
let highScore = 0; // Store the score after finishing the game
var playing = true; // Prevent playing after finishing the game

// Get Main Elements form the DOM
const boxNumber = document.querySelector(".box-number");
const message = document.querySelector(".message");
const guessBox = document.querySelector(".guees-box");
const highScoreElement = document.querySelector(".highscore");
const scoreElement = document.querySelector(".score");

// Implement Check Button function (the Game Logic).
const checkFunction = function () {
  if (playing) {
    let guessNumber = Number(guessBox.value);
    if (!guessNumber) {
      message.textContent = "❌ No Number !";
      return;
    } else if (guessNumber === secretNumber) {
      playing = false;
      message.textContent = " 🎉 Correct Number !";
      boxNumber.textContent = secretNumber;
      boxNumber.style.padding = "3rem 7rem";
      document.querySelector("body").style.backgroundColor = "#60b347";
      if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
      }
    } else if (
      guessNumber !== secretNumber &&
      guessNumber > 0 &&
      guessNumber < 21
    ) {
      if (score > 1) {
        message.textContent =
          guessNumber < secretNumber ? "📉 Too low!" : " 📈 Too High!";
        score--;
        scoreElement.textContent = score;
      } else {
        message.textContent = " 🎈 You Lost the game !";
        scoreElement.textContent = 0;
        playing = false;
        return 0;
      }
    } else {
      message.textContent = "❌ only from 1 to 20 is allowed";
    }
  }
};

// Implement Again Button function.
const againFunction = function () {
  playing = true;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  boxNumber.style.padding = "3rem 4rem";
  scoreElement.textContent = 20;
  message.textContent = "Start guessing...";
  guessBox.value = "";
  boxNumber.textContent = "?";
};

// Check Button Event.
document.querySelector(".check-btn").addEventListener("click", checkFunction);

// Again Button Event.
document.querySelector(".again-btn").addEventListener("click", againFunction);



/*
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////
//
///
///
///
///
/////
/////
////
////
////
////
////////////////////////////////
/////////////////////
///
////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////
///////////
//////////////
//////////////////////////////
///////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
/////////////////
/////
///////////////////
///////////////////////////////
///////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////
///////////////////////////
///////////////
*/
