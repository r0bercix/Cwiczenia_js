let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let btn = document.getElementById("button");
let start = false;
let time = 0;
let setTime = setInterval(0); // można zastąpić setTime = 0

function button() {
    // btn.style.backgroundColor= "#ff9900";
    // button.style.color = "white";
    //btn.style.color = "brown";

    if (start == true) {
        start = false;
    }
    else if (start == false) {
        start = true;
    }

        //start = !start;

    if (start == false) {
        btn.style.background = "#39e600";
        btn.style.color = "black";
        document.getElementById("button").value="Start";
        stop();
        document.getElementById("seconds").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
    }
    else {
        btn.style.background = "#ff9901";
        btn.style.color = "brown";
        document.getElementById("button").value="Stop";
        //uruchomienie();
        //btn.value = "Stop";
        time = Date.now();
       // uruchomienie(); //żeby była 0 sekunda
        setTime = setInterval(uruchomienie, 1000);
    }


}



function uruchomienie()
{
    let newTime = Date.now();

  let odejmowanie = (newTime-time)/1000;
  odejmowanie = Math.floor(odejmowanie);
  console.log(odejmowanie); 
  let sekundy = odejmowanie;
  let minuty = sekundy/60;
  let godziny = minuty/60;



sekundy = odejmowanie%60;
minuty = Math.floor(odejmowanie/60);
godziny = Math.floor(odejmowanie/3600);

sekundy<10 ? sekundy ="0" + sekundy: true;

if(minuty<10)
{ 
    
    minuty = "0" + minuty;
   
}
if(godziny<10)
{ 
    
    godziny = "0" + godziny;
   
}



seconds.innerHTML = sekundy;
minutes.innerHTML = minuty;
hours.innerHTML = godziny;




}

function stop()
{
    clearInterval(setTime);
}





