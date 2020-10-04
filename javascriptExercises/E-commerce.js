// Workshop//

// /*4.1 Menú:
// Validar que solamente se ingresen valores permitidos.
// 4.2 Datos de usuarios:
// Agregar la funcionalidad que permita modificar los
// datos de usuario.
// 4.3 Datos de producto:
// Agregar la funcionalidad que permita modificar los
// datos de un producto.
// 4.4 Eliminar usuarios:
// Agregar la funcionalidad que permita eliminar un
// usuario de la aplicación
// 4.5 Eliminar productos:
// Agregar la funcionalidad que permita eliminar un producto.*/

// /*
// This Array contents the user created
// let allusers = [];
// This array contents the products exist and the products that will be created
// let NewProduct = [npro = { name: "Samsung", id: "1234smg", price: 1500000 }, npro = { name: "Sony", id: "1265Sny", price: 1800000 }];
// It allows to instantiate all new users
// class user {
//     constructor(name, age, email, phone) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// It allows to instantiate all new products
// class product {
//     constructor(name, id, price) {
//         this.name = name;
//         this.id = id;
//         this.price = price;
//     }
// }
// This function allow to create a new user
// function newuser() {
//     Usernew = new user((prompt("Enter your name")), (Number(prompt("Enter your age"))), (prompt("Enter your e-mail")), (Number(prompt("Enter your phone number"))));
//     allusers.push(Usernew);
// }
// This function allow to delete an user
// function deleteuser() {
//     for (i = 0; i < allusers.length; i++) {
//         alert("The users are listed below and with their index it can be remove them")
//         alert("Name: " + allusers[i].name + "\n" + "Index: " + i);
//     };
//     var del = (Number(prompt("Please enter the index of the user you want to remove:")));
//     confirm("Do you want to remove? " + allusers[del].name);
//     var indexToRemove = Number(prompt("Please confirm the index: "));
//     allusers.splice(indexToRemove, 1);
// }
// This function allow to create a new product
// function newproduct() {
//     npro = new product((prompt("Enter name of product")), (prompt("Enter the product id:")), (Number(prompt("Enter product price:"))));
//     NewProduct.push(npro);
// }
// This function allow to delete a product
// function deleteproduct() {
//     for (i = 0; i < NewProduct.length; i++) {
//         alert("The products are listed below and with their index it can be remove them")
//         alert("Product: " + NewProduct[i].name + "\n" + "Index: " + i);
//     };
//     var Index1 = (Number(prompt("Please enter the index of the user you want to remove:")));
//     confirm("Do you want to remove? " + NewProduct[Index1].name);
//     var indexProductToRemove = Number(prompt("Please confirm the index: "));
//     NewProduct.splice(indexProductToRemove, 1);
// }

// let conf = confirm("Welcome to our Ecommerce");
// if (conf == true) {
//     menu();
// } else { alert("Thanks for all") };
// function menu() {

//     var option = (Number(prompt("What do you want to do?" + "\n 1. Create User" + "\n 2. Delete User" + "\n 3. List Users" + "\n 4. Add Product" + "\n 5. Delete Product" + "\n 6. List Product")));

//     switch (option) {
//         case 1:
//             alert("Go to create a new user")
//             newuser();
//             menu();
//             break;
//         case 2:
//             alert("let is go to delete users");
//             deleteuser();
//             menu();
//             break;
//         case 3:
//             alert("let is go to list users");
//             for (i = 0; i < allusers.length; i++) {
//                 document.write("Name: " + allusers[i].name + "</br>");
//                 document.write("Age: " + allusers[i].age + "</br>");
//                 document.write("Email: " + allusers[i].email + "</br>");
//                 document.write("Phone: " + allusers[i].phone + "</br>" + "</br>");
//             }
//             menu();
//             break;
//         case 4:
//             alert("Add the products");
//             newproduct();
//             menu();
//             break;
//         case 5:
//             alert("Delete the products");
//             deleteproduct();
//             menu();
//             break;
//         case 6:
//             alert("See the products");
//             for (i = 0; i < NewProduct.length; i++) {
//                 document.write("Name: " + NewProduct[i].name + "</br>");
//                 document.write("Id: " + NewProduct[i].id + "</br>");
//                 document.write("Price: " + NewProduct[i].price + "</br>" + "</br>");
//                 menu();
//             }
//             break;
//         default:
//             alert("Thank you for your visit");
//     }
// }