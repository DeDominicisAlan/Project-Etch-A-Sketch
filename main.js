//Definición de objetos

const borrar = document.querySelector('#botonBorrar');
const limpiar = document.querySelector('#botonLimpiar');
const p = document.querySelector('#tamaño');
const grid = document.querySelector('.contenedor-grid');
const barra = document.querySelector('#barra')
const colorPicker = document.querySelector('#botonColor');
const rainbow = document.querySelector('#botonRainbow');

var rainbowActive = false;

var vectorColores = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var lastSize = 8;

var color = 'black';

//Comportamientos
//Iniciar la pagina con 8x8 divs

ajustarTamaño(lastSize);

colorPicker.addEventListener('input', e => {
    color = e.target.value;
})

barra.onchange = (e) => ajustarTamaño(e);

limpiar.onclick = () => {
    ajustarTamaño(lastSize);
};

borrar.addEventListener('click', ()  => {color = 'white'});

rainbow.addEventListener('click', () => {
    rainbowActive = !rainbowActive;
    if(rainbowActive){
        rainbow.style.backgroundColor = '#00C3D1';

    }else{
        rainbow.style.backgroundColor = 'white';

    }
});

function colorRandom(){
    let element = '#';
    for (let i = 0; i < 6; i++) {
         element += obtenerRandom();
    }
    color = element;
}

function obtenerRandom(){
    return vectorColores[Math.floor(Math.random() * vectorColores.length)];
};

//Ajuste de Tamaño

function ajustarTamaño(e){
    if(isNaN(e))
        e = e.target.value;
        lastSize = e;
    p.innerText = `${e}x${e}`;
    cleanGrid();
    tamañoNuevo(e);
}

function tamañoNuevo(n){
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    for(let i=0; i<(n*n); i++){
        const div = document.createElement('div');
        div.classList.add('grid-element');
        grid.appendChild(div);
        div.onclick = () => {
            if(rainbowActive){
                colorRandom();
            }
            div.style.backgroundColor = color;
        }
    }
};

//Vaciar grid (sacar todos los divs)

function cleanGrid(){
    grid.innerHTML = '';
}

//Boton de borrar

