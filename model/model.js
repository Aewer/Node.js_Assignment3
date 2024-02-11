const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    }
}, {
        timestamps: true
})

module.exports = mongoose.model('Data', dataSchema)