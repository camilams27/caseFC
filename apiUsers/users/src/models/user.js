const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    login:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    telephone:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    birthDate:{
        type: String,
        required: true,
    },
    nameMother:{
        type: String,
        required: true,
    },
    includeDate:{
        type: Date,
        required: true,
    },
    alterDate:{
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema)