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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!email || !firstName || !lastName || !password || !confirmPassword) {
    showAlert("Por favor, completa todos los campos.");
    return;
  }

  if (!email.endsWith("@uniautonomadgo.edu.mx")) {
    showAlert("Usa tu correo institucional (@uniautonomadgo.edu.mx).");
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

  // Éxito simulado
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
    alert('Redirigiendo al inicio de sesión...');
  }, 3000);
});

function showAlert(msg) {
  alerta.textContent = msg;
  alerta.style.display = 'block';
}
