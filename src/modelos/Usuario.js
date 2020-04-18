const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    sexo:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true;
    }
});

module.exports = mongoose.model('Usuario', Usuario);