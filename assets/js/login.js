// Animación de entrada
window.addEventListener('load', () => {
  document.getElementById('loginCard').classList.add('show');
});

// Toggle contraseña
const toggleBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  toggleBtn.classList.toggle('bi-eye');
  toggleBtn.classList.toggle('bi-eye-slash');
});

// Validación del formulario
const form = document.getElementById('loginForm');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showAlert("Please fill in all fields.");
    return;
  }

  if (!email.endsWith("@uniautonomadgo.edu.mx")) {
    showAlert("Use your institutional email.");
    return;
  }

  // Simulación de éxito
  alerta.style.display = 'none';
  form.innerHTML = `
    <div style="padding: 20px; text-align:center;">
      <i class="bi bi-check-circle-fill text-success" style="font-size: 60px;"></i>
      <h5 class="mt-3">Welcome, ${email.split('@')[0]}!</h5>
      <p>Redirecting to dashboard...</p>
    </div>
  `;

  setTimeout(() => location.reload(), 2000);
});

function showAlert(msg) {
  alerta.textContent = msg;
  alerta.style.display = 'block';
}
