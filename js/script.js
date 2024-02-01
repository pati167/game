"use script";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/* functions */
const displayMessage = function (message) {
  document.querySelector(".startGuessing").textContent = message;
};
const clickColor = function (color) {
  document.querySelector(".btnClick").style.color = color;
};
const numberColor = function (color) {
  document.querySelector(".number").style.color = color;
};
const bodyColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".btnClick").addEventListener("click", function () {
  const guess = Number(document.querySelector(".numberBox").value);
  console.log(guess, typeof guess);

  /* No input */
  if (!guess) {
    displayMessage("😤 No number!");

    /* player wins */
  } else if (guess === secretNumber) {
    displayMessage("😄 Correrct Number!");
    document.querySelector(".number").textContent = secretNumber;

    bodyColor("#72B896");
    numberColor("#72B896");
    clickColor("#72B896");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    /*When guess is wrong  */
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💀 You lost the game!");
      document.querySelector(".score").textContent = 0;
      bodyColor("#CD4439");
      numberColor("#CD4439");
      clickColor("#CD4439");
    }
  }
});

/* again button */
document.querySelector(".btnAgain").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("😏 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".numberBox").value = "";
  bodyColor("#6F7777");
  numberColor("#6F7777");
  clickColor("#6F7777");
});
