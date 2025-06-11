document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = "Passwords do not match.";
    return;
  }

  if (!name || !email || !password) {
    message.style.color = 'red';
    message.textContent = "Please fill out all fields.";
    return;
  }

  // Simulate successful registration
  message.style.color = 'green';
  message.textContent = `Registration successful! Welcome, ${name}.`;

  // Optionally reset the form
  this.reset();
});
