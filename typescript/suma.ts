function sumar(): void{
    const numero1: number = parseFloat(
        (document.getElementById('txtNumero1') as HTMLInputElement).value);
    const numero2 = 
    document.getElementById("txtNumero2") as HTMLInputElement;
    
    const n2: number = parseFloat(numero2.value);  
    const suma: number = numero1 + n2;
    const suma2: number = numero1 + parseFloat(numero2.value);
    const otra: String = "hola";

    document.getElementById('resultado').innerHTML =
     "La suma es : " + suma; 
}