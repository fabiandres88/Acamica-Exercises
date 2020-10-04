//CLASS 22 EXERCISE ONE

/*1. Perímetro
Solicitar al usuario que ingrese el lado de un
cuadrado. Calcular e informar el perímetro
del cuadrado*/

/*let side =(Number(prompt("Please enter the size of a side of the square")));
let perimeter= (side*side);
alert("The area of the sqare is: " + perimeter);*/

//CLASS 22 EXERCISE TWO

/*#2. Superficie
Solicitar al usuario que ingrese los lados
de un rectángulo. Informar la superficie
del rectángulo.*/

/*var sd1=Number(prompt("Please enter the bigger side of the rectangle (cm):"));
var sd2=Number(prompt("Please enter the smaller side of the rectangle (cm):"));
var area=(sd1*sd2);
alert ("The Area is: "+area+"cm");*/

//CLASS 22 EXERCISE THREE

/*#3. ¿Qué triángulo es?
Solicitar al usuario que ingrese los Ǿ lados de un
triángulo.
Informar si es equilátero, isósceles o escaleno.*/

/*var sd1=Number(prompt("Please enter the side 1 (cm):"));
var sd2=Number(prompt("Please enter the side 2 (cm):"));
var sd3=Number(prompt("Please enter the side 4 (cm):"));

if (sd1===sd2 && sd1===sd3){
    document.write ("This triangle is a equilateral triangle.")
}else {
    if (sd1===sd2 || sd1===sd3 || sd2===sd3){
        document.write ("This triangle is a isocele triangle:")
    }else{
        document.write ("This triangle is a scalene triangle:")
    }
}*/

//CLASS 22 EXERCISE FOURTH

/*#4. Sueldo
Solicitar al usuario el valor de su hora, horas
trabajadas en el mes y horas extras.
Calcular el sueldo sabiendo que el valor de la
hora extra es un Ȁǻ% más que la hora común.*/

/*alert ("Welcome to your Salary Simulator");
var hour=(Number(prompt("Please enter the value of your job hour: $")));
var work=(Number(prompt("Please enter number of normal hours worked")));
var extra=(Number(prompt("Please enter number of extra hours worked")));
var salary=((hour*work)+((extra*hour)*1.5));
document.write ("YOUR SALARY IS: "+ "$" +salary);*/

//CLASS 22 EXERCISE FIFTH

/*#5. Factorial
Solicitar al usuario que ingrese infinitos números
hasta el ingreso de un cero.
A cada número ingresado calcular su factorial.*/

/*alert ("Welcome to factoral program. You can enter much number like you want, if you want to stop the program enter a number zero 0.");
function factorialize(num) {
    
        var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result = result * num;
    }
    document.write(result);
   }
factorialize(Number(prompt("Enter a number:")));*/

//CLASS 22 EXERCISE SIXTH

/*#5. Mayor y menor
Solicitar al usuario que ingrese infinitos
números hasta el ingreso de un cero.
Al finalizar el ciclo mostrar cúal fue el mayor
número ingresado y también el menor.*/

/*alert ("Welcome to major and minor program. You can enter much number like you want, if you want to stop the program enter a number zero 0.");

var maj=0;
var min=1;
while (num!=0) {
    var num=(Number(prompt("Please enter a number:")));
    if (num>=maj){
        maj=num;
    }else if(num!=0 && num<maj) {
        min=num;
    }
    }
    //document.write ("The major number is :"+maj+ "</br>");
   document.write ("The minor number is :"+min);*/