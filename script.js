// Toggle between Login and Signup form
const toggleSignupButton = document.querySelector('.toggle-signup');
const toggleForgotButton = document.querySelector('.toggle-forgot');

// Form toggle function
function toggleFormView() {
  const formContainer = document.querySelector('.auth-container');
  const formTitle = formContainer.querySelector('h2');

  if (formTitle.textContent === "Login") {
    formTitle.textContent = "Sign Up";
    // Change form input fields for Sign Up (example)
    formContainer.querySelector('input[type="email"]').placeholder = "Enter your email";
    formContainer.querySelector('input[type="password"]').placeholder = "Create a password";
  } else {
    formTitle.textContent = "Login";
    // Reset form input fields for Login (example)
    formContainer.querySelector('input[type="email"]').placeholder = "Email";
    formContainer.querySelector('input[type="password"]').placeholder = "Password";
  }
}

// Event listeners for toggling forms
toggleSignupButton.addEventListener('click', () => {
  toggleFormView();
  toggleSignupButton.classList.toggle('active');
  toggleForgotButton.classList.remove('active');
});

toggleForgotButton.addEventListener('click', () => {
  toggleFormView();
  toggleForgotButton.classList.toggle('active');
  toggleSignupButton.classList.remove('active');
});

// Form Validation (Simple)
const loginForm = document.querySelector('.auth-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');

  // Simple Validation
  if (!emailInput.value || !passwordInput.value) {
    alert("Both fields are required!");
    return;
  }

  // Simulating a successful login for now (you can replace with actual API call)
  alert("Logged in successfully!");
  // Reset form fields
  emailInput.value = '';
  passwordInput.value = '';
});
