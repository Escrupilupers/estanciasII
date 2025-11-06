// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const createAccountLink = document.getElementById('createAccountLink');
    
    // Validación del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Limpiar mensajes anteriores
        clearMessages();
        
        // Obtener valores
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validar campos
        let isValid = true;
        
        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid institutional email');
            isValid = false;
        }
        
        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        // Si es válido, proceder con el inicio de sesión
        if (isValid) {
            attemptLogin(email, password);
        }
    });
    
    // Validación en tiempo real para el email
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        if (email && !validateEmail(email)) {
            showError(emailInput, 'Please enter a valid institutional email');
        } else {
            clearError(emailInput);
        }
    });
    
    // Validación en tiempo real para la contraseña
    passwordInput.addEventListener('blur', function() {
        const password = passwordInput.value.trim();
        if (password && password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
        } else {
            clearError(passwordInput);
        }
    });
    
    // Limpiar errores al enfocar
    emailInput.addEventListener('focus', function() {
        clearError(emailInput);
    });
    
    passwordInput.addEventListener('focus', function() {
        clearError(passwordInput);
    });
    
    // Manejar clic en "Forgot a password?"
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        handleForgotPassword();
    });
    
    // Manejar clic en "Create new account"
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        handleCreateAccount();
    });
    
    // Función para validar email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Función para mostrar errores
    function showError(input, message) {
        // Remover cualquier mensaje de error existente
        clearError(input);
        
        // Añadir clase de error al input
        input.classList.add('input-error');
        
        // Crear elemento de mensaje de error
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Insertar después del input
        input.parentNode.appendChild(errorElement);
    }
    
    // Función para limpiar errores
    function clearError(input) {
        input.classList.remove('input-error');
        
        // Remover mensaje de error si existe
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // Función para limpiar todos los mensajes
    function clearMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        const successMessages = document.querySelectorAll('.success-message');
        successMessages.forEach(msg => msg.remove());
        
        emailInput.classList.remove('input-error');
        passwordInput.classList.remove('input-error');
    }
    
    // Función para simular inicio de sesión
    function attemptLogin(email, password) {
        // Mostrar indicador de carga (podría implementarse)
        console.log('Attempting login with:', email);
        
        // Simular petición al servidor con timeout
        setTimeout(function() {
            // En una aplicación real, aquí se verificarían las credenciales
            // Por ahora, simulamos un inicio de sesión exitoso
            showSuccessMessage('Login successful. Redirecting...');
            
            // Redirigir después de un breve delay
            setTimeout(function() {
                // En una implementación real, redirigiríamos al dashboard
                // window.location.href = 'dashboard.html';
                alert('Redirecting to dashboard...');
            }, 1500);
            
        }, 1000);
    }
    
    // Función para mostrar mensaje de éxito
    function showSuccessMessage(message) {
        // Crear elemento de mensaje de éxito
        const successElement = document.createElement('div');
        successElement.className = 'success-message';
        successElement.textContent = message;
        successElement.style.display = 'block';
        
        // Insertar antes del formulario
        loginForm.parentNode.insertBefore(successElement, loginForm);
    }
    
    // Función para manejar "Forgot a password?"
    function handleForgotPassword() {
        const email = emailInput.value.trim();
        
        if (!email || !validateEmail(email)) {
            alert('Please enter your institutional email to recover your password');
            emailInput.focus();
            return;
        }
        
        // Simular envío de correo de recuperación
        console.log('Sending recovery email to:', email);
        alert(`Recovery link has been sent to: ${email}`);
    }
    
    // Función para manejar "Create new account"
    function handleCreateAccount() {
        // En una implementación real, redirigiríamos a la página de registro
        // window.location.href = 'register.html';
        alert('Redirecting to registration page...');
    }
});