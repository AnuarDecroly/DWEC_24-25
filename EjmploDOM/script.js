import Persona from "./Persona.js"; // Ruta correcta al archivo Js
import Cliente from "./Cliente.js";

const pp = new Persona("Pepe Perez","12345678X");
const cliente = new Cliente("Pago Grande","12345678X", "cl_001");

console.log(pp.name);

var n = 1;

document.addEventListener('DOMContentLoaded', function(event)
{
    const sectionPrincipal = document.getElementById('principal');

    const divP = document.createElement('div');
    divP.classList.add('contenedor');

    const btn_1 = document.createElement('button');
    const btn_2 = document.createElement('button');
    const btn_3 = document.createElement('button');

    btn_1.innerText = "Click me";
    btn_2.innerText = "Click me";
    btn_3.innerText = "Click me";

    btn_1.classList.add('btn');
    btn_2.classList.add('btn');
    btn_3.classList.add('btn');

    btn_1.addEventListener('click', function(event){
        //Implementar lo q querais
        clickBtn();
    });

    btn_2.addEventListener('click', function(event){
        //Implementar lo q querais
        clickBtn();
    });

    btn_3.addEventListener('click', function(event){
        //Implementar lo q querais
        clickBtn();
    });

    divP.append(btn_1, btn_2, btn_3);

    const parr1 = document.createElement('p');
    parr1.innerText = cliente.name;

    parr1.classList.add('parrafo');

    sectionPrincipal.append(parr1);
    sectionPrincipal.append(divP);

});


function clickBtn()
{
    alert("Esto es un boton y lo he pulsado " +n);
    console.log(`Prueba interpolacion, he pulsado ${n}`);
    n++;
}