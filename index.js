//alert("Welcome to the Dice game!");
var dice1 = Math.floor(Math.random() * 6) + 1; // 1-6
var dice2 = Math.floor(Math.random() * 6) + 1; // 1-6

image1Srouce = "images/dice" + dice1 + ".png"; // image1Srouce = "images/dice1.png"
image2Srouce = "images/dice" + dice2 + ".png"; // image2Srouce = "images/dice1.png"

document.querySelector(".img1").setAttribute("src", image1Srouce);
document.querySelector(".img2").setAttribute("src", image2Srouce);

// document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";   
// document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// document.querySelector("h1").innerHTML = "Draw!";
// document.querySelector("h1").innerHTML = "Refresh Me!";
// document.querySelector("h1").innerHTML = "Refresh Me!";



if(dice1>dice2){
    document.querySelector("h2").innerHTML = "Player 1 Wins! 🚩";
}
else if(dice1<dice2){
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h2").innerHTML = "Draw!";
}