function authenticateUser() {
    const emailInput = document.getElementById('email').value;
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Hardcoded credentials for demonstration, replace with actual authentication logic
    const hardcodedEmail = 'user@example.com';
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (emailInput === hardcodedEmail && usernameInput === hardcodedUsername && passwordInput === hardcodedPassword) {
        // Authentication successful, redirect to the main page or perform other actions
       // alert('Login successful! ');
       // window.location.href = '../last/index.html'; // Replace with the actual main page URL
        redirectToMainPage();
    } else {
        // Authentication failed, show an error message
        alert('Invalid email, username, or password. Please try again.');
    }
}

// Handle "Enter" key press for login form
document.getElementById('loginForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        authenticateUser();
    }
});

function redirectToMainPage() {
    window.location.href = '../last/index.html'; // Adjust the path to match your folder structure
}