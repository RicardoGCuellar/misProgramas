var l=[];

/* Textos */
var a=document.getElementById("nom");
var n1=document.getElementById("num1");

/* Párrafos */
var r=document.getElementById("n1");
var nm1=document.getElementById("nm1");

/* Botones */
var bot=document.getElementById("b1");
if (bot)
{
    bot.addEventListener("click", escribirNombre);
}

var bV=document.getElementById("b2");
if (bV)
{
    bV.addEventListener("click", d_B)
}


/* h2 */
var h2=document.getElementById("h2");

function d_B()
{
    var n=parseInt(n1.value);
    while (n>1)
    {  
        var resp=n%2;
        l.push(Math.floor(resp));
        n=n/2; 
    }
    l.push(Math.floor(n))
    
    nm1.innerHTML = l.reverse();
    var leng=l.length;
    for (var i=0; i<=leng; i++)
    {
        l.shift(); 
    }   
}

function escribirNombre()
{
    r.innerHTML="¡Bienvenido " + a.value +"!";
    h2.innerHTML=a.value;
}