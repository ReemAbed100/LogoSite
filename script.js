document.addEventListener("DOMContentLoaded", function () {
  const formToggleButtons = document.querySelectorAll(".form-toggle button");
  const authForm = document.querySelector(".auth-form");

  let isLogin = true; // Default form mode

  // Switch between Login and Signup forms
  formToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      isLogin = button.textContent.toLowerCase() === "login";
      renderForm();
    });
  });

  function renderForm() {
    authForm.innerHTML = `
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      ${!isLogin ? '<input type="password" placeholder="Confirm Password" required />' : ''}
      <button type="submit">${isLogin ? "Login" : "Sign Up"}</button>
    `;
  }

  // Initial render
  renderForm();

  // Handle form submission
  authForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = authForm.querySelectorAll("input");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      alert("Please fill in all fields.");
      return;
    }

    const email = inputs[0].value;
    const password = inputs[1].value;
    const confirmPassword = inputs[2] ? inputs[2].value : null;

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(isLogin ? "Logging in..." : "Signing up...");
    console.log("Email:", email);
    console.log("Password:", password);

    // Placeholder for real API call
    alert(isLogin ? "Login successful!" : "Signup successful!");
    authForm.reset();
  });
});
