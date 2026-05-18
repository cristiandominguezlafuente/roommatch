const personas = [
  {
    nombre: "Daniel Puente, 18",
    zona: "Busca piso en Eixample",
    desc: "Estudiante · No fumador · Tiene perro",
    foto: "img/chat/daniel.png",
  },
  {
    nombre: "Alejandro, 18",
    zona: "Busca piso en Gràcia",
    desc: "Trabajadora · No fumadora · Sin mascotas",
    foto: "img/chat/alejandro.png",
  },
  {
    nombre: "Héctor Monreal, 20",
    zona: "Busca piso en Poblenou",
    desc: "Gamer · Fumador · Futbolero",
    foto: "img/chat/hector.png",
  },
  {
    nombre: "Marc García, 17",
    zona: "Busca piso en Badalona",
    desc: "Gamer · Mujeriego · Futbolero",
    foto: "img/chat/marc.png",
  },
];

let actual = 0;

function mostrarPersona() {
  const p = personas[actual];
  document.querySelector(".carta-foto img").src = p.foto;
  document.querySelector(".carta-info h3").textContent = p.nombre;
  document.querySelector(".carta-zona").textContent = p.zona;
  document.querySelector(".carta-info p").textContent = p.desc;
}

document.querySelector(".btn-si").addEventListener("click", () => {
  alert("¡Match con " + personas[actual].nombre + "!");
  siguiente();
});

document.querySelector(".btn-no").addEventListener("click", () => {
  siguiente();
});

function siguiente() {
  actual++;
  if (actual < personas.length) {
    mostrarPersona();
  } else {
    alert("No hay más personas por ahora");
  }
}
