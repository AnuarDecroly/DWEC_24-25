let a = 3;
let s = "3";

const miArray = [];

miArray.push("Hola");
console.log(miArray)

const printLn = (x) => console.log(x)

printLn("caSA")


const numeros = [33, 45, 1, 100, 2, 4];

const suma = numeros.reduce(function(acumulador, numero) {
 return acumulador + numero;
});

console.log(suma); // 185
let inicial = 0
const sumaAr = numeros.reduce((acumulador, numero) => 
    acumulador + numero);

console.log(sumaAr); // 185


const listadoUsuarios = [
    {
        nombre: "Gabriel Pacheco",
        edad: 34,
        signoZodiaco: "Virgo"
    },
    {
        nombre: "Lola Rocha Tercero",
        edad: 30,
        signoZodiaco: "Capricornio"
    },
    {
        nombre: "Anuar Khan",
        edad: 41,
        signoZodiaco: "Tauro"
    },
    {
        nombre: "Farah Khan",
        edad: 3,
        signoZodiaco: "Acuario"
    },
    ];

    let acumulador = 0
    const familia = listadoUsuarios.filter((user) => user.nombre.includes("Khan"))
    const antiguedad = listadoUsuarios.reduce((acumulador, user,) => acumulador + user.edad)

    console.log(familia)
    console.log(antiguedad)
   