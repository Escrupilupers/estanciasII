document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const userInitialsBtn = document.getElementById('user-initials-btn');
    const newPracticeBtn = document.getElementById('new-practice-btn');

    function setupHamburgerMenu() {
        if (hamburgerMenu && mobileMenu) {
            hamburgerMenu.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                hamburgerMenu.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic fuera de él
            document.addEventListener('click', function(event) {
                if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
                    mobileMenu.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
            });
        }
    }

    function setupUserInitialsModal() {
        if (userInitialsBtn) {
            userInitialsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                abrirModalCerrarSesion();
            });
        }
    }

    function setupModalEvents() {
        // Botones para abrir modales
        if (newPracticeBtn) {
            newPracticeBtn.addEventListener('click', function() {
                abrirModalNuevaPractica();
            });
        }

        // Botones para cerrar modales
        document.querySelectorAll('[id^="close-"], [id^="cancel-"]').forEach(button => {
            button.addEventListener('click', function() {
                const modalId = this.closest('.fixed').id;
                cerrarModal(modalId);
            });
        });

        // Cerrar modales al hacer clic fuera
        document.querySelectorAll('.fixed').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    cerrarModal(modal.id);
                }
            });
        });

        // Formularios
        const newPracticeForm = document.getElementById('new-practice-form');
        if (newPracticeForm) {
            newPracticeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                guardarNuevaPractica();
            });
        }

        const editPracticeForm = document.getElementById('edit-practice-form');
        if (editPracticeForm) {
            editPracticeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                guardarEdicionPractica();
            });
        }

        // Botones de confirmación
        const confirmDeleteBtn = document.getElementById('confirm-delete');
        if (confirmDeleteBtn) {
            confirmDeleteBtn.addEventListener('click', function() {
                confirmarEliminarPractica();
            });
        }

        const confirmLogoutBtn = document.getElementById('confirm-logout');
        if (confirmLogoutBtn) {
            confirmLogoutBtn.addEventListener('click', function() {
                confirmarCerrarSesion();
            });
        }

        // Botones de editar y eliminar en la tabla
        document.querySelectorAll('.edit-practice-btn').forEach((button, index) => {
            button.addEventListener('click', function() {
                abrirModalEditarPractica(index + 1);
            });
        });

        document.querySelectorAll('.delete-practice-btn').forEach((button, index) => {
            button.addEventListener('click', function() {
                abrirModalEliminarPractica(index + 1);
            });
        });
    }

    function mostrarPerfil() {
        alert('Mostrando perfil del usuario');
        mobileMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }

    // Funciones para abrir modales
    function abrirModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function cerrarModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    function abrirModalCerrarSesion() {
        abrirModal('logout-modal');
    }

    function abrirModalNuevaPractica() {
        abrirModal('new-practice-modal');
    }

    function abrirModalEditarPractica(id) {
        // Aquí cargarías los datos de la práctica con el ID
        console.log('Editando práctica con ID:', id);
        abrirModal('edit-modal');
    }

    function abrirModalEliminarPractica(id) {
        // Aquí configurarías el ID de la práctica a eliminar
        console.log('Eliminando práctica con ID:', id);
        abrirModal('delete-modal');
    }

    // Funciones de confirmación
    function confirmarCerrarSesion() {
        if (confirm('¿Está seguro de que desea cerrar sesión?')) {
            alert('Sesión cerrada - Redirigiendo al login...');
            // window.location.href = 'login.html';
            cerrarModal('logout-modal');
        }
    }

    function guardarNuevaPractica() {
        alert('Nueva práctica guardada exitosamente!');
        cerrarModal('new-practice-modal');
        document.getElementById('success-text').textContent = '¡Práctica creada exitosamente!';
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('success-message').classList.add('hidden');
        }, 3000);
    }

    function guardarEdicionPractica() {
        alert('Práctica actualizada exitosamente!');
        cerrarModal('edit-modal');
        document.getElementById('success-text').textContent = '¡Práctica actualizada exitosamente!';
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('success-message').classList.add('hidden');
        }, 3000);
    }

    function confirmarEliminarPractica() {
        alert('Práctica eliminada exitosamente!');
        cerrarModal('delete-modal');
        document.getElementById('success-text').textContent = '¡Práctica eliminada exitosamente!';
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('success-message').classList.add('hidden');
        }, 3000);
    }

    // Hacer las funciones globales
    window.mostrarPerfil = mostrarPerfil;
    window.abrirModalCerrarSesion = abrirModalCerrarSesion;
    window.cerrarModalCerrarSesion = () => cerrarModal('logout-modal');
    window.confirmarCerrarSesion = confirmarCerrarSesion;

    setupHamburgerMenu();
    setupUserInitialsModal();
    setupModalEvents();
});