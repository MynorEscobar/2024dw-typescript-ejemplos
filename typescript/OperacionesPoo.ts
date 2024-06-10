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
operacionesPoo.asignarNumero1(10);
operacionesPoo.asignarNumero2(20);
console.log(operacionesPoo.sumar());
console.log(operacionesPoo.restar());

const ope2 = new OperacionesPoo();
ope2.asignarNumero1(750);
ope2.asignarNumero2(854);
console.log(ope2.sumar());
 