// ─────────────────────────────────────────
// 1. LISTA DE PERSONAS
// ─────────────────────────────────────────

// Un array es una lista. Cada {} es una persona con sus datos.
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

// Esta variable guarda qué persona estamos viendo ahora (empieza en 0 = la primera)
let actual = 0;

// Estas dos guardan la posición del ratón cuando hacemos drag
let startX = 0; // dónde empezó el clic
let currentX = 0; // cuánto se ha movido desde el inicio

// Evita que se lancen dos iconos a la vez
let iconoActivo = false;

// ─────────────────────────────────────────
// 2. FUNCIÓN: mostrarPersona
// Actualiza la carta con los datos de la persona actual
// ─────────────────────────────────────────

function mostrarPersona() {
  // Coge la persona del array según el índice actual
  const p = personas[actual];

  // Selecciona cada elemento HTML de la carta
  const img = document.querySelector(".carta-foto img"); // la foto
  const nombre = document.querySelector(".carta-info h3"); // el nombre
  const zona = document.querySelector(".carta-zona"); // la zona
  const desc = document.querySelector(".carta-info p"); // la descripción

  // Si algún elemento no existe en el HTML, para aquí y no hace nada
  if (!img || !nombre || !zona || !desc) return;

  // Actualiza el contenido de cada elemento con los datos de la persona
  img.src = p.foto;
  nombre.textContent = p.nombre;
  zona.textContent = p.zona;
  desc.textContent = p.desc;

  // Devuelve la carta a su posición original (centrada, sin rotación)
  const carta = document.querySelector(".carta");
  carta.style.transform = "translateX(0) rotate(0)";
  carta.style.transition = "transform 0.3s ease"; // animación suave de 0.3s
}

// ─────────────────────────────────────────
// 3. FUNCIÓN: lanzarIcono
// Crea un ♥ o ✕ que sube desde la carta y desaparece
// ─────────────────────────────────────────

function lanzarIcono(tipo) {
  // Crea un nuevo <div> en el HTML
  const icono = document.createElement("div");

  // Le añade las clases CSS para que tenga estilo y animación
  icono.classList.add("icono-match", tipo); // tipo = "like" o "nope"

  // Escribe el símbolo dentro del div según el tipo
  icono.textContent = tipo === "like" ? "♥" : "✕";

  // Calcula la posición central de la carta para colocar el icono ahí
  const carta = document.querySelector(".carta");
  const rect = carta.getBoundingClientRect(); // obtiene posición y tamaño de la carta
  icono.style.left = rect.left + rect.width / 2 - 40 + "px"; // centrado horizontal
  icono.style.top = rect.top + rect.height / 2 + "px"; // centrado vertical

  // Añade el icono al body para que se vea
  document.body.appendChild(icono);

  // Cuando la animación CSS termina, borra el icono y permite lanzar otro
  icono.addEventListener("animationend", () => {
    icono.remove(); // lo elimina del HTML
    iconoActivo = false; // permite volver a lanzar iconos
  });
}

// ─────────────────────────────────────────
// 4. FUNCIÓN: siguiente
// Pasa a la siguiente persona o muestra el mensaje final
// ─────────────────────────────────────────

function siguiente() {
  // Suma 1 al índice para ir a la siguiente persona
  actual++;

  if (actual < personas.length) {
    // Si todavía quedan personas, muestra la siguiente
    mostrarPersona();
  } else {
    // Si ya no quedan más, muestra este mensaje en el contenedor
    document.querySelector(".lista-match").innerHTML = `
      <div style="text-align:center; padding: 60px 0; color: #5d6463;">
        <i class="fa-solid fa-heart" style="font-size: 48px; color: #36bba7; margin-bottom: 16px; display:block;"></i>
        <p style="font-size: 18px; font-weight: 700;">No hay más personas por ahora</p>
        <p style="font-size: 14px;">Vuelve más tarde para ver nuevos perfiles</p>
      </div>
    `;
    // Oculta los botones ♥ y ✕
    document.querySelector(".acciones").style.display = "none";
  }
}

// ─────────────────────────────────────────
// 5. BOTÓN ♥ (like)
// ─────────────────────────────────────────

document.querySelector(".btn-si").addEventListener("click", () => {
  lanzarIcono("like"); // lanza el corazón animado

  const carta = document.querySelector(".carta");
  carta.style.transform = "translateX(1000px) rotate(30deg)"; // mueve la carta a la derecha
  carta.style.transition = "transform 0.4s ease"; // en 0.4 segundos

  // Espera a que termine la animación y pasa a la siguiente persona
  setTimeout(() => {
    siguiente();
  }, 400); // 400ms = mismo tiempo que la animación
});

// ─────────────────────────────────────────
// 6. BOTÓN ✕ (nope)
// ─────────────────────────────────────────

document.querySelector(".btn-no").addEventListener("click", () => {
  lanzarIcono("nope"); // lanza la X animada

  const carta = document.querySelector(".carta");
  carta.style.transform = "translateX(-1000px) rotate(-30deg)"; // mueve la carta a la izquierda
  carta.style.transition = "transform 0.4s ease";

  setTimeout(() => {
    siguiente();
  }, 400);
});

// ─────────────────────────────────────────
// 7. ARRASTRAR CON EL RATÓN (drag & swipe)
// ─────────────────────────────────────────

const carta = document.querySelector(".carta");

// Cuando el usuario hace clic en la carta
carta.addEventListener("mousedown", (e) => {
  startX = e.clientX; // guarda en qué posición X del monitor se hizo clic

  // Activa los otros dos eventos mientras el botón esté pulsado
  document.addEventListener("mousemove", mover);
  document.addEventListener("mouseup", soltar);
});

// Se ejecuta mientras se mueve el ratón (con el botón pulsado)
function mover(e) {
  // Calcula cuántos píxeles se ha movido desde el inicio
  currentX = e.clientX - startX;

  const carta = document.querySelector(".carta");

  // Mueve y rota la carta según el desplazamiento (0.05 = rotación suave)
  carta.style.transform = `translateX(${currentX}px) rotate(${currentX * 0.05}deg)`;
  carta.style.transition = "none"; // sin animación mientras arrastramos

  // Si se ha movido más de 30px a la derecha → like
  if (currentX > 30) {
    carta.classList.add("derecha");
    carta.classList.remove("izquierda");
    if (!iconoActivo) {
      // solo lanza icono si no hay uno ya
      iconoActivo = true;
      lanzarIcono("like");
    }

    // Si se ha movido más de 30px a la izquierda → nope
  } else if (currentX < -30) {
    carta.classList.add("izquierda");
    carta.classList.remove("derecha");
    if (!iconoActivo) {
      iconoActivo = true;
      lanzarIcono("nope");
    }

    // Si está cerca del centro → quita los efectos visuales
  } else {
    carta.classList.remove("derecha", "izquierda");
    iconoActivo = false;
  }
}

// Se ejecuta cuando se suelta el botón del ratón
function soltar() {
  // Desactiva los eventos de movimiento y soltar
  document.removeEventListener("mousemove", mover);
  document.removeEventListener("mouseup", soltar);

  const carta = document.querySelector(".carta");

  if (currentX > 100) {
    // Se soltó bien a la derecha → confirmar like
    lanzarIcono("like");
    carta.style.transform = "translateX(1000px) rotate(30deg)";
    carta.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      siguiente();
    }, 400);
  } else if (currentX < -100) {
    // Se soltó bien a la izquierda → confirmar nope
    lanzarIcono("nope");
    carta.style.transform = "translateX(-1000px) rotate(-30deg)";
    carta.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      siguiente();
    }, 400);
  } else {
    // No llegó a 100px → vuelve al centro (como si no hubiera pasado nada)
    carta.style.transform = "translateX(0) rotate(0)";
    carta.style.transition = "transform 0.3s ease";
    carta.classList.remove("derecha", "izquierda");
    iconoActivo = false;
  }

  // Resetea los valores para el próximo drag
  currentX = 0;
  carta.classList.remove("derecha", "izquierda");
}

// ─────────────────────────────────────────
// 8. INICIO
// Muestra la primera persona al cargar la página
// ─────────────────────────────────────────

mostrarPersona();
