
const operaciones = require('./operaciones.js')

const nombre = process.argv.slice(2)[1]
const edad = process.argv.slice(2)[2]
const tipo = process.argv.slice(2)[3]
const color = process.argv.slice(2)[4]
const enfermedad = process.argv.slice(2)[5]


if (process.argv.slice(2)[0] === 'registrar') {
    operaciones.registrar(nombre, edad, tipo, color, enfermedad)
} else if (process.argv.slice(2)[0] === 'leer') {
    operaciones.leer()
} else {
    console.log('No ingresaste un comando válido')
}


    



