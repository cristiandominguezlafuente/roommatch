const personas = [
  {
    nombre: "Daniel, 18",
    zona: "Busca piso en Eixample",
    desc: "Estudiante · No fumador · Tiene perro",
    foto: "img/personas/daniel.png",
  },
  {
    nombre: "Héctor, 20",
    zona: "Busca piso en Gràcia",
    desc: "Trabajadora · No fumadora · Sin mascotas",
    foto: "img/personas/Hector.png",
  },
  {
    nombre: "Marc, 18",
    zona: "Busca piso en Poblenou",
    desc: "Freelance · Fumador · Tiene gato",
    foto: "img/personas/marc.png",
  },
  {
    nombre: "Alejandro, 18",
    zona: "Busca piso en Badalona",
    desc: "Estudiante · No fumadora · Le gustan los animales",
    foto: "img/personas/alejandro.png",
  },
];

// índice de la persona que se muestra actualmente
let actual = 0;

// posición inicial del ratón al hacer click
let startX = 0;

// cuánto se ha movido el ratón desde el inicio
let currentX = 0;

// controla que solo haya un icono animándose a la vez
let iconoActivo = false;

// crea el icono animado y lo lanza hacia arriba desde el centro de la carta
function lanzarIcono(tipo) {
  const icono = document.createElement("div");
  icono.classList.add("icono-match", tipo);
  icono.textContent = tipo === "like" ? "♥" : "✕";

  // lo coloca en el centro de la carta
  const carta = document.querySelector(".carta");
  const rect = carta.getBoundingClientRect();
  icono.style.left = rect.left + rect.width / 2 - 40 + "px";
  icono.style.top = rect.top + rect.height / 2 + "px";

  document.body.appendChild(icono);

  // lo elimina del DOM cuando termina la animación y resetea el control
  icono.addEventListener("animationend", () => {
    icono.remove();
    iconoActivo = false;
  });
}

// muestra los datos de la persona actual en la carta
function mostrarPersona() {
  const p = personas[actual];

  // selecciona los elementos del DOM
  const img = document.querySelector(".carta-foto img");
  const nombre = document.querySelector(".carta-info h3");
  const zona = document.querySelector(".carta-zona");
  const desc = document.querySelector(".carta-info p");

  // si algún elemento no existe, no hace nada
  if (!img || !nombre || !zona || !desc) return;

  // actualiza los datos en pantalla
  img.src = p.foto;
  nombre.textContent = p.nombre;
  zona.textContent = p.zona;
  desc.textContent = p.desc;

  // resetea la posición de la carta al centro
  const carta = document.querySelector(".carta");
  carta.style.transform = "translateX(0) rotate(0)";
  carta.style.transition = "transform 0.3s ease";
}

// pasa a la siguiente persona del array
function siguiente() {
  actual++;

  if (actual < personas.length) {
    // si quedan personas, muestra la siguiente
    mostrarPersona();
  } else {
    // si no quedan más, muestra mensaje final
    document.querySelector(".lista-match").innerHTML = `
      <div style="text-align:center; padding: 60px 0; color: #5d6463;">
        <i class="fa-solid fa-heart" style="font-size: 48px; color: #36bba7; margin-bottom: 16px; display:block;"></i>
        <p style="font-size: 18px; font-weight: 700;">No hay más personas por ahora</p>
        <p style="font-size: 14px;">Vuelve más tarde para ver nuevos perfiles</p>
      </div>
    `;
    // oculta los botones de acción
    document.querySelector(".acciones").style.display = "none";
  }
}

// botón corazón: lanza el icono y la carta a la derecha
document.querySelector(".btn-si").addEventListener("click", () => {
  lanzarIcono("like");
  const carta = document.querySelector(".carta");

  carta.style.transform = "translateX(1000px) rotate(30deg)";
  carta.style.transition = "transform 0.4s ease";

  setTimeout(() => {
    siguiente();
  }, 400);
});

// botón X: lanza el icono y la carta a la izquierda
document.querySelector(".btn-no").addEventListener("click", () => {
  lanzarIcono("nope");
  const carta = document.querySelector(".carta");

  carta.style.transform = "translateX(-1000px) rotate(-30deg)";
  carta.style.transition = "transform 0.4s ease";

  setTimeout(() => {
    siguiente();
  }, 400);
});

// swipe con el ratón: detecta cuando se hace click en la carta
const carta = document.querySelector(".carta");

carta.addEventListener("mousedown", (e) => {
  // guarda la posición inicial del ratón
  startX = e.clientX;

  document.addEventListener("mousemove", mover);
  document.addEventListener("mouseup", soltar);
});

// se ejecuta mientras se arrastra la carta
function mover(e) {
  currentX = e.clientX - startX;
  const carta = document.querySelector(".carta");

  carta.style.transform = `translateX(${currentX}px) rotate(${currentX * 0.05}deg)`;
  carta.style.transition = "none";

  if (currentX > 30) {
    carta.classList.add("derecha");
    carta.classList.remove("izquierda");
    // solo lanza si no hay uno activo
    if (!iconoActivo) {
      iconoActivo = true;
      lanzarIcono("like");
    }
  } else if (currentX < -30) {
    carta.classList.add("izquierda");
    carta.classList.remove("derecha");
    // solo lanza si no hay uno activo
    if (!iconoActivo) {
      iconoActivo = true;
      lanzarIcono("nope");
    }
  } else {
    carta.classList.remove("derecha", "izquierda");
    iconoActivo = false;
  }
}

// se ejecuta cuando se suelta el ratón
function soltar() {
  document.removeEventListener("mousemove", mover);
  document.removeEventListener("mouseup", soltar);

  const carta = document.querySelector(".carta");

  if (currentX > 100) {
    lanzarIcono("like");
    carta.style.transform = "translateX(1000px) rotate(30deg)";
    carta.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      siguiente();
    }, 400);
  } else if (currentX < -100) {
    lanzarIcono("nope");
    carta.style.transform = "translateX(-1000px) rotate(-30deg)";
    carta.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      siguiente();
    }, 400);
  } else {
    carta.style.transform = "translateX(0) rotate(0)";
    carta.style.transition = "transform 0.3s ease";
    carta.classList.remove("derecha", "izquierda");
    iconoActivo = false;
  }

  currentX = 0;
  carta.classList.remove("derecha", "izquierda");
}

// carga la primera persona al iniciar la página
mostrarPersona();
