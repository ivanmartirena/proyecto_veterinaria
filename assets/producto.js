window.onload = function () {
  //Catalogo => Producto
  let $card_producto = document.querySelector(".card_producto");
  if($card_producto){
    
    card_producto.addEventListener("click", function(){
      window.location.href = "producto.html";
  });
}
}