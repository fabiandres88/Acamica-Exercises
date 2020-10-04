//CLASS 27 CALLBACKS EXERCISE ONE

/*Script de callback:
Crear una función llamada “calc” que recibe ǽ parámetros, el
primero un número entero el segundo una función que la
utilizaremos como callback.
Mostrar los siguientes console.log dentro de cada función:
● Hola calc.
● Hola callback.*/

/*function calc(IntNumber, callback){
    console.log("Hola calc");
    callback();
};
var second = function (callback){
    console.log("Hola callback");
}
calc(parseInt(prompt("Please enter a number.")),second);*/

//CLASS 27 CALLBACKS EXERCISE TWO

/*Script de callback:
Crea una nueva función para calcular el cuadrado del
número entero.
Calcula el cuadrado del número a través de la función “calc”.*/
/*alert("Welcome to the number to square program");
function calc(callback){
    let ValueToUse=(Number(prompt("Plese enter a number")));
    console.log("Number will be showing to square is: " + ValueToUse)
    console.log("The square is: " + ValueToUse * ValueToUse);
    callback();
};
var second = function (callback){
    console.log("All was good, thanks");
}
calc(second);*/

//CLASS 27 CALLBACKS EXERCISE THREE

/*Script de callback:
Invoca una nueva función a través de un callback que nos
permita conocer la raíz cuadrada de un número entero.*/

/*let Sqrt = (n1) => (Math.sqrt(n1));
function square(n1, callback){
    return callback(n1);
};
let num =(Number(prompt("Please enter the number.")));
console.log("The square root is: " + square(num, Sqrt));*/

//CLASS 27 CALLBACKS EXERCISE FOUR

/*Script de callback:
Crea una nueva función para saber si un número
entero es primo o no.
Utiliza esta nueva función a través de “calc”*/

/*let calc = n1 => {
    for(let i = 2; i < n1; i++)
    if(n1 % i === 0) return false;
  return n1 > 1;
};
function primeNumber(n1, callback){
    return callback(n1);
};
let num =(Number(prompt("Please enter the number.")));
console.log("The number is prime: " + primeNumber(num, calc));*/


//CLASS 27 CALLBACKS EXERCISE FIVE

/*Script asíncrono:
Invoca una nueva función a través de un callback que
nos permita conocer el factorial del número entero.*/

/*let calc = n1 => {
    let result = n1;
    while (n1 > 1) {
        n1--;
        result = result * n1;
    };
    return (result);
};
function factorial(n1, callback) {
    return callback(n1)
}
let num = (Number(prompt("Please enter the number;")));
console.log("The factorial is: " + factorial(num, calc));*/

//CLASS 27 CALLBACKS EXERCISE SIX

/*Array asíncrono:
Generar una función para trabajar como un array.
Debe recibir 2 parámetros, un array y un callback.
Generar una función para agregar un elemento al inicio del
array y otra para agregar un elemento al final.
Generar una función inline que elimine el último elemento.*/

/*let Array1=[];
let size=(Number(prompt("Please enter the size of the Array")));
for (i=0; i<size; i++){
    let values=(Number(prompt("Please enter a value: ")));
    Array1.push(values);
}

let MyFunction =(MyArray, callback) => {
    let number=(Number(prompt("Please enter a value to put at the start")));
    Array1.unshift(number);
    let number2=(Number(prompt("Please enter a value to put at the end")));
    Array1.push(number2);
    return(Array1)
};
function MyCallback (MyArray, callback){
    return callback(MyArray);
};
console.log("The Array is: "  + MyCallback ( Array1 , MyFunction));
console.log("The new Array is: "  + MyCallback (Array1 , function(MyArray){(Array1.pop()); return (Array1);}));*/