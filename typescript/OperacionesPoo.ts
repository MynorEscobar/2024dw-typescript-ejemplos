class OperacionesPoo{
    //atributos (caracteristicas =variables)
    private numero1 : number = 0;
    private numero2 : number = 0;
    private resultado: number = 0;
    //métodos (funciones)
    
    //método que permite asignar valor al atributo numero1
    public asignarNumero1(valor: number){
        this.numero1 = valor;
    }
    public asignarNumero2(valor: number){
        this.numero2 = valor;
    }
    public sumar(): string{
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado;
    }
    public restar(): string{
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado;
    }
} //finaliza la clase

//crear un objeto de tipo OperacionesPoo = instanciar la clase OperacionesPoo
const operacionesPoo = new OperacionesPoo();
let divDatos = document.getElementById('datos');

function obtenerDatos(){
    //asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(
        parseFloat((document.getElementById("txtNumero1") as HTMLInputElement).value)
    );
    operacionesPoo.asignarNumero2(
        parseFloat((document.getElementById("txtNumero2") as HTMLInputElement).value)
    );
}
function sumar(){
    obtenerDatos();
    divDatos.textContent = operacionesPoo.sumar();
}
function restar(){
    obtenerDatos();
    divDatos.textContent = operacionesPoo.restar();
}









