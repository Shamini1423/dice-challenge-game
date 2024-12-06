var random=Math.floor(Math.random()*6)+1;

var randomImageSource="images/dice"+random+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var random2=Math.floor(Math.random()*6)+1;
 var randomImageSource2="images/dice"+random2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
 if(random>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!"
 }
 else if(random<random2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩"
 }
 else{
    document.querySelector("h1").innerHTML="Draw!"
 }