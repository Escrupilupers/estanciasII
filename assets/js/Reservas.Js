const API_URL = "/api/reservas";

document.addEventListener("DOMContentLoaded", () => {
    cargarReservas();

    // Modo noche
    document.getElementById("modoNocheBtn").addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
    });

    // Abrir modal
    document.getElementById("btnAbrirModal").addEventListener("click", () => {
        document.getElementById("modalReserva").classList.remove("hidden");
    });

    // Guardar nueva reserva
    document.getElementById("guardarReserva").addEventListener("click", guardarReserva);
});

async function cargarReservas() {
    const tabla = document.getElementById("tablaReservas");
    tabla.innerHTML = "";

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        data.forEach(r => {
            const fechaLimpia = r.fecha ? r.fecha.slice(0, 10) : "";
            const fila = `
                <tr>
                    <td class="px-3 py-2">${fechaLimpia}</td>
                    <td class="px-3 py-2">${r.nombre_laboratorio}</td>
                    <td class="px-3 py-2">${r.clase}</td>

                    <td class="px-3 py-2">
                        <button class="text-blue-500" onclick="editar(${r.id})">Editar</button>
                        <button class="text-red-500 ml-3" onclick="eliminar(${r.id})">Eliminar</button>
                    </td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    } catch (err) {
        console.error("Error cargando reservas:", err);
    }
}

async function guardarReserva() {
    const fecha = document.getElementById("fechaInput").value;
    const nombre_laboratorio = document.getElementById("laboratorioInput").value;
    const clase = document.getElementById("claseInput").value;

    const nueva = { fecha, nombre_laboratorio, clase };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nueva)
    });

    document.getElementById("modalReserva").classList.add("hidden");
    cargarReservas();
}

async function eliminar(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarReservas();
}

function editar(id) {
    alert("Implementar modal de editar (si quieres te lo hago).");
}
