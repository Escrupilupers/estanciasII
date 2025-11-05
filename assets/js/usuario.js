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
        const newId = Math.max(...this.practices.map(p => p.id)) + 1;
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
        // Menú móvil
        document.getElementById('mobile-menu-btn').addEventListener('click', this.openMobileMenu.bind(this));
        document.getElementById('close-mobile-menu').addEventListener('click', this.closeMobileMenu.bind(this));
        document.getElementById('mobile-menu-overlay').addEventListener('click', this.closeMobileMenu.bind(this));
        document.getElementById('mobile-logout-btn').addEventListener('click', () => {
            this.closeMobileMenu();
            this.openLogoutModal();
        });

        // Botones de tema
        document.getElementById('theme-toggle').addEventListener('click', this.toggleTheme.bind(this));
        document.getElementById('theme-toggle-mobile').addEventListener('click', this.toggleTheme.bind(this));

        // Botones principales
        document.getElementById('new-practice-btn').addEventListener('click', this.openNewPracticeModal.bind(this));
        document.getElementById('logout-btn').addEventListener('click', this.openLogoutModal.bind(this));

        // Botones de prácticas
        this.bindPracticeButtons();

        // Modales
        this.bindModalEvents();
    },

    bindPracticeButtons() {
        // Botones Editar Práctica
        document.querySelectorAll('.edit-practice-btn').forEach((button, index) => {
            button.addEventListener('click', () => {
                const practice = PracticeModel.getAllPractices()[index];
                this.openEditPracticeModal(practice);
            });
        });

        // Botones Eliminar Práctica
        document.querySelectorAll('.delete-practice-btn').forEach((button, index) => {
            button.addEventListener('click', () => {
                const practice = PracticeModel.getAllPractices()[index];
                this.openDeletePracticeModal(practice.id);
            });
        });
    },

    bindModalEvents() {
        // Cerrar modales con botones
        document.getElementById('close-new-modal').addEventListener('click', () => this.closeModal('new-practice-modal'));
        document.getElementById('close-edit-modal').addEventListener('click', () => this.closeModal('edit-modal'));
        document.getElementById('close-delete-modal').addEventListener('click', () => this.closeModal('delete-modal'));
        document.getElementById('close-logout-modal').addEventListener('click', () => this.closeModal('logout-modal'));

        document.getElementById('cancel-new').addEventListener('click', () => this.closeModal('new-practice-modal'));
        document.getElementById('cancel-edit').addEventListener('click', () => this.closeModal('edit-modal'));
        document.getElementById('cancel-delete').addEventListener('click', () => this.closeModal('delete-modal'));
        document.getElementById('cancel-logout').addEventListener('click', () => this.closeModal('logout-modal'));

        // Cerrar modales al hacer clic fuera
        ['new-practice-modal', 'edit-modal', 'delete-modal', 'logout-modal'].forEach(modalId => {
            const modal = document.getElementById(modalId);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modalId);
                }
            });
        });

        // Formularios
        document.getElementById('new-practice-form').addEventListener('submit', this.handleNewPracticeSubmit.bind(this));
        document.getElementById('edit-practice-form').addEventListener('submit', this.handleEditPracticeSubmit.bind(this));
        document.getElementById('confirm-delete').addEventListener('click', this.handleDeletePractice.bind(this));
        document.getElementById('confirm-logout').addEventListener('click', this.handleLogout.bind(this));
    },

    loadInitialData() {
        // Aquí podrías cargar datos iniciales desde el servidor
        console.log('Datos iniciales cargados');
    },

    // Menú móvil
    openMobileMenu() {
        document.getElementById('mobile-menu').classList.add('open');
        document.getElementById('mobile-menu-overlay').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    },

    closeMobileMenu() {
        document.getElementById('mobile-menu').classList.remove('open');
        document.getElementById('mobile-menu-overlay').classList.add('hidden');
        document.body.style.overflow = 'auto';
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
        document.getElementById(modalId).classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        document.body.style.overflow = 'auto';
    },

    openNewPracticeModal() {
        this.openModal('new-practice-modal');
    },

    openEditPracticeModal(practice) {
        document.getElementById('edit-practice-id').value = practice.id;
        document.getElementById('edit-practice-date').value = practice.date;
        document.getElementById('edit-practice-name').value = practice.name;
        document.getElementById('edit-practice-subject').value = practice.subject;
        document.getElementById('edit-practice-objective').value = practice.objective;
        document.getElementById('edit-practice-duration').value = practice.duration;
        document.getElementById('edit-practice-lab').value = practice.lab;
        document.getElementById('edit-practice-status').value = practice.status;
        
        this.openModal('edit-modal');
    },

    openDeletePracticeModal(practiceId) {
        document.getElementById('confirm-delete').setAttribute('data-id', practiceId);
        this.openModal('delete-modal');
    },

    openLogoutModal() {
        this.openModal('logout-modal');
    },

    // Manejo de formularios
    handleNewPracticeSubmit(e) {
        e.preventDefault();
        
        const formData = {
            date: document.getElementById('new-practice-date').value,
            name: document.getElementById('new-practice-name').value,
            subject: document.getElementById('new-practice-subject').value,
            objective: document.getElementById('new-practice-objective').value,
            duration: document.getElementById('new-practice-duration').value,
            lab: document.getElementById('new-practice-lab').value,
            status: document.getElementById('new-practice-status').value
        };

        // Aquí enviarías los datos al servidor
        PracticeModel.addPractice(formData);
        
        this.closeModal('new-practice-modal');
        this.showSuccessMessage('¡Práctica creada exitosamente!');
        
        // Limpiar formulario
        e.target.reset();
    },

    handleEditPracticeSubmit(e) {
        e.preventDefault();
        
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

        // Aquí enviarías los datos al servidor
        PracticeModel.updatePractice(practiceId, formData);
        
        this.closeModal('edit-modal');
        this.showSuccessMessage('¡Práctica actualizada exitosamente!');
    },

    handleDeletePractice() {
        const practiceId = this.getAttribute('data-id');
        
        // Aquí enviarías la solicitud de eliminación al servidor
        PracticeModel.deletePractice(practiceId);
        
        this.closeModal('delete-modal');
        this.showSuccessMessage('¡Práctica eliminada exitosamente!');
    },

    handleLogout() {
        // Aquí redirigirías al usuario a la página de login
        console.log('Cerrando sesión...');
        window.location.href = 'login.html';
    },

    showSuccessMessage(message) {
        const successMessage = document.getElementById('success-message');
        const successText = document.getElementById('success-text');
        
        successText.textContent = message;
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    DashboardController.init();
});