const l=[];
const l1=[];

/* Textos */
const a=document.getElementById("nom");
const n1=document.getElementById("num1");

/* Párrafos */
const r=document.getElementById("n1");
const nm1=document.getElementById("nm1");
const nm2=document.getElementById("nm2");

/* Botones */
const bot=document.getElementById("b1");
if (bot)
{
    bot.addEventListener("click", escribirNombre);
}

const bV=document.getElementById("b2");
if (bV)
{
    bV.addEventListener("click", d_B)
}


/* h2 */
const h2=document.getElementById("h2");

function d_B()
{   
    const numero=parseInt(n1.value);
    nm1.innerHTML="Su número ingresado: " + numero.toString() + "<br />Su número en binario: " + numero.toString(2)
    + "<br />Su número en Octal: " + numero.toString(8) + "<br />Su número en Hexadecimal: " + numero.toString(16);
}


function escribirNombre()
{
    r.innerHTML="¡Bienvenido " + a.value +"!";
    h2.innerHTML=a.value;
}

