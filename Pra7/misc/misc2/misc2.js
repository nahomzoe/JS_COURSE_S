"use strict";

/**
Every time you click on the Start game button, it is currently calling the startGame() and logAnalytics() functions.
Update the event listener such that it only calls the startGame() once, but keeps calling logAnalytics() every time.
**/

/*const button = document.querySelector("#app-button");
let gameStarted = false;
button.addEventListener("click", () => {
  if (!gameStarted) {
    startGame();
    gameStarted = true;
  } else {
    logAnalytics();
  }
});*/
const button = document.querySelector("#app-button");
let gameStarted = false;
button.addEventListener("click", () => {
  while (!gameStarted) {
    startGame();
    gameStarted = true;
  }
  logAnalytics();
});

// do not modify
function startGame() {
  console.log("game started!");
}

// do not modify
function logAnalytics() {
  console.log("log analytics");
}
