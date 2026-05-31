// Lista de personas que se mostrarán en las cartas
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

// Índice de la persona que se muestra ahora (0 = la primera)
var actual = 0;

// Actualiza la carta con los datos de la persona actual
function mostrarPersona() {
  // Coge la persona del array según el índice actual
  var p = personas[actual];

  // Selecciona los elementos HTML de la carta
  var img = document.querySelector(".carta-foto img");
  var nombre = document.querySelector(".carta-info h3");
  var zona = document.querySelector(".carta-zona");
  var desc = document.querySelector(".carta-info p");

  // Si algún elemento no existe, no hace nada
  if (!img || !nombre || !zona || !desc) return;

  // Rellena la carta con los datos de la persona
  img.src = p.foto;
  nombre.textContent = p.nombre;
  zona.textContent = p.zona;
  desc.textContent = p.desc;

  // Devuelve la carta al centro sin rotación
  var carta = document.querySelector(".carta");
  carta.style.transform = "translateX(0) rotate(0)";
  carta.style.transition = "transform 0.3s ease";
}

// Pasa a la siguiente persona del array
function siguiente() {
  // Suma 1 al índice
  actual++;

  if (actual < personas.length) {
    // Si quedan personas, muestra la siguiente
    mostrarPersona();
  } else {
    // Si no quedan más, muestra un mensaje y oculta los botones
    document.querySelector(".lista-match").innerHTML =
      '<div style="text-align:center; padding: 60px 0; color: #5d6463;">' +
      '<i class="fa-solid fa-heart" style="font-size: 48px; color: #36bba7; margin-bottom: 16px; display:block;"></i>' +
      '<p style="font-size: 18px; font-weight: 700;">No hay más personas por ahora</p>' +
      '<p style="font-size: 14px;">Vuelve más tarde para ver nuevos perfiles</p>' +
      "</div>";

    // Oculta los botones de like y nope
    document.querySelector(".acciones").style.display = "none";
  }
}

// Función que se ejecuta al pulsar like
function clickLike() {
  var carta = document.querySelector(".carta");

  // Mueve la carta fuera de la pantalla a la derecha con rotación
  carta.style.transform = "translateX(1000px) rotate(30deg)";
  carta.style.transition = "transform 0.4s ease";

  // Espera 400ms a que termine la animación y pasa a la siguiente
  setTimeout(siguiente, 400);
}

// Función que se ejecuta al pulsar nope
function clickNope() {
  var carta = document.querySelector(".carta");

  // Mueve la carta fuera de la pantalla a la izquierda con rotación
  carta.style.transform = "translateX(-1000px) rotate(-30deg)";
  carta.style.transition = "transform 0.4s ease";

  // Espera 400ms a que termine la animación y pasa a la siguiente
  setTimeout(siguiente, 400);
}

// Asigna los eventos a los botones
document.querySelector(".btn-si").addEventListener("click", clickLike);
document.querySelector(".btn-no").addEventListener("click", clickNope);

// Carga la primera persona al iniciar la página
mostrarPersona();
