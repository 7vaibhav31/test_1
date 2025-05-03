// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that open modals
    const aboutLink = document.querySelector('a[href="#about"]');
    const featuresLink = document.querySelector('a[href="#features"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    
    // Get modal elements
    const aboutModal = document.getElementById('aboutModal');
    const featuresModal = document.getElementById('featuresModal');
    const contactModal = document.getElementById('contactModal');
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Function to open modal
    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Function to close modal
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
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
    
    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! (This is a demo)');
            closeModal(contactModal);
            contactForm.reset();
        });
    }
});