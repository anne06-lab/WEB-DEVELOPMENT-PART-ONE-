document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        });
    }

    const form = document.querySelector('#enquiryForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const fields = ['name', 'email', 'interest', 'message'];
            let valid = true;

            fields.forEach((fieldName) => {
                const field = document.getElementById(fieldName);
                const error = document.querySelector(`[data-error-for="${fieldName}"]`);

                if (!field.value.trim()) {
                    error.textContent = 'This field is required.';
                    valid = false;
                } else {
                    error.textContent = '';
                }
            });

            const email = document.getElementById('email');
            if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.querySelector('[data-error-for="email"]').textContent = 'Please enter a valid email address.';
                valid = false;
            }

            const message = document.getElementById('formMessage');

            if (valid) {
                message.textContent = 'Thank you! Your enquiry has been recorded for this demonstration.';
                form.reset();
            } else {
                message.textContent = 'Please correct the highlighted fields.';
            }
        });
    }
});
