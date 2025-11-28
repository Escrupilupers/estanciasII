// Reservas.js
// Archivo único de lógica para tabla + modales.
// Ajusta API_URL si tu backend usa otra ruta.

const API_URL_RESERVAS = "/api/reservas";
const API_URL_LABS = "/api/laboratorios";

document.addEventListener("DOMContentLoaded", () => {
    initUserAndUI();
    initEvents();
    cargarReservas();
    cargarLaboratorios();
    cargarAsignaturas();
});

function initUserAndUI() {
    // Cargar usuario y nombres
    let usuario = null;
    try { usuario = JSON.parse(localStorage.getItem("usuario")); } catch(e) { usuario = null; }

    if (!usuario) {
        // Si no estás en login, redirige
        if (!location.pathname.includes("login")) {
            window.location.href = "../views/login.html";
            return;
        }
    } else {
        const iniciales = (usuario.nombre?.charAt(0) || "").toUpperCase()
                        + (usuario.apellido?.charAt(0) || "").toUpperCase();
        const nameEl = document.getElementById("user-name");
        const initialsEl = document.getElementById("user-initials-btn");
        const mobileInitials = document.getElementById("mobile-user-initials");
        const mobileName = document.getElementById("mobile-user-name");
        const mobileRole = document.getElementById("mobile-user-role");

        if (nameEl) nameEl.textContent = `${usuario.nombre} ${usuario.apellido}`;
        if (initialsEl) initialsEl.textContent = iniciales;
        if (mobileInitials) mobileInitials.textContent = iniciales;
        if (mobileName) mobileName.textContent = `${usuario.nombre} ${usuario.apellido}`;
        if (mobileRole) mobileRole.textContent = usuario.rol ?? "Usuario";
    }

    // Dark mode buttons
    const html = document.documentElement;
    const darkModeBtn = document.getElementById("darkModeBtn");
    const darkModeBtnMobile = document.getElementById("btn-darkMode-mobile");
    if (localStorage.getItem("theme") === "dark") html.classList.add("dark");
    if (darkModeBtn) darkModeBtn.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    if (darkModeBtnMobile) darkModeBtnMobile.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

function initEvents() {
    // New practice open
    const newBtn = document.getElementById("new-practice-btn");
    if (newBtn) newBtn.addEventListener("click", () => {
        // reset fields
        const fecha = document.getElementById("fecha");
        const practica = document.getElementById("practica");
        const asignatura = document.getElementById("asignatura");
        if (fecha) fecha.value = "";
        if (practica) practica.value = "";
        if (asignatura) asignatura.value = "";
        document.getElementById("modalNuevaPractica").classList.remove("hidden");
    });

    // Guardar nueva
    const guardarBtn = document.getElementById("guardarBtn");
    if (guardarBtn) guardarBtn.addEventListener("click", guardarNueva);

    // Editar guardar
    const editarBtn = document.getElementById("editarBtn");
    if (editarBtn) editarBtn.addEventListener("click", guardarEdicion);

    // Cancelar eliminar
    const cancelarEliminar = document.getElementById("cancelarEliminar");
    if (cancelarEliminar) cancelarEliminar.addEventListener("click", () => {
        document.getElementById("modalEliminar").classList.add("hidden");
    });

    // Confirmar eliminar
    const confirmarEliminar = document.getElementById("confirmarEliminar");
    if (confirmarEliminar) confirmarEliminar.addEventListener("click", confirmarEliminarReserva);
}

// Estado temporal para editar/eliminar
let editarId = null;
let eliminarId = null;

// ========== CARGAR RESERVAS ==========
async function cargarReservas() {
    const tablaBody = document.getElementById("tablaReservas");
    if (!tablaBody) return;
    tablaBody.innerHTML = "";

    try {
        const res = await fetch(API_URL_RESERVAS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // data assumed to be array
        data.forEach(r => {
            const fechaLimpia = (r.fecha_reserva || r.fecha || "").slice(0,10);
            const nombreLab = r.nombre_laboratorio || r.nombre || "—";
            const clase = r.clase || r.asignatura || r.motivo || "—";
            const estado = r.estado || "pendiente";
            const id = r.id_reserva ?? r.id ?? r.id_reservas;

            tablaBody.innerHTML += `
                <tr>
                    <td class="px-6 py-3">${fechaLimpia}</td>
                    <td class="px-6 py-3">${escapeHtml(nombreLab)}</td>
                    <td class="px-6 py-3">${escapeHtml(clase)}</td>
                    <td class="px-6 py-3">${escapeHtml(estado)}</td>
                    <td class="px-6 py-3">
                        <button data-id="${id}" class="btn-editar text-blue-500 hover:underline">Editar</button>
                        <button data-id="${id}" class="btn-eliminar text-red-500 hover:underline ml-3">Eliminar</button>
                    </td>
                </tr>
            `;
        });

        // Attach listeners for generated buttons
        document.querySelectorAll(".btn-eliminar").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.currentTarget.dataset.id;
                abrirEliminar(id);
            });
        });
        document.querySelectorAll(".btn-editar").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.currentTarget.dataset.id;
                abrirEditar(id);
            });
        });

        actualizarStats(data);

    } catch (err) {
        console.error("Error cargando reservas:", err);
        tablaBody.innerHTML = `<tr><td class="px-6 py-3" colspan="5">Error cargando reservas.</td></tr>`;
    }
}

function actualizarStats(data) {
    try {
        const total = (data || []).length;
        const proximas = (data || []).filter(r => {
            const f = (r.fecha_reserva || r.fecha || "").slice(0,10);
            if (!f) return false;
            return new Date(f) >= new Date(); // próximas hoy o futuro
        }).length;
        const completadas = (data || []).filter(r => (r.estado || "").toLowerCase() === "completada").length;
        const asignaturas = new Set((data || []).map(r => r.clase || r.asignatura).filter(Boolean)).size;

        document.getElementById("stat-mis-practicas").textContent = total;
        document.getElementById("stat-proximas").textContent = proximas;
        document.getElementById("stat-completadas").textContent = completadas;
        document.getElementById("stat-asignaturas").textContent = asignaturas;
    } catch(e) { /* no bloquear la UI */ }
}

// ========== CARGAR LABORATORIOS ==========
async function cargarLaboratorios() {
    try {
        const res = await fetch(API_URL_LABS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const labs = await res.json();

        const select = document.getElementById("practica");
        const editSelect = document.getElementById("editPractica");
        if (select) {
            select.innerHTML = `<option value="">Seleccione laboratorio</option>`;
            labs.forEach(lab => {
                select.innerHTML += `<option value="${lab.id_laboratorio ?? lab.id}">${escapeHtml(lab.nombre)}</option>`;
            });
        }
        if (editSelect) {
            editSelect.innerHTML = `<option value="">Seleccione laboratorio</option>`;
            labs.forEach(lab => {
                editSelect.innerHTML += `<option value="${lab.id_laboratorio ?? lab.id}">${escapeHtml(lab.nombre)}</option>`;
            });
        }
    } catch (e) {
        console.error("Error cargando laboratorios:", e);
    }
}

// ========== CARGAR ASIGNATURAS (estáticas) ==========
async function cargarAsignaturas() {
    try {
        // Trae TODAS las reservas (ahí viene la columna clase)
        const res = await fetch("/api/reservas");
        const data = await res.json();

        if (!Array.isArray(data)) return;

        // EXTRAER solo valores únicos de la columna "clase"
        const asignaturas = [...new Set(data.map(r => r.clase).filter(Boolean))];

        const sel = document.getElementById("asignatura");
        const selEdit = document.getElementById("editAsignatura");

        // Rellenar los selects
        if (sel) {
            sel.innerHTML = `<option value="">Seleccione asignatura</option>`;
            asignaturas.forEach(a => {
                sel.innerHTML += `<option value="${a}">${a}</option>`;
            });
        }

        if (selEdit) {
            selEdit.innerHTML = `<option value="">Seleccione asignatura</option>`;
            asignaturas.forEach(a => {
                selEdit.innerHTML += `<option value="${a}">${a}</option>`;
            });
        }

    } catch (error) {
        console.error("Error cargando asignaturas:", error);
    }
}



// ========== GUARDAR NUEVA ==========
async function guardarNueva() {
    const fecha = document.getElementById("fecha").value;
    const id_laboratorio = document.getElementById("practica").value;
    const clase = document.getElementById("asignatura").value;

    if (!id_laboratorio) return alert("Seleccione un laboratorio.");
    if (!clase) return alert("Seleccione una asignatura.");

    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
    const nueva = {
        id_usuario: usuario.id_usuario ?? usuario.id ?? 0,
        id_laboratorio,
        fecha_reserva: fecha,
        hora_inicio: "00:00:00",
        hora_fin: "00:00:00",
        motivo: "Práctica",
        estado: "pendiente",
        clase
    };

    try {
        const res = await fetch(API_URL_RESERVAS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nueva)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
        console.error("Error creando reserva:", e);
        alert("Error creando reserva.");
    }

    document.getElementById("modalNuevaPractica").classList.add("hidden");
    cargarReservas();
}

// ========== ELIMINAR ==========
function abrirEliminar(id) {
    eliminarId = id;
    document.getElementById("modalEliminar").classList.remove("hidden");
}

async function confirmarEliminarReserva() {
    if (!eliminarId) return;
    try {
        const res = await fetch(`${API_URL_RESERVAS}/${eliminarId}`, { method: "DELETE" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
        console.error("Error eliminando:", e);
        alert("Error eliminando reserva.");
    }
    document.getElementById("modalEliminar").classList.add("hidden");
    eliminarId = null;
    cargarReservas();
}

// ========== EDITAR ==========
async function abrirEditar(id) {
    editarId = id;
    // buscar datos desde la API para tener la info más reciente
    try {
        const res = await fetch(`${API_URL_RESERVAS}/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const r = await res.json();

        document.getElementById("editFecha").value = (r.fecha_reserva || r.fecha || "").slice(0,10);
        document.getElementById("editPractica").value = r.id_laboratorio ?? r.id_laboratorio ?? r.id_lab ?? "";
        document.getElementById("editAsignatura").value = r.clase ?? r.asignatura ?? "";

        document.getElementById("modalEditar").classList.remove("hidden");
    } catch (e) {
        console.error("Error obteniendo reserva para editar:", e);
        alert("No se pudo cargar la reserva para edición.");
    }
}

async function guardarEdicion() {
    if (!editarId) return;

    const fecha = document.getElementById("editFecha").value;
    const id_laboratorio = document.getElementById("editPractica").value;
    const clase = document.getElementById("editAsignatura").value;

    if (!id_laboratorio) return alert("Seleccione un laboratorio.");
    if (!clase) return alert("Seleccione una asignatura.");

    const body = {
        id_laboratorio,
        fecha_reserva: fecha,
        clase
    };

    try {
        const res = await fetch(`${API_URL_RESERVAS}/${editarId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
        console.error("Error guardando edición:", e);
        alert("Error al guardar cambios.");
    }

    document.getElementById("modalEditar").classList.add("hidden");
    editarId = null;
    cargarReservas();
}

// ========== UTIL ==========
function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
