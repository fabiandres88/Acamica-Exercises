//EXERCISE REVIEW CLASS 25//
/*#0. Ejercicio de repaso Arreglos:

Dado un arreglo de correos electrónicos, obtener
en otro arreglo sólo los correos de gmail e
imprimirlo por consola.*/

/*let NewArray = [];
var E_Mails = ["usblinks@gmail.com", "fabiandres15@hotmail.com", "carolinajaimes0812@gmail.com;", "usblinks@hotmail.com"];
for (i = 0; i < E_Mails.length; i++) {
    if (E_Mails[i].indexOf('gmail') >= 0) {

        NewArray.push(E_Mails[i]);
    }
}
document.write(NewArray + "</br>");*/

//EXERCISE ONE CLASS 25//

/*#1. Primer Objeto:
Crear un objeto llamado “user” que permite
almacenar nombre, apellido, email de una persona.
Solicitar los datos a través de un prompt.
Al finalizar mostrar la información con un alert.*/

/*let user={ };
user.name =(prompt("Enter your name:"));
user.lastname= (prompt("Enter your last-name:"));
user.mail= (prompt("Enter your e-mail:"));
document.write ("Nombre: "+ user.name + "</br>" + "Apellidos: "+ user.lastname+ "</br>" + "Email: "+ user.mail);*/

//EXERCISE TWO CLASS 25//

/*#2. Primera clase:
Crear una clase users para contener nombre, apellido, email
y edad de un usuario.
Crear un objeto a partir de esta clase y completar los datos.
Mostrar el objeto con un alert.*/

/*class users{

}

user1 = new users;
user1.name =(prompt("Enter your name:"));
user1.lastname=(prompt("Enter your lastname"));
user1.email=(prompt("Enter your e-mail"));
user1.age=(prompt("Enter your age"));
document.write ("Name: " +user1.name + "</br>");
document.write ("Last Name: " +user1.lastname + "</br>" );
document.write ("E-Mail: " +user1.email + "</br>");
document.write ("Age: " +user1.age) + "</br>";*/


//EXERCISE THREE CLASS 25//

/*#3. Primeros métodos:
A la clase users agregar los siguientes métodos:
● is_adult() que devuelva true / false dependiendo
si es mayor de Ǽȃ años.
● get_full_name() que retorne el nombre y apellido
concatenados.*/

/*class users {
    constructor(name, lastname, email, age) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
    }
    get fullname() {
        return this.get_full_name();
    }
    get_full_name() {
        alert("User name: " + this.name + " " + this.lastname);
    }
    get aduult() {
        return this.is_adult;
    }
    is_adult() {
        if (this.age >= 18) {
            alert("This user is adult");
        }
        else {
            alert("This user is not adult");
        }
    }
}

user1 = new users;
user1.name = (prompt("Enter your name:"));
user1.lastname = (prompt("Enter your lastname"));
user1.email = (prompt("Enter your e-mail"));
user1.age = (prompt("Enter your age"));
document.write("Name: " + user1.name + "</br>");
document.write("Last Name: " + user1.lastname + "</br>");
document.write("E-Mail: " + user1.email + "</br>");
document.write("Age: " + user1.age) + "</br>";
user1.get_full_name();
user1.is_adult();*/


//EXERCISE FOUR CLASS 25//

/*#4. Array como base de datos:
Crear un modelo que permita almacenar diferentes perros.
Cada perro debe guardar la siguiente información:
● Raza
● Nombre
● Peso
● Edad
Crear un ciclo para que cada vuelta nos permita ingresar
un nuevo perro.*/

/*let myDogs = [];
class RacesDogs {
    constructor(race, name, weight, age) {
        this.race = race;
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
}
let quantity = (Number(prompt("Please enter how many dogs you want to enter.")));
for (i = 1; i <= quantity; i++) {
    dog = new RacesDogs;
    dog.race = (prompt("Enter the race."));
    dog.name = (prompt("Enter the name."));
    dog.weight = Number(prompt("Enter the weight."));
    dog.age = Number(prompt("Enter the age."));
    myDogs.push(dog);
};

for (i = 0; i < myDogs.length; i++) {
    let ToShow = myDogs[i];
    document.write("Race: " + ToShow.race + "</br>");
    document.write("Name: " + ToShow.name + "</br>");
    document.write("Weight: " + ToShow.weight + " Pounds " + "</br>");
    document.write("Age: " + ToShow.age + " Years: " + "</br>" + "</br>" + "</br>");

}*/
