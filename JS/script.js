function agregarTarea() {

    //obtener el valor del campo
    let nuevaTareaTexto = document.getElementById("nueva tarea").value;

    //validar el valor no vacio
    if(nuevaTareaTexto === "") {
        alert("Por favor, Ingrese una tarea")
    return;
    }

    //crear elemmento en lista
    let nuevatarea = document.createElement("li");
    nuevatarea.textContent = nuevaTareaTexto + " ";

    //boton eliminar
    let botoneliminar = document.createElement("button");
    botoneliminar.textContent = "eliminar";
    botoneliminar.onclick = function() {nuevatarea.remove();}

    //agregar boon eliminar a la lista
    nuevatarea.appendChild(botoneliminar);

    //agregar la tarea a la lista
    document.getElementById("lista de tareas").appendChild(nuevatarea);

    //limpiar el texto 
    document.getElementById("nueva tarea").value = "";


}