// Get form elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const rememberMeCheckbox = document.getElementById('rememberMe');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Validation regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordMinLength = 6;

// Toggle password visibility
togglePasswordBtn.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Update icon
    const eyeIcon = this.querySelector('.eye-icon');
    eyeIcon.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Email validation
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', function() {
    if (this.value) {
        document.getElementById('emailError').textContent = '';
    }
});

// Password validation
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('input', function() {
    if (this.value) {
        document.getElementById('passwordError').textContent = '';
    }
});

// Validate email
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    
    if (!emailValue) {
        emailError.textContent = 'Email is required';
        return false;
    }
    
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    
    emailError.textContent = '';
    return true;
}

// Validate password
function validatePassword() {
    const passwordValue = passwordInput.value;
    const passwordError = document.getElementById('passwordError');
    
    if (!passwordValue) {
        passwordError.textContent = 'Password is required';
        return false;
    }
    
    if (passwordValue.length < passwordMinLength) {
        passwordError.textContent = `Password must be at least ${passwordMinLength} characters`;
        return false;
    }
    
    passwordError.textContent = '';
    return true;
}

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous messages
    hideMessages();
    
    // Validate all fields
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (!isEmailValid || !isPasswordValid) {
        return;
    }
    
    // Disable submit button
    const submitButton = loginForm.querySelector('.login-button');
    submitButton.disabled = true;
    submitButton.textContent = 'Logging in...';
    
    // Simulate API call (replace with actual authentication logic)
    setTimeout(() => {
        const email = emailInput.value.trim();
        
        // For demo purposes: accept any valid email/password combination
        // In production, this would be replaced with actual backend authentication
        if (performLogin(email, passwordInput.value)) {
            showSuccessMessage(`Welcome back, ${email}!`);
            
            // Save remember me preference
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
            
            // Reset form
            setTimeout(() => {
                loginForm.reset();
                // Redirect or perform next action
                console.log('Login successful. Redirecting to dashboard...');
                // Uncomment the line below to redirect
                // window.location.href = '/dashboard.html';
            }, 1500);
        } else {
            showErrorMessage('Login failed. Please check your credentials and try again.');
        }
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Login';
    }, 1500);
});

// Simulate login (replace with actual API call)
function performLogin(email, password) {
    // This is a mock implementation
    // Replace with actual backend API call
    
    // For demo: accept login if email and password are valid format
    if (emailPattern.test(email) && password.length >= passwordMinLength) {
        return true;
    }
    
    return false;
}

// Show success message
function showSuccessMessage(message) {
    successMessage.textContent = message;
    successMessage.classList.add('show');
    errorMessage.classList.remove('show');
}

// Show error message
function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    successMessage.classList.remove('show');
}

// Hide messages
function hideMessages() {
    successMessage.classList.remove('show');
    errorMessage.classList.remove('show');
}

// Load remembered email on page load
window.addEventListener('load', function() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// Clear error messages when user starts typing
emailInput.addEventListener('input', function() {
    errorMessage.classList.remove('show');
});

passwordInput.addEventListener('input', function() {
    errorMessage.classList.remove('show');
});