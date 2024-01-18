document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(loginForm);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Replace the URL with your actual login API endpoint
        const loginEndpoint = 'https://localhost:7264/api/User'; // Example endpoint

        // Fetch user data from the API
        fetch(loginEndpoint)
            .then(response => response.json())
            .then(users => {
                // Check if the provided email and password match any user
                const matchedUser = users.find(user => user.email === userData.Email && user.password === userData.Password);

                const adminCredentials = {
                    email: 'admin@gmail.com',
                    password: '1234'
                };

                if (matchedUser) {
                    console.log('Login successful:', matchedUser);
                    window.location.href = 'loged.html';
                    // Optionally, redirect to the dashboard or perform other actions
                } else if (userData.Email === adminCredentials.email && userData.Password === adminCredentials.password) {
                    console.log('Admin login successful');
                    window.location.href = 'adminDashboard.html';
                    // Optionally, redirect to the admin dashboard or perform other admin actions
                } else {
                    console.log('Invalid email or password');
                    // Optionally, display an error message
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    });
});
