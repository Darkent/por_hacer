const fs = require('fs');


let porHacer = [];

const guardar = () => {

    let data = JSON.stringify(porHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (!err) console.log('Se guardó con exito.');
    })
}

cargarDB = () => {
    try {
        porHacer = require('../db/data.json');
    } catch (error) {
        porHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let tmp = {
        descripcion,
        completado: false
    }

    porHacer.push(tmp);
    guardar();
    return tmp;
}

const getListado = () => {
    cargarDB();
    return porHacer;
}


const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = porHacer.findIndex(idx => idx.descripcion === descripcion);

    if (index >= 0) {

        porHacer[index].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = porHacer.findIndex(idx => idx.descripcion === descripcion);
    let eliminado = porHacer.splice(index, 1);
    if (eliminado) {
        guardar();
        console.log('Elemento eliminado');
    }
    else { console.log('No se pudo eliminar'); }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}