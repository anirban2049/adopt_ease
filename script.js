document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);

    // For demonstration, we'll just alert the user
    alert('Login successful! Welcome, ' + username + '!');
});