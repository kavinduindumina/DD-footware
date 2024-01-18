document.addEventListener("DOMContentLoaded", function () {
    const sellerLoginForm = document.getElementById('sellerLoginForm');

    sellerLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(sellerLoginForm);
        const sellerData = {};
        formData.forEach((value, key) => {
            sellerData[key] = value;
        });

        // Replace the URL with your actual login API endpoint
        const loginEndpoint = 'https://localhost:7264/api/Seller'; // Example endpoint

        // Fetch seller data from the API
        fetch(loginEndpoint)
            .then(response => response.json())
            .then(sellers => {
                // Check if the provided email and password match any seller
                const matchedSeller = sellers.find(seller => seller.email === sellerData.email && seller.password === sellerData.password);

                if (matchedSeller) {
                    console.log('Login successful:', matchedSeller);
                    // Redirect or perform other actions upon successful login
                    window.location.href = 'sellerDashboard.html';
                    // You may also consider using window.location.href = 'dashboard.html';
                } else {
                    console.log('Invalid email or password');
                    // Display an error message or take appropriate action
                }
            })
            .catch(error => console.error('Error fetching seller data:', error));
    });
});
