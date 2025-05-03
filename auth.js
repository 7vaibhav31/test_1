document.addEventListener('DOMContentLoaded', function() {
     // DOM Elements
     const loginToggle = document.getElementById('loginToggle');
     const registerToggle = document.getElementById('registerToggle');
     const loginForm = document.getElementById('loginForm');
     const registerForm = document.getElementById('registerForm');
     const passwordInput = document.getElementById('registerPassword');
     const confirmInput = document.getElementById('registerConfirm');
     const strengthBars = document.querySelectorAll('.strength-bar');
     const strengthText = document.querySelector('.strength-text');
     const passwordRules = document.querySelectorAll('.password-rules li');
     const togglePasswordBtns = document.querySelectorAll('.toggle-password');
     const hamburger = document.querySelector('.hamburger');
     const navLinks = document.querySelector('.nav-links');
     
     // Modal functionality
const aboutLink = document.getElementById('aboutLink');
const featuresLink = document.getElementById('featuresLink');
const contactLink = document.getElementById('contactLink');
const aboutModal = document.getElementById('aboutModal');
const featuresModal = document.getElementById('featuresModal');
const contactModal = document.getElementById('contactModal');
const closeButtons = document.querySelectorAll('.close-modal');

// Function to open modal
function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for opening modals
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(aboutModal);
});

featuresLink.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(featuresModal);
});

contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(contactModal);
});

// Event listeners for closing modals
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});
     // Toggle between login and register forms
     function showLogin() {
         loginToggle.classList.add('active');
         registerToggle.classList.remove('active');
         loginForm.classList.add('active');
         registerForm.classList.remove('active');
     }
     
     function showRegister() {
         registerToggle.classList.add('active');
         loginToggle.classList.remove('active');
         registerForm.classList.add('active');
         loginForm.classList.remove('active');
     }
     
     // Event listeners for toggle buttons
     loginToggle.addEventListener('click', showLogin);
     registerToggle.addEventListener('click', showRegister);
     
     // Password strength checker
     function checkPasswordStrength(password) {
         let strength = 0;
         
         // Length check
         if (password.length >= 8) {
             strength += 1;
             passwordRules[0].classList.add('valid');
         } else {
             passwordRules[0].classList.remove('valid');
         }
         
         // Uppercase check
         if (/[A-Z]/.test(password)) {
             strength += 1;
             passwordRules[1].classList.add('valid');
         } else {
             passwordRules[1].classList.remove('valid');
         }
         
         // Number check
         if (/[0-9]/.test(password)) {
             strength += 1;
             passwordRules[2].classList.add('valid');
         } else {
             passwordRules[2].classList.remove('valid');
         }
         
         // Special char check
         if (/[^A-Za-z0-9]/.test(password)) {
             strength += 1;
             passwordRules[3].classList.add('valid');
         } else {
             passwordRules[3].classList.remove('valid');
         }
         
         // Update strength meter
         strengthBars.forEach((bar, index) => {
             bar.style.background = index < strength ? getStrengthColor(strength) : 'var(--gray-dark)';
         });
         
         // Update strength text
         const strengthMessages = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
         strengthText.textContent = strengthMessages[strength];
         strengthText.style.color = getStrengthColor(strength);
     }
     
     function getStrengthColor(strength) {
         const colors = ['#ff4d4d', '#ff7b25', '#ffcc00', '#a4ff00', '#0f0'];
         return colors[strength];
     }
     
     // Toggle password visibility
     function togglePasswordVisibility(input, button) {
         const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
         input.setAttribute('type', type);
         button.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
     }
     
     // Event listeners
     passwordInput.addEventListener('input', (e) => {
         checkPasswordStrength(e.target.value);
     });
     
     togglePasswordBtns.forEach(btn => {
         btn.addEventListener('click', function() {
             const input = this.parentElement.querySelector('input');
             togglePasswordVisibility(input, this);
         });
     });
     
     // Form submission handlers
     loginForm.addEventListener('submit', function(e) {
         e.preventDefault();
         // In a real app, you would handle login here
         alert('Login functionality will be implemented with Django later!');
     });
     
     registerForm.addEventListener('submit', function(e) {
         e.preventDefault();
         const password = passwordInput.value;
         const confirm = confirmInput.value;
         
         // Password match check
         if (password !== confirm) {
             alert('Passwords do not match!');
             return;
         }
         
         // Simulate email sending
         const email = document.getElementById('registerEmail').value;
         simulateEmailSend(email);
         
         // Show success and switch to login
         showLogin();
     });
     
     // Simulate email sending function
     function simulateEmailSend(email) {
         // In a real app, this would be an API call to your backend
         console.log(`Email would be sent to: ${email}`);
         
         // Create a beautiful notification
         const notification = document.createElement('div');
         notification.className = 'notification success';
         notification.innerHTML = `
             <i class="fas fa-check-circle"></i>
             <div>
                 <h3>Registration Successful!</h3>
                 <p>A welcome email has been sent to ${email}</p>
             </div>
         `;
         document.body.appendChild(notification);
         
         // Remove notification after 5 seconds
         setTimeout(() => {
             notification.classList.add('fade-out');
             setTimeout(() => notification.remove(), 300);
         }, 5000);
     }
     
     // Mobile menu toggle
     hamburger.addEventListener('click', function() {
         this.classList.toggle('active');
         navLinks.classList.toggle('active');
     });
     
     // Close mobile menu when clicking a link
     document.querySelectorAll('.nav-links a').forEach(link => {
         link.addEventListener('click', () => {
             hamburger.classList.remove('active');
             navLinks.classList.remove('active');
         });
     });
     
     // Add notification styles dynamically
     const style = document.createElement('style');
     style.textContent = `
         .notification {
             position: fixed;
             top: 1rem;
             right: 1rem;
             background: rgba(40, 40, 40, 0.95);
             border-left: 4px solid var(--success);
             padding: 1rem;
             border-radius: 0.5rem;
             display: flex;
             align-items: center;
             gap: 1rem;
             max-width: 350px;
             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
             transform: translateX(120%);
             animation: slideIn 0.3s forwards;
             z-index: 2000;
         }
         
         .notification i {
             font-size: 1.5rem;
             color: var(--success);
         }
         
         .notification h3 {
             color: var(--white);
             margin-bottom: 0.25rem;
         }
         
         .notification p {
             color: var(--gray-light);
             font-size: 0.9rem;
         }
         
         .fade-out {
             animation: fadeOut 0.3s forwards;
         }
         
         @keyframes slideIn {
             to { transform: translateX(0); }
         }
         
         @keyframes fadeOut {
             to { opacity: 0; transform: translateX(120%); }
         }
     `;
     document.head.appendChild(style);
 });