const form = document.getElementById("login-form");
const identifierInput = document.getElementById("identifier");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("rememberMe");
const identifierError = document.getElementById("identifierError");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[+\d][\d\s()-]{6,}$/;
  return phoneRegex.test(phone);
}

function validateIdentifier(value) {
  if (value.includes("@")) {
    return validateEmail(value);
  }
  return validatePhone(value);
}

function resetErrors() {
  identifierError.style.display = "none";
  passwordError.style.display = "none";
  identifierInput.removeAttribute("aria-invalid");
  passwordInput.removeAttribute("aria-invalid");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetErrors();

  const identifier = identifierInput.value.trim();
  const password = passwordInput.value.trim();

  let hasError = false;

  if (!identifier || !validateIdentifier(identifier)) {
    identifierError.style.display = "block";
    identifierInput.setAttribute("aria-invalid", "true");
    hasError = true;
  }

  if (password.length < 6) {
    passwordError.style.display = "block";
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordInput.setAttribute("aria-invalid", "true");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  if (rememberMeCheckbox.checked) {
    localStorage.setItem("opsRememberedIdentifier", identifier);
  } else {
    localStorage.removeItem("opsRememberedIdentifier");
  }

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Logging in...";

  setTimeout(() => {
    alert("Login successful!");
    submitButton.disabled = false;
    submitButton.textContent = "Log In";
  }, 300);
});

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    togglePassword.src =
      type === "password"
        ? "Images/hidden password.png"
        : "Images/show password.png";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const remembered = localStorage.getItem("opsRememberedIdentifier");
  if (remembered) {
    identifierInput.value = remembered;
    rememberMeCheckbox.checked = true;
  }
});
