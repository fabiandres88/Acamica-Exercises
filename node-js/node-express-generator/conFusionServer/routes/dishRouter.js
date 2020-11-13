const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');
const { response } = require('express');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get( (req, res, next) => {
    Dishes.find({})
    .then((dishes) => {
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    },(error) => next(error))
    .catch((error) => next(error));   
})

.post( (req, res, next) => {
    Dishes.create(req.body)
    .then((dish) => {
        console.log('Dish Created', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);    
    },(error)=> next (error))
    .catch((error) => next(error))
})

.put( (req, res, next) => {    
    res.end('PUT operation not supported on /dishes.');  
})

.delete( (req, res, next) => {
    Dishes.remove({})
    .then((response) => {
        res.statusCode = 204;
        res.setHeader('Content-Type', 'application/json');
        res.json(response); 
    },(error)=> next(error))
    .catch((error) => next(error));
});

dishRouter.route('/:dishId')

.get( (req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);     
    }, (error) => next(error))
    .catch((error) => next(error));
})

.post( (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'
    + req.params.dishId); 
})

.put( (req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, {new: true})
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (error) => next(error))
    .catch((error) => next(error));
})

.delete( (req, res, next) => {
    Dishes.findByIdAndDelete(req.params.dishId)
    .then((response) => {
        res.statusCode = 204;
        res.setHeader('content-Type','application/json');
        res.json(response);
    },(error)=> next(error))
    .catch((error) => next (error));
});

module.exports = dishRouter;
