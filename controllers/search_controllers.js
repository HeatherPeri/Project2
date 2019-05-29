var express = require('express');

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

router.get('/api/data', function(req, res){
    db.Search.findAll()
    .then(function(searchData){
        res.json(searchData)
    })
})