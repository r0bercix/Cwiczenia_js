

let tab = ["red", "green", "blue", "white", "cyan", "aqua", "gold"];

let btn = document.getElementById("button");
let color = document.querySelector('.color');

btn = addEventListener("click", function(){


let random = randomNumber();

document.body.style.background = tab[random];

color.innerHTML = tab[random];


});


function randomNumber()
{
    return Math.floor(Math.random()*tab.length)
}