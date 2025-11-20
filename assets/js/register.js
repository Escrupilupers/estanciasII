// Animación de entrada
window.addEventListener('load', () => {
  document.getElementById('registerCard').classList.add('show');
});

// Mostrar/Ocultar contraseñas
const toggleBtns = document.querySelectorAll('.toggle-password');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMatch = document.getElementById('passwordMatch');

// Coincidencia de contraseñas
confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value && confirmPasswordInput.value &&
      passwordInput.value === confirmPasswordInput.value) {
    passwordMatch.style.display = 'block';
  } else {
    passwordMatch.style.display = 'none';
  }
});

// Validación del formulario
const form = document.getElementById('registerForm');
const alerta = document.getElementById('alerta');

// Función auxiliar para mostrar alertas
function showAlert(msg) {
  alerta.textContent = msg;
  alerta.style.display = 'block';
}

// Función para verificar si el correo ya existe en la BD
async function verificarCorreo(email) {
  try {
    const res = await fetch(`http://localhost:3000/api/usuarios?email=${encodeURIComponent(email)}`);
    if (!res.ok) throw new Error("Error en la verificación del correo.");
    const usuarios = await res.json();
    // Si la API devuelve un array, revisamos si hay alguno con el mismo correo
    return usuarios.some(u => u.email === email);
  } catch (error) {
    console.error(error);
    return false; // En caso de error, dejamos continuar (pero logeamos)
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validaciones locales
  if (!email || !firstName || !lastName || !password || !confirmPassword) {
    showAlert("Por favor, completa todos los campos.");
    return;
  }

  if (!email.endsWith("@unipolidgo.edu.mx")) {
    showAlert("Usa tu correo institucional (@unipolidgo.edu.mx).");
    return;
  }

  if (password.length < 6) {
    showAlert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    showAlert("Las contraseñas no coinciden.");
    return;
  }

  // Verificar si el correo ya existe en la base de datos
  const existe = await verificarCorreo(email);
  if (existe) {
    showAlert("Este correo ya está registrado. Usa otro o inicia sesión.");
    return;
  }

  // Si pasa todas las validaciones, enviamos a la API
  try {
    const res = await fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: firstName,
        apellido: lastName,
        email,
        password,
        id_role: 2 // Rol por defecto (ajústalo si es necesario)
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Error al crear usuario");
    }

    // Mostrar mensaje de éxito
    alerta.style.display = 'none';
    form.innerHTML = `
      <div style="padding: 20px; text-align:center;">
        <i class="bi bi-check-circle-fill text-success" style="font-size: 60px;"></i>
        <h5 class="mt-3">¡Registro exitoso!</h5>
        <p>Bienvenido/a ${firstName} ${lastName}</p>
        <p>Tu cuenta ha sido creada correctamente.</p>
        <p>Redirigiendo al inicio de sesión...</p>
      </div>
    `;
    setTimeout(() => {
      window.location.href = "/views/login.html";
    }, 3000);

  } catch (error) {
    console.error(error);
    showAlert("Ocurrió un error al registrar el usuario.");
  }
});
