### Form de tipo template ###
1 - Importamos el componente donde vamos a realizar el formulario de la libreria FormsModule. Exactamente igual que cuando usamos Two Way Data Binding.

2 - Creamos la maqueta del formulario en el html con la etiqueta form.

3 - A este form le colocamos un nombre o template, e igualamos ese nombre a ngForm de esta forma
    #nombreForm = "ngForm"

4 - Crea un evento de tipo submit que en este caso se llama (ngSubmit)="funcionTs(nombreForm.value) o (nombreForm). Ojo funcionTS es un nombre generico y debemos pasar a esta funcion obligatoriamente el nombre del formulario creado en el paso anterior.

5 - Todos los campos del formulario deben llevar un name="...." y un atributo ngModel.

6 - La funcion devolvera un objeto json con cada uno de los campos del formulario.