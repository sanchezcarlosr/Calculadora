
//Esto agregar a la pantalla el valor a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').innerHTML += valor;
}

function borrar() {
    document.getElementById('pantalla').innerHTML = "";
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').textContent;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').innerHTML = resultado;
}

function borrarDAI() {
    const valorPantalla = document.getElementById('pantalla').innerHTML;
    document.getElementById('pantalla').innerHTML = valorPantalla.slice(0, valorPantalla.length - 1);
}

