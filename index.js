// First Attempt By Myself... lol
// function generateRandomDice() {

//     var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
//     var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
  
//     diceImage = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild;
//     diceImage2 = document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild;

//     if (randomNumber1 === 1) {
//       diceImage.setAttribute('src', 'images/dice1.png');
//     }
//     else if (randomNumber1 === 2) {
//       diceImage.setAttribute('src', 'images/dice2.png');
//     }
//     else if (randomNumber1 === 3) {
//       diceImage.setAttribute('src', 'images/dice3.png');
//     }
//     else if (randomNumber1 === 4) {
//       diceImage.setAttribute('src', 'images/dice4.png');
//     }
//     else if (randomNumber1 === 5) {
//       diceImage.setAttribute('src', 'images/dice5.png');
//     }
//     else {
//       diceImage.setAttribute('src', 'images/dice6.png');
//     }


//     if (randomNumber2 === 1) {
//       diceImage2.setAttribute('src', 'images/dice1.png');
//     }
//     else if (randomNumber2 === 2) {
//       diceImage2.setAttribute('src', 'images/dice2.png');
//     }
//     else if (randomNumber2 === 3) {
//       diceImage2.setAttribute('src', 'images/dice3.png');
//     }
//     else if (randomNumber2 === 4) {
//       diceImage2.setAttribute('src', 'images/dice4.png');
//     }
//     else if (randomNumber2 === 5) {
//       diceImage2.setAttribute('src', 'images/dice5.png');
//     }
//     else {
//       diceImage.setAttribute('src', 'images/dice6.png');
//     }

//     var winner = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;

//     if (randomNumber1 > randomNumber2) {
//       winner.innerHTML = "Player 1 Wins!"
//     }
//     else if (randomNumber1 < randomNumber2) {
//       winner.innerHTML = "Player 2 Wins!";
//     }
//     else {
//       winner.innerHTML = "Draw!";
//     }
// }  
// -----------------------------------------------------------------------------------------------

// Final Solution
// Set Dice Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage;//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Set Dice Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😛 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🤪 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "😗 Draw!";
}