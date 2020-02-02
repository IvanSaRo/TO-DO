var listaTareas = new Array();
id = 0;
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






var btnGuardar = document.getElementById('guardar');


btnGuardar.addEventListener('click', e => {

    var prioridad = document.getElementById('prioridad').value;

    var texto = document.getElementById('tituloTarea').value;



    cargarDatos(texto, prioridad);






});




function cargarDatos(pTexto, pPrioridad) {

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
    let idAjustada = id;
    article.dataset.id = idAjustada;


    if (pGuardado.prioridad == 'diaria') {
        var color1 = `naranja`;
        var color2 = `azul`;
    } else if (pGuardado.prioridad == 'mensual') {
        var color1 = `verde`;
        var color2 = `amarillo`;
    } else if (pGuardado.prioridad == 'urgente') {
        var color1 = `rojo`;
        var color2 = `negro`;
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
    //console.log(article);
    papelera.addEventListener('click', borrarArt);


    pintarArt(article);
    console.log(article.id);
    console.log(pGuardado.idTarea);
}

var seccion = document.getElementById('tareas');


function pintarArt(pArticle) {

    //pArticle.innerHTML += "onclick='borrarArt(this)'"

    // console.log(pArticle.innerHTML);





    seccion.appendChild(pArticle);

    /* subirId(); */



}

/* function subirId() {
    return id += 1;
} */


function borrarArt(e) {



    let numerito = e.target.parentElement.parentElement.id;
    console.log(numerito);
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].idTarea == numerito) {
            let divBorrar = document.getElementById(numerito)
            divBorrar.parentNode.removeChild(divBorrar);
        }

    }



}


/* let child = document.getElementById(pId);
tareas.removeChild(child); */

