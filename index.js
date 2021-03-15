

if (performance.navigation.type == 1)
{
var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;



document.querySelector(".img1").setAttribute("src" , "dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src" , "dice" + player2 + ".png");

if(player1 > player2 ) document.querySelector("h1").textContent = "🚩 player1 wins !";
else if (player1 < player2) document.querySelector("h1").textContent = "player2 wins ! 🚩";
     else document.querySelector("h1").textContent = "Draw";
}
