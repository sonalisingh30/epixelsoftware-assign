document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      first_name: document.getElementById("firstName").value,
      last_name: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phoneNumber").value,
      password: document.getElementById("password").value,
    };

    // Basic validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone_number ||
      !formData.password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!validatePhoneNumber(formData.phone_number)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // If validation passes, log the form data
    console.log(formData);
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(number) {
  const re = /^\d{10}$/;
  return re.test(String(number));
}
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple validation checks
    if (firstName === "" || lastName === "") {
      alert("First Name and Last Name are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // If all validation checks pass
    alert("Registration successful!");
  });
