const express = require('express');
const myModel = require('../models/my-model');

const router = express.Router();

router.get('/api', function(req, res){
    const id = req.params.id ;
    res.json(myModel.person(id)); 
});

router.get('/:id', function(req, res){
    res.send('<html><head><body style = "color: purple; font-size: 3rem">Person: '+ req.params.id + '</body></head></html>');
});

router.post('/new-person', function(req,res){
    console.log(req.body);
    const { name, age, position } = req.body;
    res.json(myModel.newPerson(name, age, position))
});

router.post('/create-persons', function(req,res){
    console.log("crear personas");
    res.json(myModel.getPersons());
});

module.exports = router;