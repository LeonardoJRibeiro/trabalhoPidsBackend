const mongoose = require('mongoose');

const Ponto = new mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordenadas:{
        type: [Number],
        required: true,
    },
});

module.exports = Ponto;