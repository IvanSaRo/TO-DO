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

        }

    }

}



////// FILTRADO ///////



var prioridad = document.getElementById('prioridadSelect');
prioridad.addEventListener('click', filtrarPrioridad);

var btnBuscar = document.getElementById('search');
var campo = btnBuscar.innerText;

var listaDiaria = new Array();
var listaMensual = new Array();
var listaUrgente = new Array();


function filtrarPrioridad(ultimo) {

    //filtrar el array e imprimir los que necesite, nada de crear otro array

}




