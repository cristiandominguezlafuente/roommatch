// Escucha el click en el botón de login
document.querySelector(".boton-login").addEventListener("click", function () {
  // Selecciona el campo de email
  const email = document.querySelector("#email");

  // Selecciona el campo de contraseña
  const password = document.querySelector("#password");

  // Comprueba si alguno de los dos campos está vacío
  if (email.value == "" || password.value == "") {
    // Muestra una alerta avisando al usuario
    alert("Por favor, rellena todos los campos");

    // Para la función aquí, no continúa
    return;
  } else {
    // Si los dos campos están rellenos, redirige al perfil
    window.location.href = "perfil.html";
  }
});
