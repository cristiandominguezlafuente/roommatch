const personas = [
  {
    nombre: "Daniel Puente, 18",
    zona: "Busca piso en Eixample",
    desc: "Estudiante · No fumador · Tiene perro",
    foto: "img/personas/daniel.png",
  },
  {
    nombre: "Alejandro, 18",
    zona: "Busca piso en Gràcia",
    desc: "Trabajadora · No fumadora · Sin mascotas",
    foto: "img/personas/alejandro.png",
  },
  {
    nombre: "Héctor Monreal, 20",
    zona: "Busca piso en Poblenou",
    desc: "Gamer · Fumador · Futbolero",
    foto: "img/personas/hector.png",
  },
  {
    nombre: "Marc García, 17",
    zona: "Busca piso en Badalona",
    desc: "Gamer · Mujeriego · Futbolero",
    foto: "img/personas/marc.png",
  },
];

let actual = 0;

function mostrarPersona() {
  const p = personas[actual];

  const img = document.querySelector(".carta-foto img");
  const nombre = document.querySelector(".carta-info h3");
  const zona = document.querySelector(".carta-zona");
  const desc = document.querySelector(".carta-info p");

  if (!img || !nombre || !zona || !desc) return;

  img.src = p.foto;
  nombre.textContent = p.nombre;
  zona.textContent = p.zona;
  desc.textContent = p.desc;
}

function siguiente() {
  actual++;

  if (actual < personas.length) {
    mostrarPersona();
  } else {
    alert("No hay más personas por ahora");
  }
}

// botones
document.querySelector(".btn-si").addEventListener("click", () => {
  alert("¡Match con " + personas[actual].nombre + "!");
  siguiente();
});

document.querySelector(".btn-no").addEventListener("click", () => {
  siguiente();
});

mostrarPersona();
