//ARRAYS

//unshift- add in the start
//push- add in the end
//shift- delete in the start
//pop- delete in the end
// splice- add or delete (array.splice (1,0,"element"))- (array.splice (1,1))
//,indexof()-return the index of the element

/*let Myarr= [];
Myarr.unshift("amor");//IT ALLOWS TO ADD A NEW ELEMENT AT THE BEGINING OF THE ARRAY//
Myarr.push("PRINCESA");//IT ALLOWS TO ADD A NEW ELEMENT AT THE END OF THE ARRAY//
Myarr.indexOf("PRINCESA");//IT RETURNS THE INDEX OF A ELEMENT (1) AND IT ALLOWS TO SEARCH AND ELEMENT//
document.write(Myarr);//It ALLOWS TO ACCESS TO THE ELEMENTS OF ARRAY//
document.write(Myarr[1]);//It ALLOWS TO ACCESS TO THE ELEMENT OF ARRAY BY ITS INDEX//
alert (Myarr.length);//IT ALLOWS TO KNOWS HOW MANY ELEMENTS HAS THE ARRAY//
Myarr.shift();//IT ALLOWS TO DELETE THE FIRST ELEMENT IN THE ARRAY//
Myarr.pop();//IT ALLOWS TO DELETE THE LASST ELEMENT IN THE ARRAY//

let indece=Myarr.indexOf("amor");
Myarr.splice(indice,1);//IT ALLOWS TO DELETE AN SPECIFIC ELEMENT*/


/*ARRAYS EXERCISE ONE CLASS 24
#1. Simple Array Sum
Dada una serie de enteros, encuentre la suma de sus
elementos.*/


/*var own=[1,2,3,4,5,6,7,8,9];
var suma
for (let i=0; i<own.length;i++){
    suma=suma+own[i];
    document.write (suma);
}
alert (suma);*/

/*ARRAYS EXERCISE TWO CLASS 24
#2. A Very Big Sum
Calcula e imprime la suma de los elementos de un array,
teniendo en cuenta:
● Debe crear una función con un array como parámetro
de entrada.
● La función debe sumar la cantidad de iteraciones
dadas, más, valores de números enteros dentro del
array.*/

/*
function ask(test = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    var suma = 0;
    for (let i = 0; i < test.length; i++) {
        suma = suma + test[i];
    }
    alert("The total add is: " + (test.length + suma));
}
ask();*/


/*ARRAYS EXERCISE THREE CLASS 24
#3. Circular Array Rotation
John Watson conoce una operación llamada rotación
circular derecha en un array de enteros. Una operación de
rotación mueve el último elemento del array a la primera
posición y desplaza todos los elementos restantes a la
derecha. Para cada matriz, realice varias rotaciones
circulares a la derecha y devuelva el valor del elemento en
un índice dado:
● Array definido por prompt.
● Cantidad de rotaciones al azar entre Ǽ y Ȁ.  Mostrar la posición 2 y 3 del array, el cual tendrá mínimo 5
posiciones.*/


/*test = [];
var size=Number(prompt("Please enter the size of the array:"));
for (let i=1;i<=size;i++){
    test.push(Number(prompt("Please enter a value:")));
}
var rot=Number(prompt("Please enter the number of rotations of the array:"));
var cont=size-1;
for (i=1;i<=rot;i++){
    test.unshift(test[cont]);
    test.pop(test[cont]);
}
alert (test[2]);
alert (test[3]);*/


/*ARRAYS B EXERCISE ONE CLASS 24
#1. Stop  Ingresar mediante prompt números indefinidamente hasta
que el usuario ingrese “Stop”.
Almacenar todos los datos en un array y mostrarlos al final.   
“Stop” debe quedar fuera de nuestra array*/

/*alert ("If you want to stop the program enter the word stop");
var stop=[];
let isNumber=true;
do{
    var number=Number(prompt('Enter a number:'));
    if(!isNaN(number)){stop.push(number);
                       isNumber=true}
    else{isNumber=false}
}
while(isNumber){
    
alert('Look your array: '+stop);
}*/

/*ARRAYS B EXERCISE TWO CLASS 24
#2. Dividir arrays
Ingresar mediante prompt números hasta el ingreso de
un 0.
Crear un array para los números pares, otro para los
impares y un tercero para almacenar datos no numéricos.
Mostrar los resultados al finalizar el ciclo.
El valor 0 no incluirlo en ningún array

confirm("Do you want to start the arrays division program?");
alert("You can enter whatever type of value you want, integer numbers or words");

let even = [];
let odd = new Array();
let other = [];

let quantity = (Number(prompt("Please enter how much values do you want to enter?")));
for (let i = 1; i <= quantity; i++) {
    let val = ((prompt("Please enter a value.")));
    let num = Number(val);
    if (isNaN(num)) {
        other.push(val);
    }
    else if (!isNaN(num) && num % 2 == 0 && num !=0) {
        even.push(num);
    }
    else if (!isNaN(num) && num % 2 != 0 && num !=0){
        odd.push(num);
    }
    else{
        alert("Thanks, value no accepted");
    }
}*/


/*ARRAYS B EXERCISE THREE CLASS 24

#3. Eliminar extremos
Ingresar mediante prompt números hasta el ingreso de
un 0.
Almacenar la información en un array.
Eliminar del array el número más alto y el más bajo.
Si el más alto o bajo se repiten solo
eliminarlos una vez

let myArray = new Array();
let major = 0;
let minor=99999;

alert("Welcome to delete extremes");
while (num !== 0) {
    var num = (Number(prompt("Please enter a number:")));
    myArray.push(num);
} myArray.pop(myArray.length - 1);
let work = myArray;
document.write("The Array was: " + myArray + "</br>");
for (let i = 0; i < work.length; i++) {
    if (work[i] >= major) {
        major = work[i];
    }
};
let indice = work.indexOf(major);
work.splice(indice, 1);

for (let i = 0; i < work.length; i++) {
    if (work[i] < minor) {
    minor = work[i];
    }
}
let indice2 = work.indexOf(minor);
work.splice(indice2, 1);


document.write("The major number was: " + major + "</br>");
document.write("The minor number was: " + minor + "</br>");
document.write("The New Array is: " + myArray + "</br>");*/


/*ARRAYS B EXERCISE FOUR CLASS 24

#4. Array, función y excepción.
Crear una función que reciba como parámetro un array y
que nos retorne el númerO más alto que contiene.

● Si el parámetro no es un array, lanzar una excepción
● Si no hay ningún elemento numérico, lanzar una excepción*/
/*To do: Can make the Array evaluation

let myArray = new Array();
let major = 0;
alert("Welcome to My Function");
let interactions = (Number(prompt("Please define how many values you want to enter in the array")))
for (i = 1; i <= interactions; i++) {
    let val = (prompt("Please enter a value:"));
    let num = Number(val);
    if (isNaN(num)) {
        myArray.push(val);
    }
    else {
        myArray.push(num);
    }
}
document.write("The Array is: " + myArray + "</br>");
function myFunction(Array) {
    try {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] >= major) {
                major = myArray[i];
            }

        };
        if (major === 0) {
            throw "There is not a number into the array";
        }
        return (major);
    }
    catch (e) {
        alert("Error: " + e);
    }


    /*if (Array.isArray(myArray)) {
    throw (new Error("It is not an Array"));
}
 
 
else {
    alert("All is good");
}
};
myFunction(myArray);


document.write("The major number was: " + major + "</br>");*/
