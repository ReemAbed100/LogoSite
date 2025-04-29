// script.js

document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.getElementById("form-title");
  const loginBtn = document.getElementById("login-toggle");
  const registerBtn = document.getElementById("register-toggle");
  const submitBtn = document.getElementById("submit-btn");
  const nameField = document.getElementById("name-field");
  const emailField = document.getElementById("email-field");
  const passwordField = document.getElementById("password-field");
  const messageBox = document.getElementById("form-message");

  let isLogin = true;

  // Toggle Forms
  loginBtn.addEventListener("click", () => {
    isLogin = true;
    formTitle.textContent = "Login";
    nameField.style.display = "none";
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
    messageBox.textContent = "";
  });

  registerBtn.addEventListener("click", () => {
    isLogin = false;
    formTitle.textContent = "Register";
    nameField.style.display = "block";
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    messageBox.textContent = "";
  });

  // Submit Form
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;

    if (!email || !password || (!isLogin && !name)) {
      messageBox.textContent = "Please fill in all required fields.";
      messageBox.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      messageBox.textContent = "Please enter a valid email.";
      messageBox.style.color = "red";
      return;
    }

    // Simulate success
    if (isLogin) {
      messageBox.textContent = `Welcome back, ${email}!`;
    } else {
      messageBox.textContent = `Account created for ${name}.`;
    }
    messageBox.style.color = "green";

    // Reset fields
    if (!isLogin) nameField.value = "";
    emailField.value = "";
    passwordField.value = "";
  });

  function validateEmail(email) {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
