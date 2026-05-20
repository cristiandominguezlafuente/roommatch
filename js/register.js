// js/register.js

// Capturar el formulario (Asegúrate de que tu <form> en el HTML tenga id="form-register")
const formulario = document.getElementById("form-register");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-pass").value;

  // La variable 'supabase' ya existe de manera global gracias a supabase-config.js
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: nombre,
      },
    },
  });

  if (error) {
    alert("Error en el registro: " + error.message);
    console.error(error);
  } else {
    alert("¡Cuenta creada con éxito!");
    console.log("Usuario creado:", data);
  }
});

// Tu función para mostrar/ocultar contraseña
function togglePass() {
  const passInput = document.getElementById("reg-pass");
  const eyeIcon = document.getElementById("eye-icon");

  if (passInput.type === "password") {
    passInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
