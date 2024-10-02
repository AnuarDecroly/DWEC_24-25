import Persona from "./Persona.js"

export default class Cliente extends Persona{

    constructor(name, dni, codigo){
        super(name, dni);
        this.codigo = codigo;
    }
}
