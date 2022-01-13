const fs = require("fs");

module.exports = funcionesListas = {
    leerJSON: function() {
        return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
    },
    escribirJSON: function(info) {
        let nuevoJSON = JSON.stringify(info); 
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8"); 
    },
    guardarTarea: function(titulo, estado) {
        let tareasAnteriores = funcionesListas.leerJSON(); 
        
        let nuevaTarea = {
            titulo: titulo, 
            estado: estado 
        }
        
        tareasAnteriores.push(nuevaTarea); 
        
        funcionesListas.escribirJSON(tareasAnteriores); 
    },
    filtrarPorEstado: function(estado) {
        let tareas = funcionesListas.leerJSON(); 
        
        let tareasFiltradas = []; 
        
        for (let i = 0; i < tareas.length; i++) { 
            if(tareas[i].estado == estado) { 
                tareasFiltradas.push(tareas[i]) 
            }
        }
        
        return tareasFiltradas; 
    }
}

//module.exports = funcionesListas; // esta es otra forma de exportar un modulo, de utilizarla recuerden declarar un tipo de variable a asignar en la linea 3




