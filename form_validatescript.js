function validateForm() {

  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Name validation
  if (name === "") {
    alert("Name is required");
    return false;
  }

  // Email validation
  if (email === "") {
    alert("Email is required");
    return false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}