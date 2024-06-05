//Enlazar elementos(controles) de html con typescript
var inputNumero1 = document.getElementById('txtNumero1');
var inputNumero2 = document.getElementById('txtNumero2');
var btnResta = document.getElementById('btnResta');
var btnMulti = document.getElementById('btnMulti');
var btnDivi = document.getElementById('btnDivi');
//añadir eventos a los botones (evento, función)
btnResta.addEventListener('click', restar);
btnMulti.addEventListener('click', multiplicar);
btnDivi.addEventListener('click', dividir);
//Enlazar etiqueta (div) donde se mostrará el resultado
var divResultado = document.getElementById('resultado');
var numero1 = 0;
var numero2 = 0;
//crear métodos para las diversas operaciones
function recibirValores() {
    var respuesta = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}
function sumar() {
    if (recibirValores() == 100) {
        divResultado.textContent = "Los valores son incorrectos, verifique que sean números";
    }
    else {
        var suma = numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }
}
function restar() {
    if (recibirValores() == 0) {
        var resta = numero1 - numero2;
        divResultado.textContent = "La resta es: " + resta;
    }
    else {
        divResultado.textContent = "Los valores son incorrectos, verifique que sean números";
    }
}
function multiplicar() {
}
function dividir() {
}
