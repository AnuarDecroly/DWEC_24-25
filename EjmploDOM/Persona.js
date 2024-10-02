export default class Persona {
    #dni;
    
    constructor(name, dni){
        this.#dni = dni;
        this.name = name;
    }

    getDni(){
        return this.#dni;
    }
}