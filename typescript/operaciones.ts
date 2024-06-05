//Enlazar elementos(controles) de html con typescript
const inputNumero1 = document.getElementById('txtNumero1') as HTMLInputElement;
const inputNumero2 = document.getElementById('txtNumero2') as HTMLInputElement;
const btnResta = document.getElementById('btnResta') as HTMLButtonElement;
const btnMulti = document.getElementById('btnMulti') as HTMLButtonElement;
const btnDivi = document.getElementById('btnDivi') as HTMLButtonElement;

//añadir eventos a los botones (evento, función)
btnResta.addEventListener('click', restar);
btnMulti.addEventListener('click',multiplicar);
btnDivi.addEventListener('click', dividir);

//Enlazar etiqueta (div) donde se mostrará el resultado
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

let numero1: number = 0;
let numero2: number = 0;

//crear métodos para las diversas operaciones
function recibirValores():number{
    let respuesta: number = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if(isNaN(numero1)||isNaN(numero2)){
        respuesta = 100;       
    }
    return respuesta;
}
function sumar(){
    if (recibirValores()==100){
        divResultado.textContent = "Los valores son incorrectos, verifique que sean números";
    }else{
        const suma = numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }  
}
function restar(){
    if(recibirValores()==0){
        const resta = numero1 - numero2;
        divResultado.textContent = "La resta es: " + resta;
    }else{
        divResultado.textContent = "Los valores son incorrectos, verifique que sean números";        
    }
    
}
function multiplicar(){

}
function dividir(){

}

