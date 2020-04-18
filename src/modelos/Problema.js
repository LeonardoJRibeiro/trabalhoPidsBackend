const mongoose = require("mongoose");

const Ponto = require("./util/Ponto");

const Problema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    local:{
        type: String,
        required: true
    },
    localizacao:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        required: true
    },
    indicacoesSolucionado:{
        type: Number,
        required: true
    },
});


module.exports = mongoose.model('Problema', Problema);
