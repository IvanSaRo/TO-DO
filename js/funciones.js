var listaTareas = new Array();

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
    let id = 2;
    let guardado = {
        'idTarea': id,
        'titulo': pTexto,
        'prioridad': pPrioridad
    }
    listaTareas.push(guardado);
    crearArt(guardado);

    id++;

}



function crearArt(pGuardado) {
    /* console.log(pGuardado.prioridad); */
    var contador = 1;
    console.log(pGuardado);
    var article = document.createElement('article');
    var h2 = document.createElement('h2');

    var i = document.createElement('i');

    article.className = 'urgente row';
    article.id = contador;
    console.log(pGuardado.prioridad);
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

    i.className = `col-xl-1 col-md-3 col-5 ${color2} fas fa-trash-alt`;





    var titulo = document.createTextNode(pGuardado.titulo);
    h2.appendChild(titulo);

    article.appendChild(h2);
    article.appendChild(i);




    contador++;
    pintarArt(article);
}


function pintarArt(pArticle) {
    var seccion = document.getElementById('tareas');
    seccion.appendChild(pArticle);
}


var papelera = document.querySelectorAll('.fas');

papelera.addEventListener('click', borrarArt());





function borrarArt(e) {
    console.log(e);
}