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

// Validación del formulario + LOGIN REAL
const form = document.getElementById('loginForm');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value;

  // Validación básica
  if (!email || !password) {
    showAlert("Please fill in all fields.");
    return;
  }

  if (!email.endsWith("@unipolidgo.edu.mx")) {
    showAlert("Use your institutional email.");
    return;
  }

  try {
    // 🔥 Request al backend
    const response = await fetch("http://localhost:3000/api/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    // ❌ SI EL BACKEND RESPONDE ERROR
    if (!response.ok) {
      showAlert(data.error || "Login failed.");
      return;
    }

    // ---------------------------------------------------------
    // 🔥 NORMALIZAR EL USUARIO PARA QUE EL FRONT NO FALLE
    // ---------------------------------------------------------
    const usuarioNormalizado = {
      id_usuario: data.usuario.id,      // backend → frontend
      nombre: data.usuario.nombre,
      apellido: data.usuario.apellido,
      email: data.usuario.email,
      rol: data.usuario.role            // backend → frontend
    };

    // Guardar en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuarioNormalizado));
    // ---------------------------------------------------------

    // ✔️ LOGIN EXITOSO → animación
    alerta.style.display = 'none';
    form.innerHTML = `
      <div style="padding: 20px; text-align:center;">
        <i class="bi bi-check-circle-fill text-success" style="font-size: 60px;"></i>
        <h5 class="mt-3">Welcome, ${usuarioNormalizado.nombre}!</h5>
        <p>Redirecting to dashboard...</p>
      </div>
    `;

    // 🔥 REDIRECCIÓN REAL
    setTimeout(() => {
      window.location.href = "dash.html";
    }, 1500);

  } catch (err) {
    console.error("Login error:", err);
    showAlert("Server connection error.");
  }
});

function showAlert(msg) {
  alerta.textContent = msg;
  alerta.style.display = 'block';
}
