const usuario = "admin";
const password = "admin";

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === usuario && pass === password) {
        alert("Bienvenido Administrador");
        window.location.href = "admin.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
