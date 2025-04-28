document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var formMessage = document.getElementById('formMessage');

    // Clear previous messages
    formMessage.textContent = '';
    formMessage.style.color = '';

    // Validate fields
    if (!name || !email || !phone || !message) {
        formMessage.textContent = 'Please fill in all the fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
    }

    // Validate phone format
    var phonePattern = /^05[0-9]{8}$/;
    if (!phonePattern.test(phone)) {
        formMessage.textContent = 'Phone number must start with 05 and be 10 digits.';
        formMessage.style.color = 'red';
        return;
    }

    // Success
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    formMessage.style.color = 'green';

    // Reset form
    document.getElementById('contactForm').reset();
});
