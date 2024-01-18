document.addEventListener("DOMContentLoaded", function () {
    const addProductForm = document.getElementById('addProductForm');
    const successMessage = document.getElementById('successMessage');

    addProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(addProductForm);
        const productData = {};
        formData.forEach((value, key) => {
            productData[key] = value;
        });

        // Post data to the API endpoint
        fetch('https://localhost:7264/api/Product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data posted:', data);
                // If successful, display success message
                successMessage.style.display = 'block';
            })
            .catch(error => {
                console.error('Error posting data:', error);
                // Optionally, display an error message
            });
    });
});
