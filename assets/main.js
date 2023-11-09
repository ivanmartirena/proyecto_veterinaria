window.onload = function () {
  // Variables
  const IMAGENES = [
    ["img/dog-838281_1280.jpg", "LOS MEJORES PRODUCTOS A UN SOLO CLICK"],
    ["img/cat-4988408_1280.jpg", "GRAN VARIEDAD DE PRODUCTOS Y ACCESORIOS"],
  ];

  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector("#retroceder");
  let $botonAvanzar = document.querySelector("#avanzar");
  let $botonPausa = document.querySelector("#pausa");
  let $iconoPausa = document.querySelector("#icono__pausa");
  let $imagen = document.querySelector("#imagen");
  let $descripcion = document.querySelector("#descripcion");

  // Funciones del Carrousel

  /*Carrousel automatico */
  function iniciarCarruselAutomatico() {
    intervalo = setInterval(pasarFoto, 3000); // 3000 milisegundos = 3 segundos
  }

  /**Funciones que detiene el carrousel automatico */

  if ($botonPausa) {
    $botonPausa.addEventListener("click", () => {
      if ($iconoPausa.className == "fas fa-pause") {
        detenerCarruselAutomatico();
        $iconoPausa.className = "fas fa-play";
      } else if ($iconoPausa.className == "fas fa-play") {
        iniciarCarruselAutomatico();
        $iconoPausa.className = "fas fa-pause";
      }
    });

    /*Funcion que detiene el carrousel automatico  */
    function detenerCarruselAutomatico() {
      clearInterval(intervalo);
    }

    $botonAvanzar.addEventListener("click", () => {
      pasarFoto();
      // detenerCarruselAutomatico();
    });

    $botonRetroceder.addEventListener("click", () => {
      retrocederFoto();
      detenerCarruselAutomatico();
    });

    /*Funcion que cambia la foto en la siguiente posicion */
    function pasarFoto() {
      if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
      } else {
        posicionActual++;
      }
      renderizarImagen();
    }

    /*Funcion que cambia la foto en la anterior posicion */
    function retrocederFoto() {
      if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
      } else {
        posicionActual--;
      }
      renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual][0]})`;
      $descripcion.innerText = `${IMAGENES[posicionActual][1]}`;
    }
    // Iniciar
    iniciarCarruselAutomatico();
    renderizarImagen();
  }
  //MENU MOBILE
  if (window.matchMedia("(max-width: 760px)")) {
    let $botonMenu = document.querySelector("#icono_menu");
    let $icono_menu = document.querySelector("#bar_menu");
    let $containerAll = document.querySelector(".container_all");
    let $containerAllCatalogo = document.querySelector(
      ".container_all_catalogo"
    );
    let $container_all_producto = document.querySelector(".container_all_producto");
    let $containerCarrousel = document.querySelector(".contenedor_carrousel");

    $botonMenu.addEventListener("click", () => {
      let $menu = document.getElementById("menu");

      //Icono de abrir menu
      if ($icono_menu.className == "fas fa-bars") {
        $menu.classList.remove("animate__animated", "animate__slideOutLeft");
        setTimeout(() => {
          $icono_menu.className = "fas fa-close";
          $icono_menu.style.color = "white";
        }, "0500");
        $icono_menu.style.zIndex = "100";
        $menu.style.display = "flex";
        $menu.classList.add(
          "animate__animated",
          "animate__slideInLeft",
          "animate__faster"
        );

        if ($containerAllCatalogo) {
          $containerAllCatalogo.classList.toggle(
            "container_all_catalogo_opacidad"
          );
        }
        if($container_all_producto){
          let $producto_seleccionado = document.querySelector(".producto_seleccionado");
          $container_all_producto.classList.toggle("container_all_producto_opacidad");
          $producto_seleccionado.classList.toggle("producto_seleccionado_position")
        }

        if ($containerCarrousel) {
          /*Agrego validacion de que si ya tienen la clase
           al redirigir a una pagina se las quito*/
          if ($containerAll.classList.contains("container_all_opacidad")) {
            $containerAll.classList.toggle("container_all_opacidad");
            $containerCarrousel.classList.toggle(
              "contenedor_carrousel_position"
            );
          } else {
            $containerAll.classList.toggle("container_all_opacidad");
            $containerCarrousel.classList.toggle(
              "contenedor_carrousel_position"
            );
          }
        }
      } else if ($icono_menu.className == "fas fa-close") {
        //Icono para cerrar menu removeProperty

        $menu.classList.remove("animate__animated", "animate__slideInLeft");
        $menu.classList.add("animate__animated", "animate__slideOutLeft");
        $icono_menu.className = "fas fa-bars";
        $icono_menu.style.color = "black";

        $menu.style.display = "none";
        if ($containerCarrousel) {
          $containerCarrousel.classList.toggle("contenedor_carrousel_position");
          $containerAll.classList.toggle("container_all_opacidad");
        }

        if ($containerAllCatalogo) {
          $containerAllCatalogo.classList.toggle(
            "container_all_catalogo_opacidad"
          );
        }
        if($container_all_producto){
          let $producto_seleccionado = document.querySelector(".producto_seleccionado");
          $container_all_producto.classList.toggle("container_all_producto_opacidad");
          $producto_seleccionado.classList.toggle("producto_seleccionado_position")
        }

      }
    });
  } else {
    $icono_menu.className = "fas fa-bars";
    $menu.style.display = "none";
  }


};

