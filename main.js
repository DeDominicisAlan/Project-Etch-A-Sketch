//Definición de objetos

const grid = document.querySelector('.contenedor-grid');
const b5 = document.querySelector('#boton1');
const b10 = document.querySelector('#boton2');
const b30 = document.querySelector('#boton3');
const barra = document.querySelector('#barra')

//Comportamientos

barra.onchange = (e) => ajustarTamaño(e);

document.querySelector('grid-element').onclick = () => {
    div.backgroundColor = 'red';
    console.log('rojo');
};

//Ajuste de Tamaño

function ajustarTamaño(e){
    e = e.target.value;
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
    }
};

function cleanGrid(){
    grid.innerHTML = '';
}


