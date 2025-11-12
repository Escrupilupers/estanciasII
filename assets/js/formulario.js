document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const steps = document.querySelectorAll('.step');
    const lines = document.querySelectorAll('.line');
    const stepLabels = document.querySelectorAll('.step-label');
    const sections = document.querySelectorAll('.form-section');
    const nextBtns = document.querySelectorAll('.next');
    const prevBtns = document.querySelectorAll('.prev');
    const submitBtn = document.getElementById('submit-form');
    const successMessage = document.getElementById('success-message');
    const scheduleBody = document.getElementById('schedule-body');
    const selectedSlotsContainer = document.getElementById('selected-slots');
    const selectedSlotsList = document.getElementById('selected-slots-list');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Elementos de confirmación
    const summarySubject = document.getElementById('summary-subject');
    const summaryProfessor = document.getElementById('summary-professor');
    const summaryDate = document.getElementById('summary-date');
    const summaryPractice = document.getElementById('summary-practice');
    const summaryDuration = document.getElementById('summary-duration');
    const summaryLab = document.getElementById('summary-lab');
    const summarySchedule = document.getElementById('summary-schedule');
    const summaryObjective = document.getElementById('summary-objective');
    const summaryMaterials = document.getElementById('summary-materials');
    
    let currentStep = 0;
    let selectedTimeSlots = [];
    let occupiedSlots = [];
    
    // Inicialización
    function init() {
        // Establecer fecha mínima como hoy
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('practice-date').setAttribute('min', today);
        
        // Generar horarios
        generateSchedule();
        
        // Configurar menú hamburguesa
        setupHamburgerMenu();
    }
    
    // Configurar menú hamburguesa
    function setupHamburgerMenu() {
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
    
    // Generar tabla de horarios - MANTENIENDO DISEÑO ORIGINAL
    function generateSchedule() {
        scheduleBody.innerHTML = '';
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
        
        // Generar franjas horarias de 7:00 a 20:00
        for (let hour = 7; hour <= 20; hour++) {
            const row = document.createElement('tr');
            
            // Celda de hora
            const timeCell = document.createElement('td');
            timeCell.className = 'p-2 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700';
            timeCell.textContent = `${hour}:00 - ${hour + 1}:00`;
            row.appendChild(timeCell);
            
            // Celdas para cada día
            days.forEach(day => {
                const dayCell = document.createElement('td');
                dayCell.className = 'p-1 border border-gray-300';
                
                const slotDiv = document.createElement('div');
                slotDiv.className = 'time-slot';
                slotDiv.dataset.day = day;
                slotDiv.dataset.hour = hour;
                
                // Marcar algunos horarios como ocupados (para demostración)
                const isOccupied = Math.random() < 0.3; // 30% de probabilidad de estar ocupado
                if (isOccupied) {
                    slotDiv.classList.add('occupied');
                    slotDiv.innerHTML = '<i class="fas fa-ban"></i>';
                    occupiedSlots.push(`${day}-${hour}`);
                } else {
                    slotDiv.classList.add('available');
                    slotDiv.innerHTML = '<i class="fas fa-check"></i>';
                }
                
                slotDiv.addEventListener('click', function() {
                    toggleTimeSlot(this);
                });
                
                dayCell.appendChild(slotDiv);
                row.appendChild(dayCell);
            });
            
            scheduleBody.appendChild(row);
        }
    }
    
    // Alternar selección de horario
    function toggleTimeSlot(element) {
        const day = element.dataset.day;
        const hour = parseInt(element.dataset.hour);
        const slotKey = `${day}-${hour}`;
        
        // Verificar si el horario está ocupado
        if (occupiedSlots.includes(slotKey)) {
            return; // No se puede seleccionar horarios ocupados
        }
        
        // Alternar selección
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            element.classList.add('available');
            element.innerHTML = '<i class="fas fa-check"></i>';
            
            // Eliminar de horarios seleccionados
            selectedTimeSlots = selectedTimeSlots.filter(slot => slot !== slotKey);
        } else {
            element.classList.remove('available');
            element.classList.add('selected');
            element.innerHTML = '<i class="fas fa-calendar-check"></i>';
            
            // Agregar a horarios seleccionados
            selectedTimeSlots.push(slotKey);
        }
        
        // Actualizar visualización de horarios seleccionados
        updateSelectedSlotsDisplay();
        
        // Actualizar duración basada en la selección
        updateDurationFromSelection();
    }
    
    // Actualizar visualización de horarios seleccionados
    function updateSelectedSlotsDisplay() {
        if (selectedTimeSlots.length > 0) {
            selectedSlotsContainer.style.display = 'block';
            selectedSlotsList.innerHTML = '';
            
            selectedTimeSlots.forEach(slot => {
                const [day, hour] = slot.split('-');
                const slotElement = document.createElement('span');
                slotElement.className = 'selected-slot';
                slotElement.textContent = `${day} ${hour}:00-${parseInt(hour) + 1}:00`;
                selectedSlotsList.appendChild(slotElement);
            });
        } else {
            selectedSlotsContainer.style.display = 'none';
        }
    }
    
    // Actualizar duración basada en horarios seleccionados
    function updateDurationFromSelection() {
        const durationSelect = document.getElementById('duration');
        durationSelect.value = selectedTimeSlots.length;
    }
    
    // Navegación entre pasos
    function showSection(sectionIndex) {
        sections.forEach((section, index) => {
            if (index === sectionIndex) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        // Actualizar indicadores de progreso
        steps.forEach((step, index) => {
            if (index <= sectionIndex) {
                step.classList.add('active');
                if (index < sectionIndex) {
                    step.classList.add('completed');
                } else {
                    step.classList.remove('completed');
                }
            } else {
                step.classList.remove('active', 'completed');
            }
        });
        
        // Actualizar líneas entre pasos
        lines.forEach((line, index) => {
            if (index < sectionIndex) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
        
        // Actualizar etiquetas de pasos
        stepLabels.forEach((label, index) => {
            if (index === sectionIndex) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
        
        currentStep = sectionIndex;
        
        // Si estamos en el paso 3, actualizar el resumen
        if (sectionIndex === 2) {
            updateSummary();
        }
    }
    
    // Validar formulario actual
    function validateCurrentStep() {
        const currentSection = sections[currentStep];
        const inputs = currentSection.querySelectorAll('input, select, textarea');
        let isValid = true;
        
        // Limpiar errores anteriores
        currentSection.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        // Validar cada campo
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.closest('.form-group').classList.add('error');
            }
        });
        
        return isValid;
    }
    
    // Actualizar resumen de confirmación
    function updateSummary() {
        summarySubject.textContent = document.getElementById('subject').value || '-';
        summaryProfessor.textContent = document.getElementById('professor').value || '-';
        
        const dateValue = document.getElementById('practice-date').value;
        if (dateValue) {
            const date = new Date(dateValue);
            summaryDate.textContent = date.toLocaleDateString('es-ES');
        } else {
            summaryDate.textContent = '-';
        }
        
        summaryPractice.textContent = document.getElementById('practice-name').value || '-';
        summaryDuration.textContent = document.getElementById('duration').value ? 
            document.getElementById('duration').value + ' hora(s)' : '-';
        summaryLab.textContent = document.getElementById('lab-room').value || 'No especificado';
        summaryObjective.textContent = document.getElementById('objective').value || '-';
        
        // Formatear horarios seleccionados
        const formattedSlots = selectedTimeSlots.map(slot => {
            const [day, hour] = slot.split('-');
            return `${day} ${hour}:00-${parseInt(hour) + 1}:00`;
        });
        summarySchedule.textContent = formattedSlots.length > 0 ? formattedSlots.join(', ') : 'No se han seleccionado horarios';
        
        // Formatear materiales seleccionados
        const materials = Array.from(document.querySelectorAll('input[name="materials"]:checked')).map(cb => cb.value);
        summaryMaterials.textContent = materials.length > 0 ? materials.join(', ') : 'Ninguno';
    }
    
    // Navegar al siguiente paso
    function nextStep() {
        if (validateCurrentStep()) {
            if (currentStep < sections.length - 1) {
                currentStep++;
                showSection(currentStep);
            }
        }
    }
    
    // Navegar al paso anterior
    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showSection(currentStep);
        }
    }
    
    // Enviar formulario
    function submitForm() {
        if (validateCurrentStep()) {
            // Obtener datos del formulario
            const formData = {
                subject: document.getElementById('subject').value,
                professor: document.getElementById('professor').value,
                date: document.getElementById('practice-date').value,
                practice: document.getElementById('practice-name').value,
                objective: document.getElementById('objective').value,
                duration: document.getElementById('duration').value,
                labRoom: document.getElementById('lab-room').value,
                schedule: selectedTimeSlots,
                materials: Array.from(document.querySelectorAll('input[name="materials"]:checked')).map(cb => cb.value)
            };
            
            // Guardar en localStorage (simulando base de datos)
            let practices = JSON.parse(localStorage.getItem('practices')) || [];
            practices.push(formData);
            localStorage.setItem('practices', JSON.stringify(practices));
            
            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
            
            // Reiniciar formulario después de 3 segundos
            setTimeout(() => {
                document.querySelectorAll('input, select, textarea').forEach(element => {
                    if (element.type !== 'submit') {
                        element.value = '';
                    }
                });
                document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.checked = false;
                });
                selectedTimeSlots = [];
                generateSchedule();
                updateSelectedSlotsDisplay();
                successMessage.style.display = 'none';
                currentStep = 0;
                showSection(currentStep);
            }, 3000);
        }
    }
    
    // Funciones para el menú
    function mostrarPerfil() {
        alert('Mostrando perfil del usuario');
        mobileMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }
    
    function cerrarSesion() {
        if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
            alert('Sesión cerrada');
            mobileMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    }
    
    // Event Listeners
    document.getElementById('next1').addEventListener('click', nextStep);
    document.getElementById('next2').addEventListener('click', nextStep);
    document.getElementById('prev2').addEventListener('click', prevStep);
    document.getElementById('prev3').addEventListener('click', prevStep);
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        submitForm();
    });
    
    // Inicializar la aplicación
    init();
});