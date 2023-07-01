
var l1=0;
var l2=0;

var liczba_x = 1 ; 
var dzial;
var wynik;

function liczby(liczba)
{
    
  
    if(liczba_x==1) 
    {
    document.getElementById("text").value = liczba;
    l1 = liczba;
    }
    else if(liczba_x==2)
    {
    document.getElementById("text").value += liczba;
    l2 = liczba;
    }

}

function dzialania(dzialanie)
{
    document.getElementById("text").value += dzialanie;
    liczba_x = 2;
    dzial = dzialanie;
} 


function wynik()
{

if(dzial=='+')   document.getElementById("text").value = l1+l2;

else if(dzial=='-') document.getElementById("text").value = l1-l2;

else if(dzial=='x') document.getElementById("text").value = l1*l2;

else if(dzial==':') document.getElementById("text").value = l1/l2;


}


function czysc()
{
    document.getElementById("text").value ="";
    liczba_x = 1;
}