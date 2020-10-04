//CLASS 20 EXERCISE ONE

/*Ejercicio 1
NÚMEROS PARES
El usuario ingresará un número y le
especificaremos si el número ingresado
es par o impar.*/

/*let num=Number(prompt("Please enter a number."));
if (num % 2 ===0){
    alert("The number entered was even");
}else {
    alert("The number entered was odd");
};*/

//CLASS 20 EXERCISE TWO

/*Ejercicio 2
DATOS PERSONALES
Solicitar la edad de un usuario.
Luego preguntarle si se encuentra
cursando estudios.
En función de ambas respuestas indicar
el resultado en pantalla.*/

/*var Edad =(prompt("Cual es tu edad?"));
var Estudio=(prompt("Usted Estudia?"));
var Estudio2=(Estudio===si) ? "Usted estudia": "Usted no estudia";
alert (Estudio2)*/

//CLASS 20 EXERCISE THREE

/*Ejercicio 3
VOTANTES
Obtener la edad de un votante e
indicarle si tiene permitido votar.
Las personas mayores de Ǽȃ años votan*/

/*var edad=(Number(prompt("Ingese su edad"))>=18) ? "Usted puede votar": "Usted no puede votar"; 
alert (edad)*/

//CLASS 20 EXERCISE FOURTH

/*Ejercicio 4
CONTRASEÑA
Un usuario intenta ingresar a nuestro
sistema. Le solicitaremos el usuario y
contraseña.
Definiremos una contraseña y ante el
ingreso del usuario definiremos si la ha
ingresado correctamente.
Mostrar un mensaje a la salida según el
caso.*/

/*var defecto=("fabian123");
prompt("Ingrese su usuario");
var key=(prompt("Ingese su contraseña"));
alert ((key!=defecto) ? "Contraseña incorrecta": "Usted a entrado")*/

//CLASS 20 EXERCISE FIFTH

/*Ejercicio 5
RESULTADO DE UNA DIVISIÓN
Pedir dos números a un usuario para
realizar una división.*/

/*alert (Number(prompt("Ingrese primer numero"))/(Number(prompt("Ingrese segundo numero"))))*/

//CLASS 20 EXERCISE SIXTH

/*Ejercicio 6
Bienvenido
Solicitar nombre y apellido.
Mostrar un mensaje de bienvenida con
el nombre completo*/

/*var nombres=prompt("Ingese sus nombres");
var apellidos=prompt("Ingese sus apellidos");
alert (nombres + apellidos)*/

//CLASS 20 EXERCISE SEVENTH

/*Ejercicio 7
HORA DE LA REUNIÓN
El usuario debe ingresar la hora de
comienzo y de finalización de una
reunión.
Si la fecha de comienzo es mayor o
igual a la de finalización, mostrar un
error, de lo contrario indicar que la
información se guardó correctamente.*/

/*var ini=(Number(prompt("Ingrese la hora de inicio de la reunion")));
var fin=(Number(prompt("Ingrese la hora de finalizacion")));
var confirm=((ini>=fin) ? "Error al ingresar los datos" : "La informacion se guardo correctamente" );
alert (confirm)*/