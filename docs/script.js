// Function to handle user registration
document.getElementById('register-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const preferences = document.getElementById('preferences').value;

    const user = {
        name,
        email,
        password,
        preferences,
        role: email === 'admin@example.com' ? 'admin' : 'user', // Default admin email
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});

// Function to handle user login
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        alert('Invalid login credentials.');
    }
});

// Function to display the admin panel on the homepage if an admin is logged in
window.onload = function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.innerText = `Welcome, ${loggedInUser.name}!`;

        if (loggedInUser.role === 'admin') {
            const adminPanel = document.getElementById('admin-panel');
            adminPanel.style.display = 'block';
        }
    }
};

