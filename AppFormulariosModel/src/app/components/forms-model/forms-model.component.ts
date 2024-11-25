import { Component } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms-model',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './forms-model.component.html',
    styleUrl: './forms-model.component.css'
})

export class FormsModelComponent {

    modelForm: FormGroup;

    constructor() {
        this.modelForm = new FormGroup({
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]), 
            email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]), 
            edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)] ),
            dni: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]), 
            password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            repitePassword: new FormControl(null, [Validators.required, Validators.minLength(5)])
        }, [this.passValidator]);
    }


    ngOnInit(): void{
        let obj = {
            name: 'Anuar',
            email: 'pp@gmail.com',
            edad: 41,
            dni: '72358245T',
            password: '123456',
            repitePassword: '123456'
        }

        //Opcion 1
        //this.modelForm.setValue(obj);

        //Opcion 2: Puedo meter mis propios validadores al cargar, modificar los que tenia, o no cargar controles.
        this.modelForm = new FormGroup({
            name: new FormControl(obj.name, [Validators.required, Validators.minLength(3)]), 
            email: new FormControl(obj.email, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]), 
            edad: new FormControl(obj.edad, [Validators.required, Validators.min(0), Validators.max(120)] ),
            dni: new FormControl(obj.dni, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]), 
            password: new FormControl(obj.password, [Validators.required, Validators.minLength(5)]),
            repitePassword: new FormControl(obj.repitePassword, [Validators.required, Validators.minLength(5)])
        }, [this.passValidator]);
    }


    getDataForm() {
        console.log(this.modelForm.value);
        this.modelForm.reset();
    }


    checkControl(formControlName: string, validador: string): boolean | undefined{
        return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
    }


    passValidator(formValue: AbstractControl): any {
        const pass1 = formValue.get('password')?.value;
        const pass2 = formValue.get('repitePassword')?.value;
        return (pass1 != pass2) ? {'passwordnotmatches': true} : null
        
    }

}
