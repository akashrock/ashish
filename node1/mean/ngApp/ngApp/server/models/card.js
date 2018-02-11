const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    card_num: Number,
    pin: Number,
    balance: Number,
});

module.exports = mongoose.model('cards', CardSchema, 'card');