var listaTareas = new Array();

/* listaTareas = [
    {
        'idTarea': 1,
        'titulo': 'Estudiar Javascript',
        'prioridad': 'urgente'
    }

]; */


var id = 2;


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
    pintarArt(guardado);

    id++;

}



function pintarArt(pGuardado) {
    /* console.log(pGuardado.prioridad); */
    var contador = 1;

    var article = document.createElement('article');
    var h2 = document.createElement('h2');
    var div = document.createElement('div');
    var a = document.createElement('a');

    article.className = 'urgente row';
    article.id = contador;

    if (pGuardado.prioridad == 'diaria') {
        h2.className = 'col-xl-11 col-md-9 col-7 naranja';

        div.className = 'col-xl-1 col-md-3 col-5 azul';


    }




    a.className = 'fas fa-trash-alt';

    var titulo = document.createTextNode(pGuardado.titulo);
    h2.appendChild(titulo);

    article.appendChild(h2);
    article.appendChild(div);
    div.appendChild(a);

    var seccion = document.getElementById('tareas');

    seccion.appendChild(article);
    contador++;
}

//1 una función que recoja los datos dados por formulario