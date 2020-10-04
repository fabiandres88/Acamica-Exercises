//MEETING NUMBER 21 EXERCISE NUMBER 1

/*#1. Sumemos
Crear un script que permita ingresar solamente
Ȁ valores mediante prompt y nos muestre la
suma total de todos los valores ingresados
Mostrar el resultado utilizando un alert*/

/*var total=0;
for (i=0;i<5;i++){
    var num=(Number(prompt("Enter the number:")));
    var total=total+num;
}
alert ("The result of the add is: " + total);*/

//MEETING NUMBER 21 EXERCISE NUMBER 2

/*#2. Promedio
A nuestro script agreguemos el promedio de
todos los números ingresados.
Mostrar la suma total y el
promedio utilizando un alert.
¿Validaron que los datos ingresados sean números?
Si no lo hicieron, éste es el momento*/

/*var total=0;
for (i=0;i<5;i++){
    var num=(Number(prompt("Enter the number:")));
    var total=total+num;
}
alert ("The result of the add is: " + total + "     "+"The average is: "+ (total/5));*/

//MEETING NUMBER 21 EXERCISE NUMBER 3//

/*#3. Edades
Ingresar N cantidad de edades mediante prompt
hasta que se ingrese un cero.
Al finalizar mostrar cuántos son mayores de edad
Mostrarlos con un console.log
Recuerda validar que solamente sean números*/

/*var total=0;
while (age!=0){
    var age=(Number(prompt("Please enter your age:")));
    if (isNaN(age)) {
        alert ('Not a Number, Enter a new value!');
      }
    if (age>=18){
       var total=total+1;
       //console.log("The adults are:"+total)/
    }
}
document.write ("The adults are: "+total);*/

//MEETING NUMBER 21 EXERCISE NUMBER 4//

/*#4. Promedio condicional
Ingresar N cantidad de números mediante prompt.
Mostrar el promedio de los números ingresados de Ǽ dígito.
Terminar el programa con la palabra “salir”.
Mostrarlos con un console.log
Recuerda validar que solamente sean números.*/

/*var total=0;
var cont=0;
while (exit!="exit"){
    var num=(Number(prompt("Please enter a number:")));
    if (isNaN(num)) {
        alert ('Not a Number, Enter a new value!');
      }
        if (num>0 && num<=9){
        total=total+num;
        cont=cont+1;
    }
    if (cont>=2){
        var exit=(prompt("Enter the word exit, if you want to finish, if not press enter to coninue.")).toLowerCase();

    }

}
document.write ("The conditional average is: "+ (total/cont));*/


//MEETING NUMBER 21 EXERCISE NUMBER 5

/*#5. Pares e impares
Ingresar N cantidad de números mediante prompt.
Mostrar quién tuvo más ingresos, si los pares o los impares
Terminar el programa un ǻ.
Mostrarlos con un alert
Atentos, ¡puede haber empate!*/

/*var par=0;
var npar=0;

while (num!=0){

    var num=(Number(prompt("Enter the number:")));
    var opr=(num%2);
    if (opr===0 && num!=0){
        par=par+1;
    }
    if (opr>0 && num!=0){
        npar=npar+1;
    }

}
if (par>npar){
    document.write ("Most of the numbers were even: "+ par);
}
else {
    if (npar>par){
        document.write ("Most of the numbers were odd: "+ npar);
    }
    else{
        document.write ("It was a draw: "+ par + "-" + npar);
    }

}*/

//MEETING NUMBER 21 EXERCISE NUMBER 6

/*#6. De números a letras
Ingresa un número entre Ǽ y Ǽǻ mediante prompt y
transformarlo en su equivalente en el abecedario.
Siendo Ǽ = a y Ǽǻ = j cualquier otro valor mostrar un
mensaje de error.
Mostrar resultado con un alert*/


/*var num=(Number(prompt("Enter a number:")));
switch (num){
        case 1:
        document.write ("a");
        break;
        case 2:
        document.write ("b");
        break;
        case 3:
        document.write ("c");
        break;
        case 4:
        document.write ("d");
        break;
        case 5:
        document.write ("e");
        break;
        case 6:
        document.write ("f");
        break;
        case 7:
        document.write ("g");
        break;
        case 8:
        document.write ("h");
        break;
        case 9:
        document.write ("i");
        break;
        case 10:
        document.write ("j");
        break;
        default:
        alert ("Value incorrect")
}*/