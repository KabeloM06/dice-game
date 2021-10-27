
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

var randomSource = "images/" + randomDice;
var randomSource2 = "images/" + randomDice2;

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

dice1.setAttribute("src", randomSource);
dice2.setAttribute("src", randomSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "It's a draw!";
  }