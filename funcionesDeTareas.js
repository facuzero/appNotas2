const fs = require("fs"); // requerimos modulo nativo fs

function leerJSON() { // definimos funcion
    return JSON.parse(fs.readFileSync("./tareas.json", "utf-8")); // nos retorna la lectura del archivo json lo parsea para que podamos manipularlo con javascript
}

function escribirJSON(info) { // definimos la funcion que recibe un parametro
    fs.writeFileSync("./tareas.json", JSON.stringify(info), "utf-8"); // primer parametro archivo que vamos a reescribir, segundo parametro lo que vamos a insertar en el json, tercer parametro la codificación
}

function guardarTarea(titulo, estado) {
    let tareasAnteriores = leerJSON(); // listado de tareas

    let nuevaTarea = { 
        titulo: titulo,
        estado: estado
    }

    tareasAnteriores.push(nuevaTarea);// con el metodo push insertamos en la variable tareasAnteriores la nueva la nueva tarea creada

    escribirJSON(tareasAnteriores); // mediante el metodo escribirJSON reescribimos el archivo tareas.json
}

function filtrarPorEstado(estado) {
    let tareas = leerJSON(); // lista de tareas

    return tareas.filter(tarea => tarea.estado == estado); // aplicamos el metodo filter al array de tareas y declaramos la condicion, tarea.estado es igual al estado que pase por parametro me devuelva esa tarea
}


module.exports = { leerJSON, escribirJSON, guardarTarea, filtrarPorEstado };

