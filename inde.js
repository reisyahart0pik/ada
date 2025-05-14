const form = document.getElementById('contact-form');
constnameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const succesMsg = document.getElementById('success-message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validatEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 

form.addEventListener('submit', function(e){
    e.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    succesMsg.textContent = '';

    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    }
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }
    if (valid) {
        // Simulate a successful form submission
        succesMsg.textContent = 'Form submitted successfully!';
        form.reset();
    }
})