
var misProductos = [];
var currency;



const cargarProductos = (inventario) => {
    misProductos = inventario.products;
    currency = inventario.currency;
    console.log(`La moneda es: ${currency}`);
    
    misProductos.forEach(producto => {
        producto.cantidad = 0
        console.log(producto);
    });
}


misProductos.forEach(producto => {
    producto.cantidad = 0
    


});
//Obtenemos mediante el fecth los datos de la API

fetch("https://jsonblob.com/api/1293576387225837568")
    .then(response => response.json())
    .catch(error => console.log(error))
    .finally(console.log("Se ha llamado a un servidor"))
    .then(inventario => {
       cargarProductos(inventario);
    });




