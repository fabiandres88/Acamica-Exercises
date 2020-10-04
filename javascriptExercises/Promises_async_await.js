// /*function MostrarRespuesta(url) {
// 	return fetch(url)
// 	.then(response => response.text())
// 	.then(text => {
// 	console.log(text);
// 	}).catch(err => {
// 	console.error('Falló el fetch', err);
// 	});
// }
// logFetch('https://jsonplaceholder.typicode.com/users');*/


// /*async function MostrarRespuesta(name){
// 	let url =  'https://jsonplaceholder.typicode.com/users' + name;
// 	const resp = await fetch(url);
// 	const datos = await resp.json();
// 	return datos;
// }

// datos = MostrarRespuesta(name);

// datos.then(function(respuesta){
// 	console.log(respuesta)
// });*/


// /*async function MostrarRespuesta(name){
// 	let url =  'https://jsonplaceholder.typicode.com/users' + name;
// 	const resp = await fetch(url);
// 	const datos = await resp.json();
// 	return datos;
// }

// datos = MostrarRespuesta(name);

// datos.then(function(respuesta){
// 	console.log(respuesta)
// });*/


// CLASS 29 EXERCISE ONE


// /*Traer información:
// Sobre siguiente endpoint
// https://jsonplaceholder.typicode.com/users
// Generar una promesa que muestre los nombres de usuario
// una vez que la llamada al endpoint esté completa*/

// /*function GetUser(url) {

// 	return fetch(url)
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(response => {
// 			let MyArray = response;
// 			for (i = 0; i < MyArray.length; i++) {
// 				let user = (MyArray[i].name);
// 				console.log(`User ${i + 1}: ${user}`);
// 			}

// 		}).catch(error => {
// 			console.error("fetch failed", error);
// 		});
// }
// GetUser("https://jsonplaceholder.typicode.com/users");*/


// CLASS 29 EXERCISE TWO

// /*Traer información:
// Sobre siguiente endpoint
// https://jsonplaceholder.typicode.com/users
// Generar una función asíncrona que muestre el nombre de la
// calle dónde vive (address), de usuario una vez que la llamada
// al endpoint esté completa*/

// /*function GetAddress(url) {
// 	return fetch(url)
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(response => {
// 			let MyArray = response;
// 			for (i = 0; i < MyArray.length; i++) {
// 				let address = (MyArray[i].address);
// 				console.log(`Street-User${i + 1}: ${address.street}`);
// 			}
// 		}).catch(error => {
// 			console.error("fetch failed", error);
// 		})
// }
// GetAddress("https://jsonplaceholder.typicode.com/users");*/


// CLASS 29 EXERCISE THREE

// /*Traer información:
// Sobre siguiente endpoint
// https://api.github.com/users/ + username
// Generar un array de username válidos de github, mostrar
// los resultados
// Listado de usuarios activos en github
// https://commits.top/*/

// /*function GetUsers (url) {
// 	return fetch (url)
// 	.then(response => {
// 		return response.json ();
// })
// .then (response => {
// 	response;
// 	let MyUsers = new Array ();
// 	for (let  i = 0;   i< response.length; i ++) {
// 		MyUsers.push(response[i].login)
// 	}
// 	console.log(MyUsers);				
// }).catch (error =>{
// 	console.error ("Fetch Failed", error);
// })
// }
// GetUsers("https://api.github.com/users");*/


// CLASS 29 EXERCISE FOUR

// let MyUsers = new Array();
// let usertocall = 0;
// function GetUsers(url) {
// 	return fetch(url)
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(response => {
// 			response;
// 			for (let i = 0; i < response.length; i++) {
// 				MyUsers.push(response[i].login)
// 				usertocall = MyUsers[i];
// 			}

// 			console.log(response);
// 			console.log(MyUsers);
// 			console.log(MyUsers[0]);
// 		}).catch(error => {
// 			console.error("Fetch Failed", error);
// 		})
// }

// GetUsers("https://api.github.com/users");
// GetUsers("https://api.github.com/users/mojombo/followers");
// GetUsers("https://api.github.com/users/" + usertocall + "/followers");*/