const { Schema, model } = require('mongoose');

const Bike = new Schema({
    name: { type: String, require: true, unique: true },
    type: { type: String, require: true },
    color: { type: String, require: true },
    status: { type: String, require: true },
    size: { type: Number, require: true },
    price: { type: Number, require: true },
    id: { type: String, require: true, unique: true },
    description: { type: String, default: '' }
});

module.exports = model('Bike', Bike);