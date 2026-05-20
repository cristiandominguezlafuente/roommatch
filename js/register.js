function togglePass() {
  const input = document.querySelector("#reg-pass");
  const icon = document.querySelector("#eye-icon");
  if (input.type === "password") {
    input.type = "text";
    icon.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    icon.className = "fa-solid fa-eye";
  }
}
