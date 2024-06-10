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
operacionesPoo.asignarNumero1(10);
operacionesPoo.asignarNumero2(20);
console.log(operacionesPoo.sumar());
console.log(operacionesPoo.restar());
var ope2 = new OperacionesPoo();
ope2.asignarNumero1(750);
ope2.asignarNumero2(854);
console.log(ope2.sumar());