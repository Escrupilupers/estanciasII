// assets/js/dash.js

// Modelo de datos
const PracticeModel = {
    practices: [
        {
            id: 1,
            date: '2024-07-14',
            name: 'Laboratorio MAC',
            subject: 'Programación Concurrente',
            objective: 'Práctica de programación concurrente en sistemas MAC',
            duration: '2',
            lab: 'Laboratorio 3A',
            status: 'programada'
        },
        {
            id: 2,
            date: '2024-07-14',
            name: 'Laboratorio Linux',
            subject: 'Sistemas Operativos',
            objective: 'Administración de sistemas Linux',
            duration: '3',
            lab: 'Laboratorio 2B',
            status: 'confirmada'
        },
        {
            id: 3,
            date: '2024-07-14',
            name: 'Laboratorio Windows',
            subject: 'Programación I',
            objective: 'Desarrollo de aplicaciones en entorno Windows',
            duration: '2',
            lab: 'Laboratorio 4C',
            status: 'en-curso'
        },
        {
            id: 4,
            date: '2024-07-14',
            name: 'Laboratorio Windows',
            subject: 'Liderazgo eq. Alto desempeño',
            objective: 'Simulación de situaciones de liderazgo',
            duration: '4',
            lab: 'Laboratorio 1D',
            status: 'cancelada'
        },
        {
            id: 5,
            date: '2024-07-14',
            name: 'Laboratorio Windows',
            subject: 'Liderazgo eq. Alto desempeño',
            objective: 'Análisis de casos de estudio',
            duration: '2',
            lab: 'Laboratorio 1D',
            status: 'completada'
        }
    ],

    getAllPractices() {
        return this.practices;
    },

    getPracticeById(id) {
        return this.practices.find(practice => practice.id === parseInt(id));
    },

    addPractice(practice) {
        const newId = this.practices.length > 0 ? Math.max(...this.practices.map(p => p.id)) + 1 : 1;
        practice.id = newId;
        this.practices.push(practice);
        return practice;
    },

    updatePractice(id, updatedPractice) {
        const index = this.practices.findIndex(practice => practice.id === parseInt(id));
        if (index !== -1) {
            this.practices[index] = { ...this.practices[index], ...updatedPractice };
            return this.practices[index];
        }
        return null;
    },

    deletePractice(id) {
        const index = this.practices.findIndex(practice => practice.id === parseInt(id));
        if (index !== -1) {
            return this.practices.splice(index, 1)[0];
        }
        return null;
    }
};

// Controlador
const DashboardController = {
    init() {
        this.bindEvents();
        this.loadInitialData();
        this.checkThemePreference();
    },

    bindEvents() {
        console.log('Inicializando eventos...');
        
        // Menú móvil
        this.safeAddEventListener('mobile-menu-btn', 'click', this.openMobileMenu.bind(this));
        this.safeAddEventListener('close-mobile-menu', 'click', this.closeMobileMenu.bind(this));
        this.safeAddEventListener('mobile-menu-overlay', 'click', this.closeMobileMenu.bind(this));
        this.safeAddEventListener('mobile-logout-btn', 'click', () => {
            this.closeMobileMenu();
            this.openLogoutModal();
        });

        // Botones de tema
        this.safeAddEventListener('theme-toggle', 'click', this.toggleTheme.bind(this));
        this.safeAddEventListener('theme-toggle-mobile', 'click', this.toggleTheme.bind(this));

        // Botones principales - CORREGIDOS
        this.safeAddEventListener('new-practice-btn', 'click', () => {
            console.log('Botón nueva práctica clickeado');
            this.openNewPracticeModal();
        });
        
        this.safeAddEventListener('logout-btn', 'click', () => {
            this.openLogoutModal();
        });

        // Botones de prácticas
        this.bindPracticeButtons();

        // Modales
        this.bindModalEvents();
    },

    safeAddEventListener(elementId, event, handler) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(event, handler);
            console.log(`Evento ${event} agregado a ${elementId}`);
        } else {
            console.warn(`Elemento ${elementId} no encontrado`);
        }
    },

    bindPracticeButtons() {
        console.log('Vinculando botones de prácticas...');
        
        // Botones Editar Práctica
        document.querySelectorAll('.edit-practice-btn').forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón editar clickeado:', index);
                const practices = PracticeModel.getAllPractices();
                if (practices[index]) {
                    this.openEditPracticeModal(practices[index]);
                }
            });
        });

        // Botones Eliminar Práctica
        document.querySelectorAll('.delete-practice-btn').forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón eliminar clickeado:', index);
                const practices = PracticeModel.getAllPractices();
                if (practices[index]) {
                    this.openDeletePracticeModal(practices[index].id);
                }
            });
        });
    },

    bindModalEvents() {
        console.log('Vinculando eventos de modales...');
        
        // Cerrar modales con botones
        this.safeAddEventListener('close-new-modal', 'click', () => this.closeModal('new-practice-modal'));
        this.safeAddEventListener('close-edit-modal', 'click', () => this.closeModal('edit-modal'));
        this.safeAddEventListener('close-delete-modal', 'click', () => this.closeModal('delete-modal'));
        this.safeAddEventListener('close-logout-modal', 'click', () => this.closeModal('logout-modal'));

        this.safeAddEventListener('cancel-new', 'click', () => this.closeModal('new-practice-modal'));
        this.safeAddEventListener('cancel-edit', 'click', () => this.closeModal('edit-modal'));
        this.safeAddEventListener('cancel-delete', 'click', () => this.closeModal('delete-modal'));
        this.safeAddEventListener('cancel-logout', 'click', () => this.closeModal('logout-modal'));

        // Cerrar modales al hacer clic fuera
        ['new-practice-modal', 'edit-modal', 'delete-modal', 'logout-modal'].forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.closeModal(modalId);
                    }
                });
            }
        });

        // Formularios - CORREGIDOS
        const newPracticeForm = document.getElementById('new-practice-form');
        if (newPracticeForm) {
            newPracticeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewPracticeSubmit(e);
            });
        }

        const editPracticeForm = document.getElementById('edit-practice-form');
        if (editPracticeForm) {
            editPracticeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleEditPracticeSubmit(e);
            });
        }
        
        // Botones de confirmación - CORREGIDOS
        const confirmDeleteBtn = document.getElementById('confirm-delete');
        if (confirmDeleteBtn) {
            confirmDeleteBtn.addEventListener('click', () => {
                console.log('Confirmar eliminación clickeado');
                this.handleDeletePractice();
            });
        }

        const confirmLogoutBtn = document.getElementById('confirm-logout');
        if (confirmLogoutBtn) {
            confirmLogoutBtn.addEventListener('click', () => {
                this.handleLogout();
            });
        }
    },

    loadInitialData() {
        console.log('Datos iniciales cargados');
    },

    // Menú móvil
    openMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        if (mobileMenu && overlay) {
            mobileMenu.classList.add('open');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    },

    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        if (mobileMenu && overlay) {
            mobileMenu.classList.remove('open');
            overlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    },

    // Tema
    toggleTheme() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        
        const themeIcons = document.querySelectorAll('#theme-icon, #theme-icon-mobile');
        themeIcons.forEach(icon => {
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    },

    checkThemePreference() {
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
            const themeIcons = document.querySelectorAll('#theme-icon, #theme-icon-mobile');
            themeIcons.forEach(icon => {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            });
        }
    },

    // Modales
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log(`Abriendo modal: ${modalId}`);
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            console.error(`Modal ${modalId} no encontrado`);
        }
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    },

    openNewPracticeModal() {
        console.log('Abriendo modal de nueva práctica');
        this.openModal('new-practice-modal');
    },

    openEditPracticeModal(practice) {
        if (practice) {
            console.log('Abriendo modal de edición para práctica:', practice.id);
            document.getElementById('edit-practice-id').value = practice.id;
            document.getElementById('edit-practice-date').value = practice.date;
            document.getElementById('edit-practice-name').value = practice.name;
            document.getElementById('edit-practice-subject').value = practice.subject;
            document.getElementById('edit-practice-objective').value = practice.objective;
            document.getElementById('edit-practice-duration').value = practice.duration;
            document.getElementById('edit-practice-lab').value = practice.lab;
            document.getElementById('edit-practice-status').value = practice.status;
            
            this.openModal('edit-modal');
        }
    },

    openDeletePracticeModal(practiceId) {
        console.log('Abriendo modal de eliminación para práctica:', practiceId);
        const confirmButton = document.getElementById('confirm-delete');
        if (confirmButton) {
            confirmButton.setAttribute('data-id', practiceId);
            this.openModal('delete-modal');
        }
    },

    openLogoutModal() {
        console.log('Abriendo modal de logout');
        this.openModal('logout-modal');
    },

    // Manejo de formularios
    handleNewPracticeSubmit(e) {
        console.log('Enviando formulario de nueva práctica');
        
        const formData = {
            date: document.getElementById('new-practice-date').value,
            name: document.getElementById('new-practice-name').value,
            subject: document.getElementById('new-practice-subject').value,
            objective: document.getElementById('new-practice-objective').value,
            duration: document.getElementById('new-practice-duration').value,
            lab: document.getElementById('new-practice-lab').value,
            status: document.getElementById('new-practice-status').value
        };

        console.log('Datos del formulario:', formData);

        // Validación básica
        if (!formData.date || !formData.name || !formData.subject) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }

        // Aquí enviarías los datos al servidor
        PracticeModel.addPractice(formData);
        
        this.closeModal('new-practice-modal');
        this.showSuccessMessage('¡Práctica creada exitosamente!');
        
        // Limpiar formulario
        e.target.reset();
    },

    handleEditPracticeSubmit(e) {
        console.log('Enviando formulario de edición');
        
        const practiceId = document.getElementById('edit-practice-id').value;
        const formData = {
            date: document.getElementById('edit-practice-date').value,
            name: document.getElementById('edit-practice-name').value,
            subject: document.getElementById('edit-practice-subject').value,
            objective: document.getElementById('edit-practice-objective').value,
            duration: document.getElementById('edit-practice-duration').value,
            lab: document.getElementById('edit-practice-lab').value,
            status: document.getElementById('edit-practice-status').value
        };

        console.log('Editando práctica:', practiceId, formData);

        // Aquí enviarías los datos al servidor
        PracticeModel.updatePractice(practiceId, formData);
        
        this.closeModal('edit-modal');
        this.showSuccessMessage('¡Práctica actualizada exitosamente!');
    },

    handleDeletePractice() {
        const confirmButton = document.getElementById('confirm-delete');
        if (confirmButton) {
            const practiceId = confirmButton.getAttribute('data-id');
            console.log('Eliminando práctica:', practiceId);
            
            // Aquí enviarías la solicitud de eliminación al servidor
            const deletedPractice = PracticeModel.deletePractice(practiceId);
            
            if (deletedPractice) {
                this.closeModal('delete-modal');
                this.showSuccessMessage('¡Práctica eliminada exitosamente!');
            } else {
                alert('Error al eliminar la práctica');
            }
        }
    },

    handleLogout() {
        // Aquí redirigirías al usuario a la página de login
        console.log('Cerrando sesión...');
        if (confirm('¿Está seguro de que desea cerrar sesión?')) {
            // window.location.href = 'login.html';
            alert('Redirigiendo al login... (simulación)');
        }
    },

    showSuccessMessage(message) {
        const successMessage = document.getElementById('success-message');
        const successText = document.getElementById('success-text');
        
        if (successMessage && successText) {
            successText.textContent = message;
            successMessage.classList.remove('hidden');
            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        }
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando controlador...');
    DashboardController.init();
});