const mongoose = require("mongoose");

const Cidade = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    estado:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado'
    }
});

module.exports = mongoose.model('Cidade', Cidade);