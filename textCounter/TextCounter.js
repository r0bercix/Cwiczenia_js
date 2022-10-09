let pole = document.getElementById("TextPole").value;

let przycisk = document.getElementById("przycisk").innerHTML = pole;


function klikanie()
{

    document.getElementById("Ilosc").innerHTML = "Zostało wpisane tyle liter:" + przycisk.length;
    
}

