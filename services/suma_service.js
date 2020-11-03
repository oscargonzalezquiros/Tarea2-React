const suma_infrastructure = require('../infrastructure/suma_infrastructure');

function obtenerSuma(valor1, valor2) {
    if (valor1 !== null && valor2 !== null) {
        return suma_infrastructure.obtenerSuma(valor1, valor2);
    } else {
        return { error: 'No hay valores para calcular' }
    }
}

module.exports = {
    obtenerSuma
}