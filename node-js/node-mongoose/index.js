const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=> {
    console.log('We are connected correctly to the server');

    Dishes.create({
        name: "AeroSmith Burger",
        description: "Delicious meat with light bread"
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findOne({}).exec();
    })
    .then((dishes)=> {
        console.log(dishes);

        return Dishes.deleteOne({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((error)=> {
        console.log(error);
    })
});




