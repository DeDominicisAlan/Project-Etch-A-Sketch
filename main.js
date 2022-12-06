//Definición de objetos

const limpiar = document.querySelector('#botonLimpiar');
const p = document.querySelector('#tamaño');
const grid = document.querySelector('.contenedor-grid');
const barra = document.querySelector('#barra')
const color = document.querySelector('#botonColor');
var lastSize = 8;

//Comportamientos
//Iniciar la pagina con 8x8 divs
ajustarTamaño(lastSize);

barra.onchange = (e) => ajustarTamaño(e);
limpiar.onclick = () => {
    ajustarTamaño(lastSize);
};

document.querySelector('grid-element').onclick = () => {
    div.backgroundColor = 'red';
    console.log('rojo');
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
            div.style.backgroundColor = 'red';
        }
    }
};

//Vaciar grid (sacar todos los divs)

function cleanGrid(){
    grid.innerHTML = '';
}
