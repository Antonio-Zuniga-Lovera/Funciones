const subContainer2 = document.querySelector('#Sub-container-2');
const contenedor1 = document.querySelector('#Contenedor-1');
const contenedor2 = document.querySelector('#Contenedor-2');
const contenedor3 = document.querySelector('#Contenedor-3');
const contenedor4 = document.querySelector('#Contenedor-4');
const contenedorKey = document.querySelector('#Key');
const span = document.querySelector('#Span-contador');

var a = 'pink';
var s = 'orange';
var d = 'aqua';
var q = 'purple';
var w = 'gray';
var e = 'brown';
let isActive = true;
let divCreado = 0;

contenedor1.addEventListener('click', () => {
    changeColorStatic(contenedor1, 'blue', 'black');
});

contenedor2.addEventListener('click', () => {
    changeColorStatic(contenedor2, 'red', 'black');
});

contenedor3.addEventListener('click', () => {
    changeColorStatic(contenedor3, 'green', 'black');    
});

contenedor4.addEventListener('click', () => {
    changeColorStatic(contenedor4, 'yellow', 'black');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        contenedorKey.style.backgroundColor = a;
    } else if (event.key === 's') {
        contenedorKey.style.backgroundColor = s;
    } else if (event.key === 'd') {
        contenedorKey.style.backgroundColor = d;
    } else if (event.key === 'q') {
        createDiv(q)
    } else if (event.key === 'w') {
        createDiv(w)
    } else if (event.key === 'e') {
        createDiv(e)
    }
    console.log(event.key);
});

function changeColorStatic(element, color1, color2) {
    if (isActive) {
        element.style.backgroundColor = color1;
        isActive = false;
    } else {
        element.style.backgroundColor = color2;
        isActive = true;
    }
    console.log(isActive);
}

function createDiv(color) {
    if (divCreado <  5) {
        divCreado++;
        span.innerHTML = `${divCreado}`;
        subContainer2.innerHTML += `
            <div class="contenedores contenedores-creados" style="background-color: ${color};"></div>
        `;
    }
    console.log(divCreado);
}