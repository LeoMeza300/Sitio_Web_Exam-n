const mongoose = require('mongoose');

Let Schema = mongoose.Schema;

Let pintoresSchema = new Schema({
    nombre:{
        type: String,
        require:[true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        require:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model(name: 'pintores', pintoresSchema);