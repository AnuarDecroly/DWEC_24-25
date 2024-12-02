RECETA REACTIVEFORMSMODULE

1 - Importamos la libreria al componente donde la vamos a usar ReactiveFormsModule.

2 - Creamos un atributo dentro de la etiqueta form que se llama formGroup que contendrá el nombre del formulario.

3 - Necesitamos implementar el evento ngSubmit que llame a una función que NO RECIBE PARAMETROS. La función te genera un objeto JSON.

4 - A cada campo del formulario (input, select, textarea, etc) solo le tenemos que añadir un atributo formControlName con el nombre del campo.

5 - Inicializamos dentro del .ts el objeto FormGroup creado en el punto 2, donde tenemos obligación de dar de alta cada uno de los campos. (Aqui es donde ejecutaremos los validadores)

ESTADOS DEL FORMULARIO

- Pristine (limpio) --------- Dirty (Sucio)
- Invalid (invalido) -------- valid(valido)
- Untouched (no tocado) ----- touched (tocado)
- Unsubmitted (sin enviar) -- submitted (enviado)
