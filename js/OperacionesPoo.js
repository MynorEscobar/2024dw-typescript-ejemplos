var OperacionesPoo = /** @class */ (function () {
    function OperacionesPoo() {
        //atributos (caracteristicas =variables)
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
    }
    //métodos (funciones)
    //método que permite asignar valor al atributo numero1
    OperacionesPoo.prototype.asignarNumero1 = function (valor) {
        this.numero1 = valor;
    };
    OperacionesPoo.prototype.asignarNumero2 = function (valor) {
        this.numero2 = valor;
    };
    OperacionesPoo.prototype.sumar = function () {
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado;
    };
    OperacionesPoo.prototype.restar = function () {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado;
    };
    return OperacionesPoo;
}()); //finaliza la clase
//crear un objeto de tipo OperacionesPoo = instanciar la clase OperacionesPoo
var operacionesPoo = new OperacionesPoo();
var divDatos = document.getElementById('datos');
function obtenerDatos() {
    //asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(parseFloat(document.getElementById("txtNumero1").value));
    operacionesPoo.asignarNumero2(parseFloat(document.getElementById("txtNumero2").value));
}
function sumar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.sumar();
}
function restar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.restar();
}
