var listaTareas = new Array();
var id = 0;
var btnGuardar = document.getElementById('guardar');
var seccion = document.getElementById('tareas');
/* listaTareas = [
    {
        'idTarea': 1,
        'titulo': 'Estudiar Javascript',
        'prioridad': 'urgente'
    }

]; */





/* <article id="1" class="urgente row">
<h2 class="col-xl-11 col-md-9 col-7 naranja">Salir a comer</h2>
<div class="col-xl-1 col-md-3 col-5 azul"> <a class="fas fa-trash-alt"></a></div>
</article> */



/////// EVENTOS /////////





btnGuardar.addEventListener('click', e => {

    var prioridad = document.getElementById('prioridad').value;

    var texto = document.getElementById('tituloTarea').value;



    cargarDatos(texto, prioridad);

    prioridad.value = "Selecciona";
    texto.value = "";
});


/////// CREACIÓN Y CARGA /////////

function cargarDatos(pTexto, pPrioridad = 'diaria') {

    let guardado = {
        'idTarea': id,
        'titulo': pTexto,
        'prioridad': pPrioridad
    }
    listaTareas.push(guardado);

    crearArt(guardado);

    return id++;

}



function crearArt(pGuardado) {

    var article = document.createElement('article');
    var h2 = document.createElement('h2');
    var caja = document.createElement('div');
    var papelera = document.createElement('a');

    article.className = 'row';
    article.dataset.id = id

    if (pGuardado.prioridad == 'diaria') {
        var color1 = `naranja`;
        var color2 = `azul`;
    } else if (pGuardado.prioridad == 'mensual') {
        var color1 = `verde`;
        var color2 = `amarillo`;
    } else if (pGuardado.prioridad == 'urgente') {
        var color1 = `rojo`;
        var color2 = `negro`;
    } else if (pGuardado.prioridad == 'Selecciona') {
        var color1 = `naranja`;
        var color2 = `azul`;
    }
    h2.className = `col-xl-11 col-md-9 col-7 ${color1}`;

    caja.className = `col-xl-1 col-md-3 col-5 ${color2}`;

    papelera.className = `fas fa-trash-alt`;

    var titulo = document.createTextNode(pGuardado.titulo);
    h2.appendChild(titulo);

    article.appendChild(h2);
    article.appendChild(caja);
    article.id = id;

    caja.appendChild(papelera);

    papelera.addEventListener('click', borrarArt);


    pintarArt(article);

}




///////// PINTADO /////////




function pintarArt(pArticle) {

    var ultimo = listaTareas[listaTareas.length - 1];

    //filtrarPrioridad(ultimo);
    seccion.appendChild(pArticle);
}

function pintarLista(pLista) {
    seccion.innerHTML('');
    for (let i = 0; i < pLista.length; i++) {
        crearArt(pLista);

    }
}




/////// BORRADO /////////



function borrarArt(e) {



    let numerito = e.target.parentElement.parentElement.id;
    console.log(numerito);
    let divBorrar = document.getElementById(numerito)
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].idTarea == divBorrar.id) {

            divBorrar.parentNode.removeChild(divBorrar);

            var listaBorrada = new Array();
            listaBorrada = listaTareas.splice(numerito, 1);
            listaFiltrada = listaTareas.splice(numerito, 1);

        }

    }

}

btnBorr = document.getElementById('borrartodo');
btnBorr.addEventListener('click', borrarTodo);

function borrarTodo(e) {
    seccion.innerHTML = "";
}


////// FILTRADO ///////



// La lista filtrada es igual a la lista de tareas original
let listaFiltrada = [...listaTareas];
var select = document.getElementById('prioridadSelect');
var inputTitle = document.getElementById('search');

select.addEventListener('change', (e) => {
    listaFiltrada = filtrarPorPrioridad(e.target.value);
    if (e.target.value == "Todas") {
        pintarTareasFilt(listaTareas)
    } else {
        pintarTareasFilt(listaFiltrada);
    }

});
inputTitle.addEventListener('input', (e) => {
    listaFiltrada = filtrarPorTitulo(inputTitle.value);
    console.log(inputTitle.value)
    if (inputTitle == "") {
        pintarTareasFilt(listaTareas);
    } else {
        pintarTareasFilt(listaFiltrada);
    }
});
function pintarTareasFilt(pLista) {
    seccion.innerHTML = "";
    for (let i = 0; i < pLista.length; i++) {
        crearArt(pLista[i]);

    }
}
function filtrarPorPrioridad(priority) {
    let arr = listaTareas.filter((tarea) => {
        return tarea.prioridad === priority;

    });

    return arr;
}
function filtrarPorTitulo(pTitulo) {
    let arr = listaTareas.filter((tarea) => {
        return tarea.titulo.includes(pTitulo);
    })
    return arr;
}


function filtrarBusqueda(pListaPacientes, pPalabraBuscar) {

    var listaFiltrada = new Array();

    listaFiltrada = pListaPacientes.filter(paciente => {
        var nombrePaciente = paciente.nombre.toLowerCase();
        var apellidoPaciente = paciente.apellido.toLowerCase();

        return nombrePaciente.includes(pPalabraBuscar) || apellidoPaciente.includes(pPalabraBuscar);
    })


    return listaFiltrada;

}





