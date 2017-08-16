'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Campo nome necessário']
    },
    brand_id: {
        type: String,
        required: [true, 'Campo marca necessário']
    },
    model_id: {
        type: String,
        required: [true, 'Campo modelo necessário']
    },
    license_plate: {
        type: String,
        required: [true, 'Campo placa necessário'],
        unique: true
    }
});

CarSchema.pre('save', function(next) {
    this.id = this.get('_id');
    next();
});

module.exports = mongoose.model('Cars', CarSchema);