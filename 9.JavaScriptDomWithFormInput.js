/* Implement JavaScript validation for the form fields:

f. Name should not be empty and should contain only letters.

g. Email should be a valid email address.

h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.

i. Confirm Password should match the Password field.

j. Display appropriate error messages for invalid fields. 

*/

const myForm = document.getElementById('myForm');

const nameField = document.getElementById('inputName');
const emailField = document.getElementById('inputEmail');
const passwordField = document.getElementById('inputPassword');
const confirmPasswordField = document.getElementById('confirmInputPassword');

const nameError = document.getElementById('inputNameError');
const emailError = document.getElementById('inputEmailError');
const passwordError = document.getElementById('inputPasswordError');
const confirmPasswordError = document.getElementById('confirmInputPasswordError');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Validate name field
  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required.';
  } else if (!/^[a-zA-Z]+$/.test(nameField.value)) {
    nameError.textContent = 'Name should only contain letters.';
  }

  // Validate email field
  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required.';
  } else if (!isValidEmail(emailField.value)) {
    emailError.textContent = 'Invalid email address.';
  }

  // Validate password field
  if (passwordField.value.trim() === '') {
    passwordError.textContent = 'Password is required.';
  } else if (!isValidPassword(passwordField.value)) {
    passwordError.textContent = 'Password should have a minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one digit.';
  }

  // Validate confirm password field
  if (confirmPasswordField.value.trim() === '') {
    confirmPasswordError.textContent = 'Confirm Password is required.';
  } else if (confirmPasswordField.value !== passwordField.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  }
});

function isValidEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Regular expression for password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
}
