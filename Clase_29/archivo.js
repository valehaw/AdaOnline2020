let codigo = "de la forma que quiero";

//Acá mi variable se llama "codigo" y el valor que le he dado "de la forma que quiero".


let nombre = "Valeria"; //Acá estoy asignando un VALOR. 
let fede = "nombre"; //Acá estoy asignando un VALOR.
let fede2 = nombre; //Acá estoy asignando una variable NO un valor. 

/** 
 * Al crear una variable simplemente declaro su nombre, y  puedo asignarle un valor. Esto es 
 * 
 * let nombre-de-variable = valor
 * 
 * El "=" me permite decir que mi variable va a guardar el valor que describo a la derecha. O sea, aquello
 * que está a la derecha se guarda en esta variable con este nombre. 
 * 
 * Al declarar el valor, implicitamente estoy declarando un "tipo de dato".
 * Los tipos de datos representan una cualidad de la información que tengo. 
 * Por ejemplo, puedo decir si un valor es un texto, o si es un número.
 * 
 */

let miVariableString = "Mi valor"; //String: Usado para textos. 
let miVariableNumber = 1; //Number - pueden ser números enteros o de punto flotante (2.33, 45.01, etc).
let miVariableNumberFloat = 54.345;
let miVariableBoolean = true //Boolean - true or false. Esto se usa en casos como Flag (si algo existe o no) entonces se toma una decisión.. esto es true or false.
let miVariableVacia = null //null - Sirve para indicar que algo no existe o no tiene valor. 
let miVariableUndefined = undefined //undefined - Valores que no han sido definidos. Es algo que no está definido. 
                                      //sin asignarle un valor, por default será undefined. 



//Esto se escribe así: 

let miVariable = "cualquier cosa"; //Esto significa que es un String, pero NO es que se tenga que escribir. 
let miVariable = 1; //Esto es un Number, pero NO es que se tenga que escribir. 
let miVariable = 54.333; //Esto es un Float, pero NO se tiene que escribir float. 
let miVariable = true; //Esto es un Boolean, pero NO se tiene que escribir Boolean.
let miVariable = null; // Esto es un null, pero NO es que se tiene que escribir Null.
let miVariable; // Esto es un undefined, pero NO es que se tiene que escribir Undefined.



///////////////////////////////////////////////////////////////////////////////
//EJEMPLO:

//Entonces, para entenderlo mejor como funciona, escribamos el siguiente ejemplo en la consola:

let variable1;
let variable2 = null;
let variable3 = "hola!";
let variable4 = 3.44;
let variable5 = true;

//le damos ENTER, y enotnces luego si escribimos...

typeof variable1

//la consola responderá...
"undefined" //porque no habíamos definido nada.


typeof variable2

//la consola responderá...
"object" //Esto es algo que te bota javascript te devuelve esto cuando escribes typeof algo que es NULL.


typeof variable3

//la consola responderá...
"string" 


typeof variable4

//la consola responderá...
"number" 


typeof variable5

//la consola responderá...
"boolean" 

//el "typeof" me devuelve el tipo de dato de una variable. 



////////////////////////////////////////////////////////////////////////

//En la consola:

let variable3 = "hola!";

console.log(variable3);

//la consola responde: 

"hola!"

alert(variable3);

//la consola responde con una ventana mostrando el "hola!", porque el ALERT, te salta una ventanita.




////////////////////////////////////////////////////////////////////////

console.log ("pepe");


let miVar = prompt("Dime tu nombre");




 /**
  * Vamos a utilizar tres grandes ayudas para mostrar y obtener los valores 
  */
 console.log(nombreDeVariable); // Imprime en la consola el valor de la variable
 alert(nombreDeVariable); // Imprime una ventana de alerta con el valor de la variable
 nombreDeVariable = prompt("Mensaje de solicitud de datos para mi variable"); // Muestra una ventana que va a permitir
                                                                              // a un usuario ingresar el valor a guardar

/**
 * LET   - es una variable.
 *       - es modificable
 * CONST - de constante
 *       - no es modificable 
 * 
 * Las constantes guardan valor igual que una variable, pero no pueden ser modificadas.
 */

 const NOMBRE_DE_FEDE = "Fede"; //las constantes por lo general suelen ir en mayúsculas 

 NOMBRE_DE_FEDE = "otro nombre"; // Tira error