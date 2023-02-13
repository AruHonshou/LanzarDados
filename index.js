// First Dice
let randomNumer1 = Math.floor(Math.random()*6+1);
console.log(randomNumer1);
let randomDiceImage = "dice" + randomNumer1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Second Dice
let randomNumer2 = Math.floor(Math.random()*6+1);
console.log(randomNumer2);
let randomDiceImage2 = "dice" + randomNumer2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// if which player will win
if (randomNumer1 == randomNumer2) {
    document.querySelector("h1").innerHTML = "Draw!"
} else if (randomNumer1 > randomNumer2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}