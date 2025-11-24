// Estado de configuración
const appSettings = {
    darkMode: true,
    emailNotifications: true,
    language: 'es'
};

// Diccionario de traducciones
const translations = {
    es: {
        // Header
        "header.admin": "Administrador",
        
        // Menú
        "menu.title": "Menú",
        "menu.dashboard": "Dashboard",
        "menu.practices": "Prácticas",
        "menu.agenda": "Agenda",
        "menu.users": "Usuarios",
        "menu.reports": "Reportes",
        "menu.settings": "Configuración",
        "menu.profile": "Perfil",
        "menu.logout": "Cerrar Sesión",
        
        // Universidad
        "university.line1": "Universidad Politécnica de",
        "university.line2": "Durango",
        
        // Dashboard
        "dashboard.title": "Dashboard de Administración",
        "dashboard.totalPractices": "Total Prácticas",
        "dashboard.monthPractices": "Prácticas Este Mes",
        "dashboard.professors": "Profesores",
        "dashboard.subjects": "Asignaturas",
        "dashboard.stats.increase": "12% más que el mes pasado",
        "dashboard.stats.weeklyIncrease": "5% más que la semana pasada",
        "dashboard.stats.noChanges": "Sin cambios",
        "dashboard.stats.newThisMonth": "2 nuevas este mes",
        "dashboard.recentActivities": "Actividad Reciente",
        "dashboard.upcomingPractices": "Próximas Prácticas",
        
        // Prácticas
        "practices.title": "Gestión de Prácticas",
        "practices.newPractice": "Nueva Práctica",
        "practices.filterByProfessor": "Filtrar por profesor",
        "practices.filterByStatus": "Filtrar por estado",
        "practices.table.date": "FECHA",
        "practices.table.practice": "PRÁCTICA",
        "practices.table.professor": "PROFESOR",
        "practices.table.subject": "ASIGNATURA",
        "practices.table.status": "ESTADO",
        "practices.table.actions": "ACCIONES",
        "practices.practices": "prácticas",
        "practices.form.date": "Fecha de Práctica",
        "practices.form.name": "Nombre de Práctica",
        "practices.form.professor": "Profesor",
        "practices.form.selectProfessor": "Seleccione un profesor",
        "practices.form.subject": "Asignatura",
        "practices.form.selectSubject": "Seleccione una asignatura",
        "practices.form.objective": "Objetivo de la Práctica",
        "practices.form.lab": "Laboratorio / Aula",
        "practices.form.status": "Estado",
        "practices.editPractice": "Editar Práctica",
        "practices.confirmDelete": "Confirmar Eliminación",
        "practices.deleteConfirmation": "¿Está seguro de eliminar esta práctica?",
        "practices.deleteWarning": "Esta acción no se puede deshacer.",
        "practices.deletePractice": "Eliminar Práctica",
        
        // Agenda
        "agenda.title": "Agenda - Disponibilidad",
        "agenda.weeklyAvailability": "Disponibilidad Semanal",
        "agenda.occupied": "Ocupado",
        "agenda.available": "Disponible",
        "agenda.timeDay": "Hora/Día",
        "agenda.description": "La tabla muestra la disponibilidad de los laboratorios para la semana actual.",
        
        // Días de la semana
        "days.monday": "Lunes",
        "days.tuesday": "Martes",
        "days.wednesday": "Miércoles",
        "days.thursday": "Jueves",
        "days.friday": "Viernes",
        
        // Estados
        "status.scheduled": "Programada",
        "status.confirmed": "Confirmada",
        "status.inProgress": "En curso",
        "status.completed": "Completada",
        "status.cancelled": "Cancelada",
        "status.active": "Activo",
        "status.inactive": "Inactivo",
        
        // Usuarios
        "users.title": "Gestión de Usuarios",
        "users.addUser": "Agregar Usuario",
        "users.table.user": "Usuario",
        "users.table.role": "Rol",
        "users.table.email": "Correo",
        "users.table.status": "Estado",
        "users.table.lastAccess": "Último Acceso",
        "users.table.actions": "Acciones",
        "users.editUser": "Editar Usuario",
        "users.confirmDelete": "Confirmar Eliminación",
        "users.deleteConfirmation": "¿Está seguro de eliminar este usuario?",
        "users.deleteWarning": "Esta acción no se puede deshacer.",
        "users.deleteUser": "Eliminar Usuario",
        "users.form.fullName": "Nombre Completo",
        "users.form.username": "Usuario",
        "users.form.email": "Correo Electrónico",
        "users.form.role": "Rol",
        "users.form.selectRole": "Seleccione un rol",
        "users.form.status": "Estado",
        
        // Reportes
        "reports.title": "Reportes de Prácticas",
        "reports.exportReport": "Exportar Reporte",
        "reports.table.objective": "OBJETIVO",
        
        // Configuración
        "settings.title": "Configuración del Sistema",
        "settings.preferences": "Preferencias",
        "settings.darkMode": "Modo Oscuro",
        "settings.darkModeDescription": "Activar/desactivar el modo oscuro",
        "settings.emailNotifications": "Notificaciones por Email",
        "settings.emailNotificationsDescription": "Recibir notificaciones por correo electrónico",
        "settings.language": "Idioma",
        "settings.saveSettings": "Guardar Configuración",
        
        // Común
        "common.search": "Buscar",
        "common.all": "Todos",
        "common.reset": "Restablecer",
        "common.exportPDF": "Exportar PDF",
        "common.showing": "Mostrando",
        "common.of": "de",
        "common.cancel": "Cancelar",
        "common.saveChanges": "Guardar Cambios",
        
        // Roles
        "roles.admin": "Administrador",
        "roles.teacher": "Profesor",
        "roles.student": "Estudiante",
        
        // Logout
        "logout.confirmation": "¿Está seguro de que desea cerrar sesión?"
    },
    en: {
        // Header
        "header.admin": "Administrator",
        
        // Menú
        "menu.title": "Menu",
        "menu.dashboard": "Dashboard",
        "menu.practices": "Practices",
        "menu.agenda": "Agenda",
        "menu.users": "Users",
        "menu.reports": "Reports",
        "menu.settings": "Settings",
        "menu.profile": "Profile",
        "menu.logout": "Logout",
        
        // Universidad
        "university.line1": "Polytechnic University of",
        "university.line2": "Durango",
        
        // Dashboard
        "dashboard.title": "Administration Dashboard",
        "dashboard.totalPractices": "Total Practices",
        "dashboard.monthPractices": "This Month Practices",
        "dashboard.professors": "Professors",
        "dashboard.subjects": "Subjects",
        "dashboard.stats.increase": "12% more than last month",
        "dashboard.stats.weeklyIncrease": "5% more than last week",
        "dashboard.stats.noChanges": "No changes",
        "dashboard.stats.newThisMonth": "2 new this month",
        "dashboard.recentActivities": "Recent Activities",
        "dashboard.upcomingPractices": "Upcoming Practices",
        
        // Prácticas
        "practices.title": "Practice Management",
        "practices.newPractice": "New Practice",
        "practices.filterByProfessor": "Filter by professor",
        "practices.filterByStatus": "Filter by status",
        "practices.table.date": "DATE",
        "practices.table.practice": "PRACTICE",
        "practices.table.professor": "PROFESSOR",
        "practices.table.subject": "SUBJECT",
        "practices.table.status": "STATUS",
        "practices.table.actions": "ACTIONS",
        "practices.practices": "practices",
        "practices.form.date": "Practice Date",
        "practices.form.name": "Practice Name",
        "practices.form.professor": "Professor",
        "practices.form.selectProfessor": "Select a professor",
        "practices.form.subject": "Subject",
        "practices.form.selectSubject": "Select a subject",
        "practices.form.objective": "Practice Objective",
        "practices.form.lab": "Laboratory / Classroom",
        "practices.form.status": "Status",
        "practices.editPractice": "Edit Practice",
        "practices.confirmDelete": "Confirm Deletion",
        "practices.deleteConfirmation": "Are you sure you want to delete this practice?",
        "practices.deleteWarning": "This action cannot be undone.",
        "practices.deletePractice": "Delete Practice",
        
        // Agenda
        "agenda.title": "Agenda - Availability",
        "agenda.weeklyAvailability": "Weekly Availability",
        "agenda.occupied": "Occupied",
        "agenda.available": "Available",
        "agenda.timeDay": "Time/Day",
        "agenda.description": "The table shows laboratory availability for the current week.",
        
        // Días de la semana
        "days.monday": "Monday",
        "days.tuesday": "Tuesday",
        "days.wednesday": "Wednesday",
        "days.thursday": "Thursday",
        "days.friday": "Friday",
        
        // Estados
        "status.scheduled": "Scheduled",
        "status.confirmed": "Confirmed",
        "status.inProgress": "In Progress",
        "status.completed": "Completed",
        "status.cancelled": "Cancelled",
        "status.active": "Active",
        "status.inactive": "Inactive",
        
        // Usuarios
        "users.title": "User Management",
        "users.addUser": "Add User",
        "users.table.user": "User",
        "users.table.role": "Role",
        "users.table.email": "Email",
        "users.table.status": "Status",
        "users.table.lastAccess": "Last Access",
        "users.table.actions": "Actions",
        "users.editUser": "Edit User",
        "users.confirmDelete": "Confirm Deletion",
        "users.deleteConfirmation": "Are you sure you want to delete this user?",
        "users.deleteWarning": "This action cannot be undone.",
        "users.deleteUser": "Delete User",
        "users.form.fullName": "Full Name",
        "users.form.username": "Username",
        "users.form.email": "Email",
        "users.form.role": "Role",
        "users.form.selectRole": "Select a role",
        "users.form.status": "Status",
        
        // Reportes
        "reports.title": "Practice Reports",
        "reports.exportReport": "Export Report",
        "reports.table.objective": "OBJECTIVE",
        
        // Configuración
        "settings.title": "System Settings",
        "settings.preferences": "Preferences",
        "settings.darkMode": "Dark Mode",
        "settings.darkModeDescription": "Enable/disable dark mode",
        "settings.emailNotifications": "Email Notifications",
        "settings.emailNotificationsDescription": "Receive email notifications",
        "settings.language": "Language",
        "settings.saveSettings": "Save Settings",
        
        // Común
        "common.search": "Search",
        "common.all": "All",
        "common.reset": "Reset",
        "common.exportPDF": "Export PDF",
        "common.showing": "Showing",
        "common.of": "of",
        "common.cancel": "Cancel",
        "common.saveChanges": "Save Changes",
        
        // Roles
        "roles.admin": "Administrator",
        "roles.teacher": "Professor",
        "roles.student": "Student",
        
        // Logout
        "logout.confirmation": "Are you sure you want to log out?"
    }
};

// Datos de ejemplo actualizados para la tabla de prácticas - CORREGIDOS
let practiceData = [
    { 
        id: 1, 
        date: '2024-01-15', // Lunes
        practice: 'Laboratorio MAC', 
        professor: 'Dr. Fued', 
        subject: 'Programación Concurrente', 
        status: 'programada', 
        time: '7:00',
        objective: 'Programación de hilos en web.',
        lab: 'Laboratorio 3A'
    },
    { 
        id: 2, 
        date: '2024-01-15', // Lunes
        practice: 'Laboratorio Linux', 
        professor: 'Prof. Estefano', 
        subject: 'Sistemas Operativos', 
        status: 'confirmada', 
        time: '9:00',
        objective: 'Instalación de un sistema operativo dual.',
        lab: 'Laboratorio 2B'
    },
    { 
        id: 3, 
        date: '2024-01-16', // Martes
        practice: 'Laboratorio Windows', 
        professor: 'Prof. Ricardo', 
        subject: 'Programación I', 
        status: 'en-curso', 
        time: '11:00',
        objective: 'Instalación de un sistema operativo dual.',
        lab: 'Laboratorio 1C'
    },
    { 
        id: 4, 
        date: '2024-01-17', // Miércoles
        practice: 'Laboratorio Windows', 
        professor: 'Prof. Valeria', 
        subject: 'Liderazgo eq. Alto desempeño', 
        status: 'cancelada', 
        time: '14:00',
        objective: 'Examen de conocimientos.',
        lab: 'Aula 4'
    },
    { 
        id: 5, 
        date: '2024-01-18', // Jueves
        practice: 'Laboratorio Windows', 
        professor: 'Prof. Valeria', 
        subject: 'Liderazgo eq. Alto desempeño', 
        status: 'completada', 
        time: '16:00',
        objective: 'En cuesta de...',
        lab: 'Aula 4'
    }
];

// Datos de ejemplo para usuarios
let usersData = [
    { id: 1, name: 'Administrador', username: 'admin', email: 'admin@universidad.edu', role: 'Administrador', status: 'Activo', lastAccess: 'Hoy, 10:30 AM' }
];

// Datos de ejemplo para reportes
let reportsData = [
    { id: 1, date: '2024-01-15', practice: 'Laboratorio MAC', objective: 'Programación de hilos en web.', professor: 'Dr. Fued', subject: 'Programación Concurrente' },
    { id: 2, date: '2024-01-15', practice: 'Laboratorio Linux', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Estefano', subject: 'Sistemas Operativos' },
    { id: 3, date: '2024-01-16', practice: 'Laboratorio Windows', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Ricardo', subject: 'Programación I' },
    { id: 4, date: '2024-01-17', practice: 'Laboratorio Windows', objective: 'Examen de conocimientos.', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' },
    { id: 5, date: '2024-01-18', practice: 'Laboratorio Windows', objective: 'En cuesta de...', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' }
];

// Estado de la aplicación
let currentData = [...practiceData];
let currentReportsData = [...reportsData];
let sortColumn = 'date';
let sortDirection = 'asc';
let currentFilters = {
    search: '',
    professor: '',
    status: ''
};
let currentReportsFilters = {
    search: '',
    professor: '',
    status: ''
};

// Horarios ocupados para la agenda - CORREGIDO
let scheduleOccupancy = {};
// Slot temporal seleccionado - NUEVO
window.selectedTimeSlot = null;

// Funciones para el modal de cerrar sesión - ADAPTADAS DEL CÓDIGO MÁS PEQUEÑO
function abrirModalCerrarSesion() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Oscurecer el header
        document.getElementById('header-container').classList.add('modal-open');
    }
}

function cerrarModalCerrarSesion() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Restaurar el header
        document.getElementById('header-container').classList.remove('modal-open');
    }
}

function confirmarCerrarSesion() {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
        alert('Cerrando sesión...');
        // window.location.href = 'login.html';
        cerrarModalCerrarSesion();
    }
}

// Inicialización - CORREGIDA
document.addEventListener('DOMContentLoaded', function() {
    // Configurar listeners para el modal de cerrar sesión - ADAPTADO DEL CÓDIGO MÁS PEQUEÑO
    const closeLogoutModal = document.getElementById('close-logout-modal');
    const cancelLogout = document.getElementById('cancel-logout');
    const confirmLogout = document.getElementById('confirm-logout');
    const logoutModal = document.getElementById('logout-modal');
    
    if (closeLogoutModal) {
        closeLogoutModal.addEventListener('click', cerrarModalCerrarSesion);
    }
    if (cancelLogout) {
        cancelLogout.addEventListener('click', cerrarModalCerrarSesion);
    }
    if (confirmLogout) {
        confirmLogout.addEventListener('click', confirmarCerrarSesion);
    }
    if (logoutModal) {
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                cerrarModalCerrarSesion();
            }
        });
    }
    
    // Primero cargar configuración para aplicar modo oscuro e idioma
    loadSettings();
    
    // Luego inicializar el resto de la aplicación
    initializeDashboard();
    initializePracticesTable();
    initializeUsersTable();
    initializeReportsTable();
    setupEventListeners();
    updateResultsCount();
    updateReportsResultsCount();
    generateAgendaSchedule();
    
    // Configurar menú hamburguesa y modales del header
    setupHeaderFunctionality();
    setupUserModalListeners();
    setupModalListeners();
    
    // Configurar listeners de configuración
    setupSettingsListeners();
    
    // Mostrar Dashboard por defecto
    showView('dashboard-view');
    
    // Cargar las nuevas vistas de actividades y prácticas
    loadRecentActivities();
    loadUpcomingPractices();
});

// Cargar configuración guardada
function loadSettings() {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        appSettings.darkMode = settings.darkMode;
        appSettings.emailNotifications = settings.emailNotifications;
        appSettings.language = settings.language;
    }

    // Aplicar configuración
    applySettings();
}

// Aplicar configuración a la interfaz
function applySettings() {
    // Modo oscuro
    if (appSettings.darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Actualizar controles
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const emailNotificationsToggle = document.getElementById('email-notifications');
    const languageSelect = document.getElementById('language');
    
    if (darkModeToggle) darkModeToggle.checked = appSettings.darkMode;
    if (emailNotificationsToggle) emailNotificationsToggle.checked = appSettings.emailNotifications;
    if (languageSelect) languageSelect.value = appSettings.language;
    
    // Aplicar traducciones
    applyTranslations(appSettings.language);
}

// Aplicar traducciones
function applyTranslations(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}

// Configurar listeners de configuración
function setupSettingsListeners() {
    // Modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            appSettings.darkMode = this.checked;
            applySettings();
            saveSettings();
        });
    }

    // Notificaciones por email
    const emailNotificationsToggle = document.getElementById('email-notifications');
    if (emailNotificationsToggle) {
        emailNotificationsToggle.addEventListener('change', function() {
            appSettings.emailNotifications = this.checked;
            saveSettings();
        });
    }

    // Idioma
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            appSettings.language = this.value;
            applySettings();
            saveSettings();
        });
    }

    // Guardar configuración
    const saveSettingsBtn = document.getElementById('save-settings');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            saveSettings();
            showSuccessMessage('Configuración guardada correctamente');
        });
    }
}

// Guardar configuración
function saveSettings() {
    localStorage.setItem('appSettings', JSON.stringify(appSettings));
    
    // Aplicar cambios inmediatamente
    applySettings();
}

// Configurar funcionalidades del header
function setupHeaderFunctionality() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const userInitialsBtn = document.getElementById('user-initials-btn');

    // Menú hamburguesa
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

    // Botón de iniciales del usuario - QUITADA LA FUNCIÓN DE CERRAR SESIÓN
    if (userInitialsBtn) {
        userInitialsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Función eliminada - ya no abre el modal de cerrar sesión
            console.log("Inicial del usuario clickeada - función deshabilitada");
        });
    }
}

// Configurar listeners para modales de usuario
function setupUserModalListeners() {
    const addUserBtn = document.getElementById('add-user-btn');
    
    // Botón para agregar usuario
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            openNewUserModal();
        });
    }
}

// Abrir modal para nuevo usuario
function openNewUserModal() {
    // Limpiar el formulario
    document.getElementById('edit-user-form').reset();
    document.getElementById('edit-user-id').value = '';
    
    // Cambiar título del modal
    document.getElementById('edit-user-modal-title').textContent = 'Agregar Usuario';
    
    // Mostrar modal
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal para editar usuario
function openEditUserModal(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;
    
    // Llenar el formulario con los datos actuales
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-user-name').value = user.name;
    document.getElementById('edit-user-username').value = user.username;
    document.getElementById('edit-user-email').value = user.email;
    document.getElementById('edit-user-role').value = user.role;
    document.getElementById('edit-user-status').value = user.status;
    
    // Cambiar título del modal
    document.getElementById('edit-user-modal-title').textContent = 'Editar Usuario';
    
    // Mostrar modal
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal para eliminar usuario
function openDeleteUserModal(userId, userName) {
    // Llenar la información del usuario a eliminar
    document.getElementById('delete-user-id').value = userId;
    document.getElementById('delete-user-name').textContent = userName;
    document.getElementById('delete-user-details').textContent = `Usuario: ${userName}`;
    
    // Mostrar modal
    const deleteUserModal = document.getElementById('delete-user-modal');
    deleteUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Función para mostrar perfil
function mostrarPerfil() {
    alert('Perfil de usuario');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
}

// Cerrar menú móvil
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
}

// Hacer las funciones globales
window.mostrarPerfil = mostrarPerfil;
window.abrirModalCerrarSesion = abrirModalCerrarSesion;
window.cerrarModalCerrarSesion = cerrarModalCerrarSesion;
window.confirmarCerrarSesion = confirmarCerrarSesion;
window.closeMobileMenu = closeMobileMenu;

// Inicializar dashboard
function initializeDashboard() {
    updateDashboardStats();
    loadRecentActivities();
    loadUpcomingPractices();
}

// Actualizar estadísticas del dashboard
function updateDashboardStats() {
    // Actualizar total de prácticas
    document.getElementById('total-practices').textContent = practiceData.length;
    
    // Calcular prácticas del mes actual
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const monthPractices = practiceData.filter(practice => {
        const practiceDate = new Date(practice.date);
        return practiceDate.getMonth() + 1 === currentMonth && practiceDate.getFullYear() === currentYear;
    }).length;
    document.getElementById('month-practices').textContent = monthPractices;
    
    // Calcular número de profesores únicos
    const professors = [...new Set(practiceData.map(item => item.professor))];
    document.getElementById('total-professors').textContent = professors.length;
    
    // Calcular número de asignaturas únicas
    const subjects = [...new Set(practiceData.map(item => item.subject))];
    document.getElementById('total-subjects').textContent = subjects.length;
}

// === NUEVAS FUNCIONES PARA ACTIVIDADES RECIENTES Y PRÓXIMAS PRÁCTICAS ===

// Cargar Actividades Recientes (con nuevo diseño)
function loadRecentActivities() {
    const activitiesContainer = document.getElementById('recent-activities');
    if (!activitiesContainer) return;
    
    activitiesContainer.innerHTML = '';
    
    // Ordenar prácticas por fecha (más recientes primero)
    const sortedPractices = [...practiceData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    // Tomar las 4 más recientes
    const recentPractices = sortedPractices.slice(0, 4);
    
    if (recentPractices.length === 0) {
        activitiesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No hay actividad reciente</p>
            </div>
        `;
        return;
    }
    
    recentPractices.forEach(practice => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-item';
        activityDiv.setAttribute('data-practice-id', practice.id);
        
        // Determinar tipo de actividad basado en el estado
        let activityType, activityIcon, activityIconBg;
        
        switch(practice.status) {
            case 'programada':
                activityType = 'Nueva práctica programada';
                activityIcon = 'fas fa-plus-circle';
                activityIconBg = 'bg-blue-100 text-blue-600';
                break;
            case 'confirmada':
                activityType = 'Práctica Confirmada';
                activityIcon = 'fas fa-check-circle';
                activityIconBg = 'bg-green-100 text-green-600';
                break;
            case 'en-curso':
                activityType = 'Práctica en Curso';
                activityIcon = 'fas fa-play-circle';
                activityIconBg = 'bg-yellow-100 text-yellow-600';
                break;
            case 'completada':
                activityType = 'Práctica Completada';
                activityIcon = 'fas fa-flag-checkered';
                activityIconBg = 'bg-gray-100 text-gray-600';
                break;
            case 'cancelada':
                activityType = 'Práctica Cancelada';
                activityIcon = 'fas fa-exclamation-triangle';
                activityIconBg = 'bg-red-100 text-red-600';
                break;
            default:
                activityType = 'Actividad de Práctica';
                activityIcon = 'fas fa-laptop-code';
                activityIconBg = 'bg-primary-100 text-primary-600';
        }
        
        // Calcular tiempo relativo
        const practiceDate = new Date(practice.date);
        const now = new Date();
        const diffTime = Math.abs(now - practiceDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let timeText = '';
        
        if (diffDays === 1) {
            timeText = 'Hoy';
        } else if (diffDays === 2) {
            timeText = 'Ayer';
        } else if (diffDays <= 7) {
            timeText = `Hace ${diffDays - 1} días`;
        } else {
            timeText = formatDate(practice.date);
        }
        
        activityDiv.innerHTML = `
            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activityIconBg}">
                <i class="${activityIcon} text-sm"></i>
            </div>
            <div class="activity-content">
                <p class="activity-title">${activityType}</p>
                <p class="activity-detail">${practice.practice} - ${practice.professor}</p>
                <p class="activity-time">${timeText}</p>
            </div>
        `;
        
        // Agregar evento click para abrir detalles
        activityDiv.addEventListener('click', function() {
            openEditModal(practice.id);
        });
        
        activitiesContainer.appendChild(activityDiv);
    });
}

// Cargar Próximas Prácticas (con nuevo diseño adaptado)
function loadUpcomingPractices() {
    const upcomingContainer = document.getElementById('upcoming-practices');
    if (!upcomingContainer) return;
    
    upcomingContainer.innerHTML = '';
    
    // Obtener fecha actual
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Filtrar prácticas futuras
    const upcomingPractices = practiceData.filter(practice => {
        const practiceDate = new Date(practice.date);
        practiceDate.setHours(0, 0, 0, 0);
        return practiceDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Tomar las 4 próximas
    const nextPractices = upcomingPractices.slice(0, 4);
    
    if (nextPractices.length === 0) {
        upcomingContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-times"></i>
                <p>No hay prácticas próximas</p>
            </div>
        `;
        return;
    }
    
    // Mapeo de estados a estilos - Adaptado del diseño proporcionado
    const practiceStatusStyles = {
        'programada': { 
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            tagBg: 'status-programada',
            border: 'border-l-blue-500'
        },
        'confirmada': { 
            bg: 'bg-green-50 dark:bg-green-900/20',
            tagBg: 'status-confirmada',
            border: 'border-l-green-500'
        },
        'en-curso': { 
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
            tagBg: 'status-en-curso',
            border: 'border-l-yellow-500'
        },
        'completada': { 
            bg: 'bg-gray-50 dark:bg-gray-900/20',
            tagBg: 'status-completada',
            border: 'border-l-gray-500'
        },
        'cancelada': { 
            bg: 'bg-red-50 dark:bg-red-900/20',
            tagBg: 'status-cancelada',
            border: 'border-l-red-500'
        }
    };
    
    // Textos para estados
    const statusTexts = {
        'programada': 'Programada',
        'confirmada': 'Confirmada',
        'en-curso': 'En Curso',
        'completada': 'Completada',
        'cancelada': 'Cancelada'
    };
    
    nextPractices.forEach(practice => {
        const styles = practiceStatusStyles[practice.status] || practiceStatusStyles['programada'];
        const statusText = statusTexts[practice.status] || practice.status;
        
        const practiceDiv = document.createElement('div');
        practiceDiv.className = `upcoming-practice-item ${styles.bg}`;
        practiceDiv.setAttribute('data-practice-id', practice.id);
        
        // Formatear fecha para mostrar
        const practiceDate = new Date(practice.date);
        const dateText = practiceDate.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short',
            year: 'numeric'
        });
        
        // Obtener hora si existe
        const timeText = practice.time ? ` • ${practice.time}` : '';
        
        practiceDiv.innerHTML = `
            <div class="upcoming-practice-info">
                <div class="upcoming-practice-name">${practice.practice}</div>
                <div class="upcoming-practice-meta">${practice.professor} - ${dateText}${timeText}</div>
            </div>
            <span class="upcoming-practice-status ${styles.tagBg}">${statusText}</span>
        `;
        
        // Agregar evento click para abrir detalles
        practiceDiv.addEventListener('click', function() {
            openEditModal(practice.id);
            
            // Efecto visual de selección
            const allItems = document.querySelectorAll('.upcoming-practice-item');
            allItems.forEach(item => item.classList.remove('ring-2', 'ring-primary'));
            
            practiceDiv.classList.add('ring-2', 'ring-primary');
        });
        
        upcomingContainer.appendChild(practiceDiv);
    });
}

// Inicializar ocupación de horarios - CORREGIDA COMPLETAMENTE
function initializeScheduleOccupancy() {
    scheduleOccupancy = {};
    
    // Procesar prácticas existentes para marcar horarios ocupados
    practiceData.forEach(practice => {
        if (practice.date && practice.time) {
            const day = getDayFromDate(practice.date);
            // Solo procesar si es un día laboral - CORREGIDO
            if (day) {
                if (!scheduleOccupancy[day]) {
                    scheduleOccupancy[day] = {};
                }
                scheduleOccupancy[day][practice.time] = {
                    practice: practice.practice,
                    professor: practice.professor,
                    id: practice.id // Agregar ID para referencia
                };
            }
        }
    });
    
    console.log('Ocupación de horarios inicializada:', scheduleOccupancy);
}

// Generar tabla de agenda - CORREGIDA COMPLETAMENTE
function generateAgendaSchedule() {
    const scheduleBody = document.getElementById('schedule-body-agenda');
    if (!scheduleBody) {
        console.error('No se encontró el elemento schedule-body-agenda');
        return;
    }
    
    scheduleBody.innerHTML = '';
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const hours = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    
    // Asegurarse de que la ocupación esté actualizada
    initializeScheduleOccupancy();
    
    // Generar franjas horarias
    hours.forEach(hour => {
        const row = document.createElement('tr');
        
        // Celda de hora
        const timeCell = document.createElement('td');
        timeCell.className = 'p-2 border border-gray-300 dark:border-gray-600 text-center text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
        timeCell.textContent = `${hour} - ${parseInt(hour.split(':')[0]) + 1}:00`;
        row.appendChild(timeCell);
        
        // Celdas para cada día
        days.forEach(day => {
            const dayCell = document.createElement('td');
            dayCell.className = 'p-1 border border-gray-300 dark:border-gray-600';
            
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.dataset.day = day;
            slotDiv.dataset.hour = hour;
            
            // Verificar si el horario está ocupado
            const isOccupied = scheduleOccupancy[day] && scheduleOccupancy[day][hour];
            if (isOccupied) {
                slotDiv.classList.add('occupied');
                slotDiv.innerHTML = '<i class="fas fa-ban"></i>';
                slotDiv.title = `${isOccupied.practice} - ${isOccupied.professor}`;
                slotDiv.style.cursor = 'not-allowed';
            } else {
                slotDiv.classList.add('available');
                slotDiv.innerHTML = '<i class="fas fa-check"></i>';
                slotDiv.title = 'Disponible';
                slotDiv.style.cursor = 'pointer';
            }
            
            // Agregar evento de clic para seleccionar horario - CORREGIDO
            slotDiv.addEventListener('click', function() {
                if (this.classList.contains('available')) {
                    // Si está disponible, seleccionar para nueva práctica
                    selectTimeSlot(this);
                } else {
                    // Si está ocupado, mostrar información de la práctica existente
                    showPracticeInfo(this);
                }
            });
            
            dayCell.appendChild(slotDiv);
            row.appendChild(dayCell);
        });
        
        scheduleBody.appendChild(row);
    });
    
    console.log('Tabla de agenda generada con ocupación actualizada');
}

// Función para mostrar información de práctica existente
function showPracticeInfo(slotElement) {
    const day = slotElement.dataset.day;
    const hour = slotElement.dataset.hour;
    showPracticeDetails(day, hour);
}

// Función para mostrar detalles de práctica en modal
function showPracticeDetails(day, hour) {
    const practiceInfo = scheduleOccupancy[day] && scheduleOccupancy[day][hour];
    
    if (practiceInfo) {
        // Buscar la práctica completa en los datos
        const practice = practiceData.find(p => p.id === practiceInfo.id);
        if (practice) {
            // Crear un modal de información detallada
            const detailModal = document.createElement('div');
            detailModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in';
            detailModal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white">Información de Práctica</h3>
                            <button class="close-detail-modal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Práctica:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.practice}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Profesor:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.professor}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Asignatura:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.subject}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Estado:</label>
                                <span class="mt-1 inline-flex px-2 text-xs font-semibold rounded-full 
                                    ${getStatusColor(practice.status)}">
                                    ${getStatusText(practice.status)}
                                </span>
                            </div>
                            ${practice.objective ? `
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Objetivo:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.objective}</p>
                            </div>
                            ` : ''}
                            ${practice.lab ? `
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Laboratorio/Aula:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.lab}</p>
                            </div>
                            ` : ''}
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button class="close-detail-modal px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(detailModal);
            
            // Agregar event listeners para cerrar el modal
            const closeButtons = detailModal.querySelectorAll('.close-detail-modal');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    document.body.removeChild(detailModal);
                });
            });
            
            // Cerrar al hacer clic fuera del modal
            detailModal.addEventListener('click', function(e) {
                if (e.target === detailModal) {
                    document.body.removeChild(detailModal);
                }
            });
        }
    }
}

// FUNCIONES AUXILIARES para estilos de estado
function getStatusColor(status) {
    switch(status) {
        case 'programada': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
        case 'confirmada': return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
        case 'en-curso': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
        case 'completada': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
        case 'cancelada': return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'programada': return 'Programada';
        case 'confirmada': return 'Confirmada';
        case 'en-curso': return 'En curso';
        case 'completada': return 'Completada';
        case 'cancelada': return 'Cancelada';
        default: return status;
    }
}

// Seleccionar slot de tiempo para nueva práctica - CORREGIDA COMPLETAMENTE
function selectTimeSlot(slot) {
    const day = slot.dataset.day;
    const hour = slot.dataset.hour;
    
    // Verificar si ya está ocupado (doble verificación)
    if (scheduleOccupancy[day] && scheduleOccupancy[day][hour]) {
        alert('Este horario ya está ocupado. Por favor seleccione otro.');
        return;
    }
    
    // Guardar la selección temporalmente
    window.selectedTimeSlot = {
        day: day,
        hour: hour,
        element: slot
    };
    
    // Abrir modal de nueva práctica con prellenado automático
    openNewPracticeModal(day, hour);
}

// MODIFICAR la función openNewPracticeModal para aceptar parámetros
function openNewPracticeModal(day = null, hour = null) {
    // Limpiar el formulario
    document.getElementById('edit-practice-form').reset();
    document.getElementById('edit-practice-id').value = '';
    
    // Cambiar título
    document.getElementById('edit-modal-title').textContent = 'Nueva Práctica';
    
    // Mostrar modal
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
    
    // Si se proporcionaron día y hora, prellenar el formulario
    if (day && hour) {
        prefillPracticeForm(day, hour);
    }
}

// NUEVA FUNCIÓN: Prellenar formulario con fecha y hora seleccionadas
function prefillPracticeForm(day, hour) {
    // Esperar a que el modal esté completamente abierto
    setTimeout(() => {
        // Prellenar la hora en el select
        const timeSelect = document.getElementById('edit-practice-time');
        if (timeSelect) {
            timeSelect.value = hour;
        }
        
        // Calcular y prellenar la fecha correspondiente al día seleccionado
        const targetDate = calculateDateFromDay(day);
        const dateInput = document.getElementById('edit-practice-date');
        if (dateInput) {
            dateInput.value = targetDate;
        }
        
        console.log('Formulario prellenado:', {
            día: day,
            hora: hour,
            fecha: targetDate
        });
    }, 100);
}

// NUEVA FUNCIÓN: Calcular fecha a partir del día de la semana
function calculateDateFromDay(day) {
    const today = new Date();
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const targetDayIndex = daysOfWeek.indexOf(day);
    
    if (targetDayIndex === -1) return '';
    
    // Calcular la fecha del próximo día seleccionado
    const currentDayIndex = today.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    
    // Si el día ya pasó esta semana, ir a la próxima semana
    if (daysToAdd < 0) {
        daysToAdd += 7;
    }
    
    // Si es hoy y ya pasó la hora, ir a la próxima semana
    if (daysToAdd === 0) {
        const currentHour = today.getHours();
        const selectedHour = parseInt(hour.split(':')[0]);
        if (currentHour >= selectedHour) {
            daysToAdd = 7;
        }
    }
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);
    
    // Formatear como YYYY-MM-DD para el input date
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = String(targetDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${dayOfMonth}`;
}

// Función auxiliar para debug - CORREGIDA
function debugSchedule() {
    console.log('=== DEBUG AGENDA ===');
    console.log('Prácticas totales:', practiceData.length);
    console.log('Prácticas con fecha y hora:');
    practiceData.forEach(p => {
        if (p.date && p.time) {
            const day = getDayFromDate(p.date);
            console.log(`- ${p.practice}: ${p.date} (${day}) ${p.time}`);
        }
    });
    console.log('Horarios ocupados:', scheduleOccupancy);
    alert('Información de debug mostrada en consola');
}

// Obtener día de la semana a partir de una fecha - CORREGIDA COMPLETAMENTE
function getDayFromDate(dateString) {
    try {
        const date = new Date(dateString);
        // Ajustar para problema de zona horaria
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = days[date.getDay()];
        
        console.log(`Convirtiendo fecha: ${dateString} -> ${dayName}`);
        
        // Solo considerar días laborales (Lunes a Viernes)
        return ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].includes(dayName) ? dayName : null;
    } catch (error) {
        console.error('Error al convertir fecha:', dateString, error);
        return null;
    }
}

// Actualizar agenda después de guardar
function updateAgendaAfterSave(practice) {
    if (practice.date && practice.time) {
        const day = getDayFromDate(practice.date);
        if (day) {
            if (!scheduleOccupancy[day]) {
                scheduleOccupancy[day] = {};
            }
            scheduleOccupancy[day][practice.time] = {
                practice: practice.practice,
                professor: practice.professor,
                id: practice.id
            };
            
            console.log(`Agenda actualizada: ${day} ${practice.time} - ${practice.practice}`);
            
            // Regenerar la tabla de agenda
            generateAgendaSchedule();
            
            // Actualizar las vistas de actividades y próximas prácticas
            loadRecentActivities();
            loadUpcomingPractices();
        }
    }
}

// Actualizar agenda después de eliminar
function updateAgendaAfterDelete(practiceId) {
    // Buscar la práctica eliminada
    const deletedPractice = practiceData.find(p => p.id === practiceId);
    if (deletedPractice && deletedPractice.date && deletedPractice.time) {
        const day = getDayFromDate(deletedPractice.date);
        if (day && scheduleOccupancy[day] && scheduleOccupancy[day][deletedPractice.time]) {
            delete scheduleOccupancy[day][deletedPractice.time];
            console.log(`Horario liberado: ${day} ${deletedPractice.time}`);
            
            // Regenerar la tabla de agenda
            generateAgendaSchedule();
            
            // Actualizar las vistas de actividades y próximas prácticas
            loadRecentActivities();
            loadUpcomingPractices();
        }
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación del sidebar
    document.getElementById('dashboard-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('dashboard-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('practices-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('practices-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('agenda-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('agenda-view');
        updateActiveLink(this);
        closeMobileMenu();
        // Regenerar la tabla de agenda cuando se muestre la vista
        setTimeout(() => {
            generateAgendaSchedule();
        }, 100);
    });
    
    document.getElementById('users-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('users-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('reports-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('reports-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('settings-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('settings-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    // Botón Cerrar Sesión en sidebar - ADAPTADO DEL CÓDIGO MÁS PEQUEÑO
    document.getElementById('logout-link').addEventListener('click', function(e) {
        e.preventDefault();
        abrirModalCerrarSesion();
        closeMobileMenu();
    });
    
    // Navegación móvil
    document.getElementById('mobile-dashboard-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('dashboard-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('mobile-practices-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('practices-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('mobile-agenda-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('agenda-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
        // Regenerar la tabla de agenda cuando se muestre la vista
        setTimeout(() => {
            generateAgendaSchedule();
        }, 100);
    });
    
    document.getElementById('mobile-users-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('users-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('mobile-reports-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('reports-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('mobile-settings-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('settings-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    // Botón Cerrar Sesión en menú móvil - ADAPTADO DEL CÓDIGO MÁS PEQUEÑO
    document.getElementById('mobile-logout-link').addEventListener('click', function(e) {
        e.preventDefault();
        abrirModalCerrarSesion();
        closeMobileMenu();
    });
    
    // Botones de prácticas - ACTUALIZADOS
    document.getElementById('add-practice-btn').addEventListener('click', function() {
        openNewPracticeModal(); // Modal vacío
    });
    
    document.getElementById('add-practice-agenda-btn').addEventListener('click', function() {
        openNewPracticeModal(); // Modal vacío
    });
    
    // Filtros de prácticas
    document.getElementById('search').addEventListener('input', function(e) {
        currentFilters.search = e.target.value.toLowerCase();
        filterPracticesData();
    });
    
    document.getElementById('professor-filter').addEventListener('change', function(e) {
        currentFilters.professor = e.target.value;
        filterPracticesData();
    });
    
    document.getElementById('status-filter').addEventListener('change', function(e) {
        currentFilters.status = e.target.value;
        filterPracticesData();
    });
    
    // Botón de restablecer filtros
    document.getElementById('reset-filters').addEventListener('click', function() {
        resetFilters();
    });
    
    // Botón de exportar PDF - Funcionalidad eliminada
    document.getElementById('export-pdf-btn').addEventListener('click', function() {
        // Función deshabilitada - solo muestra un mensaje
        showSuccessMessage('Función no disponible');
    });
    
    // Botón de exportar reportes
    document.getElementById('export-reports-btn').addEventListener('click', function() {
        // Función deshabilitada - solo muestra un mensaje
        showSuccessMessage('Función no disponible');
    });
    
    // Ordenamiento de columnas
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', function() {
            const column = this.getAttribute('data-column');
            sortPracticesTable(column);
        });
    });
    
    // Filtros de reportes
    document.getElementById('reports-search').addEventListener('input', function(e) {
        currentReportsFilters.search = e.target.value.toLowerCase();
        filterReportsData();
    });
    
    document.getElementById('reports-professor-filter').addEventListener('change', function(e) {
        currentReportsFilters.professor = e.target.value;
        filterReportsData();
    });
    
    document.getElementById('reports-status-filter').addEventListener('change', function(e) {
        currentReportsFilters.status = e.target.value;
        filterReportsData();
    });
}

// Abrir menú móvil
function openMobileMenu() {
    document.getElementById('mobile-sidebar').classList.remove('mobile-menu-closed');
    document.getElementById('mobile-sidebar').classList.add('mobile-menu-open');
}

// Cerrar menú móvil
function closeMobileMenu() {
    document.getElementById('mobile-sidebar').classList.remove('mobile-menu-open');
    document.getElementById('mobile-sidebar').classList.add('mobile-menu-closed');
}

// Configurar listeners para modales
function setupModalListeners() {
    const editModal = document.getElementById('edit-modal');
    const closeEditModal = document.getElementById('close-edit-modal');
    const cancelEdit = document.getElementById('cancel-edit');
    const editPracticeForm = document.getElementById('edit-practice-form');
    
    const deleteModal = document.getElementById('delete-modal');
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const cancelDelete = document.getElementById('cancel-delete');
    const confirmDelete = document.getElementById('confirm-delete');
    
    const editUserModal = document.getElementById('edit-user-modal');
    const closeEditUserModal = document.getElementById('close-edit-user-modal');
    const cancelEditUser = document.getElementById('cancel-edit-user');
    const editUserForm = document.getElementById('edit-user-form');
    
    const deleteUserModal = document.getElementById('delete-user-modal');
    const closeDeleteUserModal = document.getElementById('close-delete-user-modal');
    const cancelDeleteUser = document.getElementById('cancel-delete-user');
    const confirmDeleteUser = document.getElementById('confirm-delete-user');
    
    // Cerrar modal de edición de práctica
    function closeEditModalFunc() {
        editModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Restaurar el header
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeEditModal) {
        closeEditModal.addEventListener('click', closeEditModalFunc);
    }
    if (cancelEdit) {
        cancelEdit.addEventListener('click', closeEditModalFunc);
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (editModal) {
        editModal.addEventListener('click', function(e) {
            if (e.target === editModal) {
                closeEditModalFunc();
            }
        });
    }

    // Envío del formulario de edición - CORREGIDO COMPLETAMENTE
    if (editPracticeForm) {
        editPracticeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const practiceId = parseInt(document.getElementById('edit-practice-id').value);
            const practiceDate = document.getElementById('edit-practice-date').value;
            const practiceTime = document.getElementById('edit-practice-time').value;
            const practiceName = document.getElementById('edit-practice-name').value;
            const practiceProfessor = document.getElementById('edit-practice-professor').value;
            const practiceSubject = document.getElementById('edit-practice-subject').value;
            const practiceObjective = document.getElementById('edit-practice-objective').value;
            const practiceLab = document.getElementById('edit-practice-lab').value;
            const practiceStatus = document.getElementById('edit-practice-status').value;
            
            let isNewPractice = false;
            let newPractice = null;
            
            if (practiceId) {
                // Actualizar práctica existente en los datos
                const practiceIndex = practiceData.findIndex(p => p.id === practiceId);
                if (practiceIndex !== -1) {
                    // Es una actualización, verificar si cambió la fecha/hora
                    const oldPractice = practiceData.find(p => p.id === practiceId);
                    if (oldPractice && (oldPractice.date !== practiceDate || oldPractice.time !== practiceTime)) {
                        // Si cambió la fecha/hora, liberar el horario anterior
                        updateAgendaAfterDelete(practiceId);
                    }
                    
                    practiceData[practiceIndex] = {
                        ...practiceData[practiceIndex],
                        date: practiceDate,
                        time: practiceTime,
                        practice: practiceName,
                        professor: practiceProfessor,
                        subject: practiceSubject,
                        objective: practiceObjective,
                        lab: practiceLab,
                        status: practiceStatus
                    };
                    
                    // Actualizar también en reportes si existe
                    const reportIndex = reportsData.findIndex(r => r.id === practiceId);
                    if (reportIndex !== -1) {
                        reportsData[reportIndex] = {
                            ...reportsData[reportIndex],
                            date: practiceDate,
                            practice: practiceName,
                            professor: practiceProfessor,
                            subject: practiceSubject,
                            objective: practiceObjective
                        };
                    }
                    
                    showSuccessMessage('Práctica actualizada correctamente');
                }
            } else {
                // Crear nueva práctica
                const newId = practiceData.length > 0 ? Math.max(...practiceData.map(p => p.id)) + 1 : 1;
                newPractice = {
                    id: newId,
                    date: practiceDate,
                    time: practiceTime,
                    practice: practiceName,
                    professor: practiceProfessor,
                    subject: practiceSubject,
                    objective: practiceObjective,
                    lab: practiceLab,
                    status: practiceStatus
                };
                
                practiceData.push(newPractice);
                isNewPractice = true;
                
                // Crear también en reportes
                reportsData.push({
                    id: newId,
                    date: practiceDate,
                    practice: practiceName,
                    objective: practiceObjective,
                    professor: practiceProfessor,
                    subject: practiceSubject
                });
                
                showSuccessMessage('Práctica creada correctamente');
            }
            
            updateDashboardStats();
            loadRecentActivities();
            loadUpcomingPractices();
            
            // Actualizar tablas - CORREGIDO: Usar los arrays actualizados
            currentData = [...practiceData];
            currentReportsData = [...reportsData];
            
            initializePracticesTable();
            initializeReportsTable();
            
            // Actualizar agenda después de guardar
            updateAgendaAfterSave(practiceId ? practiceData.find(p => p.id === practiceId) : newPractice);
            
            closeEditModalFunc();
            
            console.log('Práctica guardada:', {
                id: practiceId || 'Nueva',
                name: practiceName,
                date: practiceDate,
                time: practiceTime,
                isNew: isNewPractice,
                totalPractices: practiceData.length
            });
        });
    }
    
    // Cerrar modal de eliminación de práctica
    function closeDeleteModalFunc() {
        deleteModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Restaurar el header
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeDeleteModal) {
        closeDeleteModal.addEventListener('click', closeDeleteModalFunc);
    }
    if (cancelDelete) {
        cancelDelete.addEventListener('click', closeDeleteModalFunc);
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (deleteModal) {
        deleteModal.addEventListener('click', function(e) {
            if (e.target === deleteModal) {
                closeDeleteModalFunc();
            }
        });
    }

    // Confirmar eliminación de práctica
    if (confirmDelete) {
        confirmDelete.addEventListener('click', function() {
            const practiceId = parseInt(document.getElementById('delete-practice-id').value);
            
            // Actualizar agenda después de eliminar
            updateAgendaAfterDelete(practiceId);
            
            // Eliminar práctica de los datos
            const practiceIndex = practiceData.findIndex(p => p.id === practiceId);
            if (practiceIndex !== -1) {
                practiceData.splice(practiceIndex, 1);
                
                // Eliminar también de reportes
                const reportIndex = reportsData.findIndex(r => r.id === practiceId);
                if (reportIndex !== -1) {
                    reportsData.splice(reportIndex, 1);
                }
                
                // Actualizar dashboard
                updateDashboardStats();
                loadRecentActivities();
                loadUpcomingPractices();
                
                // Actualizar tablas - CORREGIDO: llamar a initializePracticesTable()
                currentData = [...practiceData];
                currentReportsData = [...reportsData];
                initializePracticesTable();
                initializeReportsTable();
                
                // Mostrar mensaje de éxito
                showSuccessMessage('Práctica eliminada correctamente');
            }
            
            // Cerrar modal
            closeDeleteModalFunc();
        });
    }
    
    // Cerrar modal de edición de usuario
    function closeEditUserModalFunc() {
        editUserModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Restaurar el header
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeEditUserModal) {
        closeEditUserModal.addEventListener('click', closeEditUserModalFunc);
    }
    if (cancelEditUser) {
        cancelEditUser.addEventListener('click', closeEditUserModalFunc);
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (editUserModal) {
        editUserModal.addEventListener('click', function(e) {
            if (e.target === editUserModal) {
                closeEditUserModalFunc();
            }
        });
    }

    // Envío del formulario de edición de usuario
    if (editUserForm) {
        editUserForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const userId = parseInt(document.getElementById('edit-user-id').value);
            const userName = document.getElementById('edit-user-name').value;
            const userUsername = document.getElementById('edit-user-username').value;
            const userEmail = document.getElementById('edit-user-email').value;
            const userRole = document.getElementById('edit-user-role').value;
            const userStatus = document.getElementById('edit-user-status').value;
            
            if (userId) {
                // Actualizar usuario existente en los datos
                const userIndex = usersData.findIndex(u => u.id === userId);
                if (userIndex !== -1) {
                    usersData[userIndex] = {
                        ...usersData[userIndex],
                        name: userName,
                        username: userUsername,
                        email: userEmail,
                        role: userRole,
                        status: userStatus
                    };
                    
                    // Mostrar mensaje de éxito
                    showSuccessMessage('Usuario actualizado correctamente');
                }
            } else {
                // Crear nuevo usuario
                const newId = usersData.length > 0 ? Math.max(...usersData.map(u => u.id)) + 1 : 1;
                const newUser = {
                    id: newId,
                    name: userName,
                    username: userUsername,
                    email: userEmail,
                    role: userRole,
                    status: userStatus,
                    lastAccess: 'Nunca'
                };
                
                usersData.push(newUser);
                
                // Mostrar mensaje de éxito
                showSuccessMessage('Usuario creado correctamente');
            }
            
            // Actualizar tabla de usuarios
            initializeUsersTable();
            
            // Cerrar modal
            closeEditUserModalFunc();
        });
    }
    
    // Cerrar modal de eliminación de usuario
    function closeDeleteUserModalFunc() {
        deleteUserModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Restaurar el header
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeDeleteUserModal) {
        closeDeleteUserModal.addEventListener('click', closeDeleteUserModalFunc);
    }
    if (cancelDeleteUser) {
        cancelDeleteUser.addEventListener('click', closeDeleteUserModalFunc);
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (deleteUserModal) {
        deleteUserModal.addEventListener('click', function(e) {
            if (e.target === deleteUserModal) {
                closeDeleteUserModalFunc();
            }
        });
    }

    // Confirmar eliminación de usuario
    if (confirmDeleteUser) {
        confirmDeleteUser.addEventListener('click', function() {
            const userId = parseInt(document.getElementById('delete-user-id').value);
            
            // Eliminar usuario de los datos
            const userIndex = usersData.findIndex(u => u.id === userId);
            if (userIndex !== -1) {
                usersData.splice(userIndex, 1);
                
                // Actualizar tabla de usuarios
                initializeUsersTable();
                
                // Mostrar mensaje de éxito
                showSuccessMessage('Usuario eliminada correctamente');
            }
            
            // Cerrar modal
            closeDeleteUserModalFunc();
        });
    }
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    successText.textContent = message;
    successMessage.classList.remove('hidden');
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
}

// Mostrar vista específica
function showView(viewId) {
    // Ocultar todas las vistas
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('practices-view').classList.add('hidden');
    document.getElementById('agenda-view').classList.add('hidden');
    document.getElementById('users-view').classList.add('hidden');
    document.getElementById('reports-view').classList.add('hidden');
    document.getElementById('settings-view').classList.add('hidden');
    
    // Mostrar la vista seleccionada
    document.getElementById(viewId).classList.remove('hidden');
}

// Actualizar enlace activo en el sidebar
function updateActiveLink(activeLink) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });
    
    // Agregar clase activa al enlace seleccionado
    activeLink.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Actualizar enlace activo en el menú móvil
function updateActiveMobileLink(activeLink) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('#mobile-sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });
    
    // Agregar clase activa al enlace seleccionado
    activeLink.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Inicializar tabla de prácticas - CORREGIDA COMPLETAMENTE
function initializePracticesTable() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) {
        console.error('No se encontró table-body');
        return;
    }
    
    tableBody.innerHTML = '';
    
    console.log('Renderizando tabla con', currentData.length, 'prácticas');
    
    // Generar filas de la tabla
    currentData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'bg-white dark:bg-background-dark';
        
        // Determinar color del estado - CORREGIDO: usar los colores correctos
        let statusColor = '';
        let statusText = '';
        switch(item.status) {
            case 'programada':
                statusColor = 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
                statusText = 'Programada';
                break;
            case 'confirmada':
                statusColor = 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
                statusText = 'Confirmada';
                break;
            case 'en-curso':
                statusColor = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
                statusText = 'En curso';
                break;
            case 'completada':
                statusColor = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
                statusText = 'Completada';
                break;
            case 'cancelada':
                statusColor = 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
                statusText = 'Cancelada';
                break;
            default:
                statusColor = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
                statusText = item.status;
        }
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${formatDate(item.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.practice}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.professor}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-practice-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-practice-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        data-id="${item.id}"
                        data-practice="${item.practice}"
                        data-professor="${item.professor}"
                        data-date="${formatDate(item.date)}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Agregar event listeners a los botones de editar y eliminar
    document.querySelectorAll('.edit-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            openEditModal(practiceId);
        });
    });
    
    document.querySelectorAll('.delete-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            const practiceName = this.getAttribute('data-practice');
            const practiceProfessor = this.getAttribute('data-professor');
            const practiceDate = this.getAttribute('data-date');
            openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate);
        });
    });
    
    // ✅ ACTUALIZAR CONTADORES Y FILTROS
    updateResultsCount();
    updateFilters();
    
    console.log('Tabla de prácticas actualizada correctamente');
}

// Inicializar tabla de usuarios
function initializeUsersTable() {
    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = '';
    
    // Generar filas de la tabla
    usersData.forEach((item) => {
        const row = document.createElement('tr');
        // Todas las filas serán claras/oscuras según el tema
        row.className = 'bg-white dark:bg-background-dark';
        
        // Determinar color del estado
        let statusColor = '';
        let statusText = '';
        switch(item.status) {
            case 'Activo':
                statusColor = 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
                statusText = 'Activo';
                break;
            case 'Inactivo':
                statusColor = 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
                statusText = 'Inactivo';
                break;
        }
        
        // Determinar color del rol
        let roleColor = '';
        let roleText = '';
        switch(item.role) {
            case 'Administrador':
                roleColor = 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200';
                roleText = 'Administrador';
                break;
            case 'Profesor':
                roleColor = 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
                roleText = 'Profesor';
                break;
            case 'Estudiante':
                roleColor = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
                roleText = 'Estudiante';
                break;
        }
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                            ${item.name.charAt(0)}
                        </div>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">
                            ${item.name}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            ${item.username}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColor}">
                    ${roleText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${item.email}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${item.lastAccess}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-user-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-user-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        data-id="${item.id}"
                        data-name="${item.name}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Agregar event listeners a los botones de editar y eliminar
    document.querySelectorAll('.edit-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            openEditUserModal(userId);
        });
    });
    
    document.querySelectorAll('.delete-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            const userName = this.getAttribute('data-name');
            openDeleteUserModal(userId, userName);
        });
    });
}

// Inicializar tabla de reportes
function initializeReportsTable() {
    const tableBody = document.getElementById('reports-table-body');
    tableBody.innerHTML = '';
    
    // Generar filas de la tabla
    currentReportsData.forEach((item) => {
        const row = document.createElement('tr');
        // Todas las filas serán claras/oscuras según el tema
        row.className = 'bg-white dark:bg-background-dark';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${formatDate(item.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.practice}</td>
            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">${item.objective}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.professor}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-report-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-report-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        data-id="${item.id}"
                        data-practice="${item.practice}"
                        data-professor="${item.professor}"
                        data-date="${formatDate(item.date)}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Agregar event listeners a los botones de editar y eliminar
    document.querySelectorAll('.edit-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            openEditReportModal(reportId);
        });
    });
    
    document.querySelectorAll('.delete-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            const reportName = this.getAttribute('data-practice');
            const reportProfessor = this.getAttribute('data-professor');
            const reportDate = this.getAttribute('data-date');
            openDeleteReportModal(reportId, reportName, reportProfessor, reportDate);
        });
    });
}

// Abrir modal de edición para reportes
function openEditReportModal(reportId) {
    const report = reportsData.find(p => p.id === reportId);
    if (!report) return;
    
    // Llenar el formulario con los datos actuales
    document.getElementById('edit-practice-id').value = report.id;
    document.getElementById('edit-practice-date').value = report.date;
    document.getElementById('edit-practice-name').value = report.practice;
    document.getElementById('edit-practice-professor').value = report.professor;
    document.getElementById('edit-practice-subject').value = report.subject;
    document.getElementById('edit-practice-objective').value = report.objective || '';
    document.getElementById('edit-practice-lab').value = report.lab || '';
    document.getElementById('edit-practice-status').value = report.status || 'programada';
    
    // Mostrar modal
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de eliminación para reportes
function openDeleteReportModal(reportId, reportName, reportProfessor, reportDate) {
    // Llenar la información de la práctica a eliminar
    document.getElementById('delete-practice-id').value = reportId;
    document.getElementById('delete-practice-name').textContent = reportName;
    document.getElementById('delete-practice-details').textContent = `${reportProfessor} - ${reportDate}`;
    
    // Mostrar modal
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de edición
function openEditModal(practiceId) {
    const practice = practiceData.find(p => p.id === practiceId);
    if (!practice) return;
    
    // Llenar el formulario con los datos actuales
    document.getElementById('edit-practice-id').value = practice.id;
    document.getElementById('edit-practice-date').value = practice.date;
    document.getElementById('edit-practice-time').value = practice.time || '';
    document.getElementById('edit-practice-name').value = practice.practice;
    document.getElementById('edit-practice-professor').value = practice.professor;
    document.getElementById('edit-practice-subject').value = practice.subject;
    document.getElementById('edit-practice-objective').value = practice.objective || '';
    document.getElementById('edit-practice-lab').value = practice.lab || '';
    document.getElementById('edit-practice-status').value = practice.status;
    
    // Cambiar título
    document.getElementById('edit-modal-title').textContent = 'Editar Práctica';
    
    // Mostrar modal
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de eliminación
function openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate) {
    // Llenar la información de la práctica a eliminar
    document.getElementById('delete-practice-id').value = practiceId;
    document.getElementById('delete-practice-name').textContent = practiceName;
    document.getElementById('delete-practice-details').textContent = `${practiceProfessor} - ${practiceDate}`;
    
    // Mostrar modal
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Oscurecer el header
    document.getElementById('header-container').classList.add('modal-open');
}

// Filtrar datos de prácticas - CORREGIDO
function filterPracticesData() {
    let filteredData = [...practiceData];
    
    // Aplicar filtro de búsqueda
    if (currentFilters.search) {
        filteredData = filteredData.filter(item => 
            item.practice.toLowerCase().includes(currentFilters.search) ||
            item.professor.toLowerCase().includes(currentFilters.search) ||
            item.subject.toLowerCase().includes(currentFilters.search)
        );
    }
    
    // Aplicar filtro por profesor
    if (currentFilters.professor) {
        filteredData = filteredData.filter(item => item.professor === currentFilters.professor);
    }
    
    // Aplicar filtro por estado
    if (currentFilters.status) {
        filteredData = filteredData.filter(item => item.status === currentFilters.status);
    }
    
    currentData = filteredData;
    sortPracticesTable(sortColumn, sortDirection);
    
    initializePracticesTable();
}

// Filtrar datos de reportes
function filterReportsData() {
    let filteredData = [...reportsData];
    
    // Aplicar filtro de búsqueda
    if (currentReportsFilters.search) {
        filteredData = filteredData.filter(item => 
            item.practice.toLowerCase().includes(currentReportsFilters.search) ||
            item.professor.toLowerCase().includes(currentReportsFilters.search) ||
            item.subject.toLowerCase().includes(currentReportsFilters.search) ||
            item.objective.toLowerCase().includes(currentReportsFilters.search)
        );
    }
    
    // Aplicar filtro por profesor
    if (currentReportsFilters.professor) {
        filteredData = filteredData.filter(item => item.professor === currentReportsFilters.professor);
    }
    
    // Aplicar filtro por estado (si existe en los datos)
    if (currentReportsFilters.status) {
        // En este caso, los reportes no tienen estado, pero podríamos filtrar por otros criterios
        // Por ejemplo, podríamos filtrar por asignatura si se desea
    }
    
    currentReportsData = filteredData;
    initializeReportsTable();
    updateReportsResultsCount();
}

// Ordenar tabla de prácticas
function sortPracticesTable(column, direction = null) {
    // Determinar dirección de ordenamiento
    if (column === sortColumn) {
        sortDirection = direction || (sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    // Aplicar ordenamiento
    currentData.sort((a, b) => {
        let aValue = a[column];
        let bValue = b[column];
        
        // Para fechas, convertir a objetos Date
        if (column === 'date') {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        } else {
            // Para texto, convertir a minúsculas para ordenamiento case-insensitive
            aValue = String(aValue).toLowerCase();
            bValue = String(bValue).toLowerCase();
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    
    // Actualizar indicadores visuales de ordenamiento
    updateSortIndicators();
    
    // Volver a renderizar la tabla - CORREGIDO: llamar a initializePracticesTable()
    initializePracticesTable();
}

// Actualizar indicadores visuales de ordenamiento
function updateSortIndicators() {
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('active-sort');
        const icon = header.querySelector('.sort-icon');
        
        if (header.getAttribute('data-column') === sortColumn) {
            header.classList.add('active-sort');
            icon.textContent = sortDirection === 'asc' ? '↑' : '↓';
        } else {
            icon.textContent = '↕';
        }
    });
}

// Actualizar filtros desplegables
function updateFilters() {
    const professorFilter = document.getElementById('professor-filter');
    
    // Obtener valores únicos
    const professors = [...new Set(practiceData.map(item => item.professor))];
    
    // Limpiar opciones existentes (excepto la primera)
    while (professorFilter.children.length > 1) {
        professorFilter.removeChild(professorFilter.lastChild);
    }
    
    // Agregar opciones
    professors.forEach(professor => {
        const option = document.createElement('option');
        option.value = professor;
        option.textContent = professor;
        professorFilter.appendChild(option);
    });
    
    // Restaurar valores seleccionados si existen
    if (currentFilters.professor) {
        professorFilter.value = currentFilters.professor;
    }
    if (currentFilters.status) {
        document.getElementById('status-filter').value = currentFilters.status;
    }
}

// Restablecer filtros
function resetFilters() {
    document.getElementById('search').value = '';
    document.getElementById('professor-filter').value = '';
    document.getElementById('status-filter').value = '';
    
    currentFilters = {
        search: '',
        professor: '',
        status: ''
    };
    
    currentData = [...practiceData];
    sortPracticesTable('date', 'asc');
    initializePracticesTable();
}

// Actualizar contador de resultados - CORREGIDO
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    const totalCount = document.getElementById('total-count');
    
    if (resultsCount && totalCount) {
        resultsCount.textContent = currentData.length;
        totalCount.textContent = practiceData.length;
        console.log('Contadores actualizados:', currentData.length, 'de', practiceData.length);
    }
}

// Actualizar contador de resultados de reportes
function updateReportsResultsCount() {
    document.getElementById('reports-results-count').textContent = currentReportsData.length;
    document.getElementById('reports-total-count').textContent = reportsData.length;
}

// Formatear fecha
function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Hacer la función debug global
window.debugSchedule = debugSchedule;
window.showView = showView;