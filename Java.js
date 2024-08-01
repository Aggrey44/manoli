// Common JavaScript functionality for all pages
document.addEventListener('DOMContentLoaded', function () {
    // Basic form validation
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                e.preventDefault(); // Prevent form submission
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault(); // Prevent form submission
            }
        });
    }

    function validateEmail(email) {
        // Basic email validation regex
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});