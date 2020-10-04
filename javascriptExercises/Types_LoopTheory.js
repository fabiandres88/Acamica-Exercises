//document.write("My First Js");

// document.write("<h1>Hello world</h1>")

// document.write("<p>This is my first try to make a dinamic web site whit javascript</p>")

//alert ("My first JS");

//prompt("Give your name")

//var Numberone=Number(prompt("Please give a number"))
//var Numbertwo=Number(prompt("Please give another number"))
//alert(Numberone+Numbertwo)

//var Age=Number(prompt("Put you age"))
//document.write(Age);

//alert((Number(prompt("Put a number"))+(Number(prompt("Put another number")))))

// var x= 10 + 5;
// document.write(x);

//var x= 10;
// var y= x + 5 + 22 + 6548;
// document.write(y);

// var myvariable= 30 % 4;
// document.write(myvariable);

/*var mynum=Number(prompt("Give a number"))
var y=Number(prompt("Give a number"));
var one=mynum += y;
var two=mynum -= y;
var three=mynum *= y;
var four=mynum /= y;
alert(one);
alert(two);
alert(three);
alert(four);
alert(one+two+three+four);*/

/*var one= 10;
alert (one==5);
alert (one=="10");
alert (one===10);
alert(one<10);
alert(one<=10);
alert(one>10);
alert(one>=10);*/

/*var one= 10;
alert (one!=5);
alert (one!="10");
alert (one!=10);
alert (one!==5);
alert (one!=="10");
alert (one!==10);*/

/*//Logical Operators

var one=10;
var two=20;
var three=30;
var four=40;
alert ((one!=two)&&(three>two));
alert ((four==one)||(three>=four));
*/

//Conditional Operators

/*var Age=Number(prompt("Put your age"));
var Adult =(Age>=18) ? "you are an adult": "you are too young";
alert (Adult);*/
/*var height=Number(prompt("Enter your weight"));
var accept=(height>=70) ? "You are into": "You need to get more weight";
alert (accept);*/

//String Operators

/*var mystring="I going to get my new job.";
var mystring2= " As a software developer in Globant Medellin";
document.write (mystring+mystring2);*/

/*IF-ELSE-CONDITION 
var edad=(Number(prompt("Cual es su edad?:")))
var estatura=(Number(prompt("Cual es su estatura? en centimetros:")))
var peso=(Number(prompt("Cual es su peso?en kilogramos:")))
if(edad>=16&&estatura>=175&&peso>=75){
  alert("Puede ingresar a esta atraccion");
}else{
alert  ("No es apto para ingresar"); 
};*/

/*ELSE-IF-CONDITION*/

/*var age=(Number(prompt("Cual es su edad?:")));
var parent=((prompt("Viene acompañado deun adulto si o no?:")));
if(age>=18){
  alert ("Puede ingresar");
}
else if (parent==="si"){
  alert ("Puede ingresar acompañado");
}
else {
  document.write ("<h1>NO PUEDE ENTRAR</h1>")
}*/

/*SWITCH CONDITION*/

/*var day=(prompt("Ingrese inicial dia de la semana:(l,m,w,j,v,s,d)"));

switch (day){
  case "l":
    document.write("<h1>Hoy es LUNES</h1>");
    break;
    case "m":
      document.write("<h1>Hoy es MARTES</h1>");
      break;
      case "w":
        document.write("<h1>Hoy es MIERCOLES</h1>");
        break;
        case "j":
          document.write("<h1>Hoy es JUEVES</h1>");
          break;
          case "v":
            document.write("<h1>Hoy es VIERNES</h1>");
            break;
            case "s":
              document.write("<h1>Hoy es SABADO</h1>");
              break;
              case "d":
                document.write("<h1>Hoy es DOMINGO</h1>");
                break;
                default :
                document.write("<h1>ERROR AL INGRESAR INICIAL</h1>");
}*/

/*FOR-LOOP*/

/*for (i=1;i<=5;i++){
document.write(i+ "<br />")
}*/

/*for (i=0;i<=20;i+=1){
  document.write(i+ "<br />");
  }*/

  /*WHILE-LOOP*/

  /*var age=(Number(prompt("Ingrese su grado actual:")));
  while (age<=11){
    document.write ("Falta cursar estos grados:" +age +"<br />");
  age++;
  }*/

  /*DO-WHILE-LOOP*/

  /*var x=Number(prompt("Ingese tiempo para cuenta regresiva en el rin:"));
  do{
document.write ("Y, a la: "+ x+ "<br />"  );
x++;
  }
    while (x<=10);*/