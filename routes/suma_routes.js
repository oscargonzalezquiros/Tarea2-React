var miRouter = require('express').Router()
var suma_service = require('../services/suma_service');

miRouter.get('/', (req, res) => {
    res.send('Valor incaorrecto')
});

miRouter.get('/:valor1/:valor2', (req, res) => {
    var valor1 = req.params.valor1;
    var valor2 = req.params.valor2;
    var resultado = suma_service.obtenerSuma(valor1, valor2);
   res.send(JSON.stringify(resultado.toString()));
});


module.exports = miRouter
