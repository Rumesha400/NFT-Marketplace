document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var passphrase = document.getElementById('passphrase').value;
    if (passphrase === 'vansh') {
        // Successful login, redirect or perform further actions
        window.location.href = '/html/index.html'; // Redirect to dashboard page
    } else {
        document.getElementById('error-message').textContent = 'Invalid passphrase. Please try again.';
    }
});