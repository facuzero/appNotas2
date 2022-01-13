const funciones = require("./exportar_metodos"); // importo el archivo funcionesDeTareas que contiene las funciones que exporte

const process = require("process"); // requerimos el modulo nativo process que nos permite interactuar con la consola

const accion = process.argv[2]; // en el indice dos de process voy a indicar la accion que quiero realizar

switch (accion) {
    case "listar":
    let tareas = funciones.leerJSON(); // lista de tareas
    
    if (tareas.length == 0) { // si la lista de tareas esta vacia
        console.log("La lista de tareas esta vacía");
    } else {
        console.log("--------------------------");
        console.log("LISTA DE TAREAS");
        console.log("--------------------------");
        
        tareas.forEach(tarea => { // mediante el metodo forEach recorremos el array de tareas
            console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`); // imprimimos por consola cada tarea con su titulo y estado
        })
    }
    break;
    case "crear":
    let titulo = process.argv[3];
    let estado = process.argv[4];
    
    if (titulo && estado) { // si titulo y estado existen
        funciones.guardarTarea(titulo, estado); // ejecutamos la funcion guardarTarea
        
        console.log("Una nueva tarea ha sido agregada");
    } else {
        console.log("Es necesario que pases un titulo y un estado para crear una nueva tarea");
    }
    break;
    case "filtrar":
    let filtro = process.argv[3];
    
    let tareasFiltradas = funciones.filtrarPorEstado(filtro); // las tareas que filtramos
    
    if (filtro && tareasFiltradas.length != 0) { // si ingresamos un estado a filtrar y la lista de tareas no esta vacia, que me muestre la lista filtrada
        console.log("--------------------------");
        console.log(`LISTA DE TAREAS FILTRADAS POR: ${filtro}`);
        console.log("--------------------------");

        tareasFiltradas.forEach(tarea => {
            console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`);
        })
    } else if (filtro && tareasFiltradas.length == 0) { // si ingresamos un estado para filtrar y la lista de tareas esta vacia
        console.log("No existen tareas con ese estado");
    } else {
        console.log("Debes ingresar un estado para filtrar");
    }
    
    break;
    
    default:
    break;
}