var randomNumber1 = Math.floor(Math.random() * 6 + 1); //getting random no for first image
var image1 = "dice" + randomNumber1 + ".png";          //eg dice1.png
var src1 = "images/" + image1;                         //images/dice1.png path 
var randomimage1 = document.querySelectorAll("img")[0];//getting first child of img tag as index is 0
randomimage1.setAttribute("src", src1);                //src=images/dice1.png  changed 


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var image2 = "dice" + randomNumber2 + ".png";
var src2 = "images/" + image2;
var randomimage2 = document.querySelectorAll("img")[1];
randomimage2.setAttribute("src", src2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


