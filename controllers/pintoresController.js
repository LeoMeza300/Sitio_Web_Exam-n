Let mongoose = require('mongoose');

Let pintores = require('../models/pintores');

Let pintoresController = {};


pintoresController.list = (req, res)=>{
    pintores.find({})
    .limit(20)
    .skip(num:0)
    .exec(callback:(err, pintor)=>{
        if(err){
            console.log('Error: ', err)
        }
        res.render(view:'../views/index', options:{
            pintores: pintor,
            titulo: "Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;