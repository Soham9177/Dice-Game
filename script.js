var randomVariable1=Math.floor(Math.random()*6)+1;
var randomVariable2=Math.floor(Math.random()*6)+1;

var randomDiceImg="images/"+"dice"+randomVariable1+".png";
var randomDiceImg1="images/"+"dice"+randomVariable2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImg);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImg1);
var reloadButton = document.querySelector('.buton');
    reloadButton.addEventListener('click', function() {
      location.reload(); 
    });

if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 wins🏆"
}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="Player 2 wins🏆"
}
else{
    document.querySelector("h1").innerHTML="DRAW➖";
}