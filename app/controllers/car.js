'use strict';

var mongoose = require('mongoose'),
    Car = mongoose.model('Cars');

exports.get = function(req, res) {
    Car.find({}, function(err, Car) {
        if (err)
            res.send("Erro ao encontrar as viaturas!");
        res.json(Car);
    });
};

exports.add = function(req, res) {
    var new_car = new Car(req.body);
    new_car.save(function(err, Car) {
        if (err)
            res.send("Erro na criação da viatura! Deve ser um VELOSTER!");
        res.json(Car);
    });
};

exports.getById = function(req, res) {
    Car.findById(req.params.id, function(err, Car) {
        if (err)
            res.send("Viatura não encontrada!");
        res.json(Car);
    });
};

exports.update = function(req, res) {
    Car.findById(req.params.id, function(err, Car) {
        if (err)
            res.send("Viatura não encontrada!");
        res.json(Car);
    });
    Car.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, Car) {
        if (err)
            res.send("Erro ao editar a viatura!");

    });
};

exports.delete = function(req, res) {
    Car.remove({
        _id: req.params.id
    }, function(err, Car) {
        if (err)
            res.send("Erro ao deletar viatur!a");
        res.json({
            message: 'Viatura deletado com sucesso!'
        });
    });
};