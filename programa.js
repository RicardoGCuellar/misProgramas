/* Textos */
const a=document.getElementById("nom");
const n1=document.getElementById("num1");

/* Párrafos */
const r=document.getElementById("n1");
const nm1=document.getElementById("nm1");

/* Botones */
const bot=document.getElementById("b1");
if (bot)
{
    bot.addEventListener("click", escribirNombre);
}

const b2=document.getElementById("b2");
if (b2)
{
    b2.addEventListener("click", conversorDecimal)
}

/* h2 */
const h2=document.getElementById("h2");

function conversorDecimal()
{   
    const numero=n1.value;
    nm1.innerHTML="<br />Su número en binario: " + numero.toString(2) + "<br />Su número en Octal: " 
    + numero.toString(8) + "<br />Su número en Hexadecimal: " + numero.toString(16);
}
                                       
function escribirNombre()
{
    r.innerHTML="¡Bienvenido " + a.value +"!";
    h2.innerHTML=a.value;
}

