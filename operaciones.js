
const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const fs = require('fs')
    const contenido = `Nombre: ${nombre}, Edad: ${edad}, Tipo: ${tipo}, Color: ${color}, Enfermedad: ${enfermedad}`
    fs.writeFileSync('citas.json', JSON.stringify (contenido), (error) => {
        if (error) {
            console.log('Error al guardar el registro')
        } else {
            console.log('Registro guardado con éxito')
        }
    })
}

const leer = () => {
    const fs = require('fs')
    fs.readFile('citas.json', 'utf-8', (error, contenido) => {
        if (error) {
            console.log('Error al leer el registro')
        } else {
            console.log(JSON.parse(contenido)
            )
        }
    })
}

module.exports = {
    registrar,
    leer
}






