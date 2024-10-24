//Tipado: boolean, number, string, array
//Inferencia de tipo
//Deteccion de errores en IDE

let miVariable : string = "Hola Caracola";
let miNumero: number = 33.0;

let a = 33;



const list: number[] = [1,2,3,4,5];
const list2: Array<number> = [];

enum Size {Small = 3, Medium = 5, Big = 13, ExtraLarge = 23};
let s: Size = Size.ExtraLarge

list2.push(13.0);



function sumar(pNumeroA: number, pNumeroB: number): number {
    let resultado: number = pNumeroA + pNumeroB;
    return resultado;
}
   
function sumar2(pNumeroA: number, pNumeroB: number): void {
    let resultado: number = pNumeroA + pNumeroB;
    console.log(resultado);
}

const saludar =(texto:string): string => {
    

    return "Hola "+ texto;

}

let saludo = saludar("caracola");
saludo.length;

const pp: IPersona = {
    nombre: "Pepe",
    dni: "4324325T",
    edad: 33
}

let personas : Array<IPersona> = [];
personas.push(pp);