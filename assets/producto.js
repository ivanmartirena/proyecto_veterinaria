
function ver_producto(){
    window.location.href = "producto.html";
}
let btnAgregarCarrito = document.querySelector(".agregar_carrito");

if(btnAgregarCarrito){
    btnAgregarCarrito.addEventListener("click", function(){
        agregar_carrito();
    });
}
function agregar_carrito(){
    let carrito = document.getElementById("carrito");
    carrito.classList.remove("animate__animated","animate__heartBeat");
    setTimeout(() => {  
        carrito.classList.add("animate__animated","animate__heartBeat");
    }, 0);
    

}