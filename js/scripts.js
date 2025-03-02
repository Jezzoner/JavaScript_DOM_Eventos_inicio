// QuerySelector

const heading = document.querySelector('.header__texto h2') // 0 o 1 elementos
heading.textContent = 'Nuevo Heading'
console.log(heading)



// QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para enlace';
enlaces[0].classList.add('nueva-clase');

// enlaces[0].classList.remove('navegacion__enlace');
//enlaces[0].href = 'https>//google.com';

// getElementVyId

// const heading2 = document.getElementById('heading')
// console.log(heading2)

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos en JavaScript...

// Hay muchos eventos ocurriendo en tus sitios y aplicaciones web, cuando un usuario da click, cuando dan scroll, al presionar en un botón, enviar un formulario, pero uno de los más comunes es esperar a que el documento este listo...



// console.log('1');
// window.addEventListener('load', function() { // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
//     console.log('2');
// });

// window.onload = function() {
//     console.log('3')
// };

// document.addEventListener('DOMContentLoaded', function() { // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...
//     console.log('4');
// });

//console.log('5');

// Estos closures también pueden ser con una función aparte...



// // Eventos Scroll...
// window.onscroll = function(e) {
//      console.log('scrolling...');

//     console.log(this.scrollY);
// }



// Eventos con Click y submit...

//  const btnEnviar = document.querySelector('.boton--primario');
//  //console.log(btnEnviar);
// btnEnviar.addEventListener('click', function(evento) { // callback o closure 
//     console.log('evento');
//     evento.preventDefault();

//     //Validad formulario

//     console.log('enviando formulario')

// });

// Evento de submit

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario

    const { nombre, email, mensaje } = datos;



    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // corta la ejecucion del codigo
    }

    //Crear la alerta de enviar correctamente
    mostrarAlerta('Enviado satisfactoriamente')

});


// Evento de los input y textarea

 const datos = {
     nombre: '',
     email: '',
     mensaje: ''
 }

// submit
// const formulario = document.querySelector('.formulario');

// formulario.addEventListener('submit', function(e) {
//     e.preventDefault();

//     console.log(e);

//     console.log('Di click y la página ya no recarga');

//     console.log(datos);

    // Validar el Formulario...

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );

//     //desaparezca despues de 5 segundos

//     setTimeout(() => {
//        error.remove(); 
//     }, 5000);
// }
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild( alerta );

    //desaparezca despues de 5 segundos

    setTimeout(() => {
       alerta.remove(); 
    }, 5000);
}