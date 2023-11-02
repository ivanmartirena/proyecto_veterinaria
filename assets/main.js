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
    }

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


  //MENU MOBILE
  if (window.matchMedia("(max-width: 760px)")) {
    let $botonMenu = document.querySelector("#icono_menu");
    let $icono_menu = document.querySelector("#bar_menu");
    $botonMenu.addEventListener("click", () => {
      let $menu = document.getElementById("menu");
      if ($icono_menu.className == "fas fa-bars") {
        $icono_menu.className = "fas fa-close";
        $icono_menu.style.zIndex = "100";
        $menu.style.display = "flex";
        $menu.classList.add("animate__animated", "animate__slideInDown");
      } else if ($icono_menu.className == "fas fa-close") {
        $menu.classList.remove("animate__animated", "animate__slideInDown");

        $icono_menu.className = "fas fa-bars";
        $menu.classList.add("animate__animated", "animate__fadeOutUp");
        setTimeout(function () {
          $menu.style.display = "none";
        }, 2000);
      }
    });
  } else {
    $icono_menu.className = "fas fa-bars";
    $menu.style.display = "none";
  }
  // Iniciar
};
