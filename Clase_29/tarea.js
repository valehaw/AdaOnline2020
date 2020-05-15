
//Crear 2 constantes usando prompts.
//Con esas dos constantes, crear una tercera constante o variable juntando las dos primeras.
//El resultado esperado
//resultado "palabra1 palabra2"



const PALABRA1 = prompt("Primer nombre");
const PALABRA2 = prompt("Segundo nombre");
alert (PALABRA1+" "+PALABRA2);



//OTRA FORMA DE HACERLO:



const var1 = prompt("Decime Palabra1");
const var2 = prompt("Decime Palabra2");
var1+var2
// "Palabra1palabra2"
var1+' '+var2
// "Palabra1 palabra2"
var1+" "+var2
// "Palabra1 palabra2"

`${var1} ${var2}` // template string
//"Palabra1 palabra2"

const varNumber = 76;
`${var1} ${var2} - ${varNumber}` // template string
//"Palabra1 palabra2 - 76"

const varBool = true;
`${var1} ${var2} - ${varBool}` // template string
//"Palabra1 palabra2 - true"


var1.concat(var2);
// "Palabra1palabra 2"

var1.concat(" ", ".", var2, "---");
// "Palabra1 .palabra 2---"

`Estas fueron las dos palabras ingresadas: ${var1} y ${var2}`
//"Estas fueron las dos palabras ingresadas: Palabra1 y palabra 2"

`Un texto a mano y después ${nombre-de-variable}`

