const mongoose = require("mongoose");

const Estado = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        unique: true
    },
    uf:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Estado', Estado);