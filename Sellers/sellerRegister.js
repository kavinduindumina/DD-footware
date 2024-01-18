document.addEventListener("DOMContentLoaded", function () {
    const sellerRegisterForm = document.getElementById('sellerRegisterForm');

    sellerRegisterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(sellerRegisterForm);
        const sellerData = {};
        formData.forEach((value, key) => {
            sellerData[key] = value;
        });

        // Post data to the server (replace URL with your actual API endpoint)
        fetch('https://localhost:7264/api/Seller', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sellerData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Seller registered successfully:', data);
                // Optionally, you can redirect to a login page or perform other actions
            })
            .catch(error => console.error('Error registering seller:', error));
    });
});
