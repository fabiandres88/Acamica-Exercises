//CLASS 28 PROMISEW EXERCISE ONE

/*1 - Promesa #1:
Realiza una promesa y que
luego de 7 segundos
se resuelva de manera exitosa.*/

/*let MyPromise = new Promise(
    function (resolve, reject) {
        let MyName = (prompt("Please enter your name: "));
        if (true) {
            setTimeout(function() {
                resolve("your name is: " + MyName);
        }, 7000)
    }
        else {
            reject("You did not enter a name.");
        }

    }
);
MyPromise.then(function (response){
    console.log("Response: " + response);
});*/


//CLASS 28 PROMISEW EXERCISE TWO

/*2 - Promesa #2:
Realiza una promesa y que
luego de Ǽ segundo
sea rechazada.*/

/*let MyPromise = new Promise(
    function (resolve, reject) {
        let num1 = (Number(prompt("Please enter your Age")));
        if (num1 >= 18) {
            resolve("You are ana adult");
        }
        else {
            setTimeout(function () {
                reject("you are not allowed here");
            }, 6000)
        }
    }
);
MyPromise.then (function (response){
    console.log(response);
})
MyPromise.catch (function (error){
    console.log(`Result${error}`);
});*/


//CLASS 28 PROMISEW EXERCISE THREE

/*3 - Promesa #3:
Realiza una promesa que sea aceptada o
rechazada según el siguiente enunciado:
Generar un número random entre 0 y 100, si
el número es par la promesa debe ser exitosa
si es impar debe ser rechazada.
Mostrar el número random en la respuesta.*/

/*let MyPromise = new Promise (function (resolve, reject){
       let num=Math.floor(Math.random()*100);
        if (num % 2 === 0){
        resolve(`The random number was even: ${num}`);
    }
    else {
        reject("The random number was odd: " + num)
    }
});
MyPromise.then (function (response){
    console.log(response);
});
MyPromise.catch (function (error){
     console.log(error)
})*/


//CLASS 28 PROMISEW EXERCISE FOUR

/*4 - Carrera de promesas:
Generar 2 promesas.
Cada una debe demorar en responder, como máximo, un segundo,
pero los tiempos de ejecución deben ser aleatorios.
Capturar la primera promesa que finalice y mostrar el
tiempo de ejecución.*/

/*let FirstPromise = new Promise(function (resolve, reject) {
    let time1 = (Math.floor(Math.random() * 100)) * (9);
    setTimeout(function () {
        resolve((`First win ${time1}`));
    }, time1)
})
let SecondPromise = new Promise(function (resolve, reject) {
    let time2 = (Math.floor(Math.random() * 100)) * (9);
    setTimeout(function () {
        resolve(("Second win " + time2));
    }, time2)
})
Promise.race([FirstPromise, SecondPromise]).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(eror);
});*/


//CLASS 28 PROMISEW EXERCISE FIVE

/*5 - Cadena de promesas:
Ingresar un mediante un prompt un número.
Mediante una cadena de promesas mostrar el resultado
de las siguientes operaciones matemáticas en orden:
● Sumarlo por sí mismo
● El cuadrado del número
● La raíz cuadrada
● El factorial*/

/*alert("Welcome to the program.")
var numero = Number(prompt(("Please Enter a number:")));

let Suma = new Promise(function (resolve, reject) {
    var suma = (numero + numero);
    resolve(suma);
    reject("Valor ingresado incorrecto.");
});

let Potencia = new Promise(function (resolve, reject) {
    var potencia = (numero * numero);
    resolve(potencia);
    reject("Valor ingresado incorrecto.");
});

let Raiz = new Promise(function (resolve, reject) {
    var raiz = (Math.sqrt(numero));
    resolve(raiz);
    reject("Valor ingresado incorrecto.");
});

let Factorial = new Promise(function (resolve, reject) {
    function factorial() {
        for (let i = 1; i <= numero; i++) {
            var result = numero;
            if (numero === 0 || numero === 1)
                return 1;
            while (numero > 1) {
                numero--;
                result = result * numero;
            }
        }
        return (result);
    }
    resolve(factorial(numero));
    reject("Valor ingresado incorrecto.");
});

Suma
    .then(function (Response1) {
        console.log("La suma fue: " + Response1)
        return Potencia;
    }).then(function (Response2) {
        console.log("La potencia fue: " + Response2)
        return Raiz;
    }).then(function (Response3) {
        console.log("La raiz cudrada fue: " + Response3)
        return Factorial;
    }).then(function (Response4) {
        console.log("El factorial fue: " + Response4)
    }).catch(function (Error) {
        console.log("Answer: " + Error)
        return Potencia;
    })*/