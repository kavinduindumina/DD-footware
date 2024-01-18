document.addEventListener("DOMContentLoaded", function () {
    const addOrderForm = document.getElementById('addOrderForm');

    addOrderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(addOrderForm);
        const orderData = {};
        formData.forEach((value, key) => {
            orderData[key] = value;
        });

        // Post data to the API endpoint
        fetch('https://localhost:7264/api/Order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Order added successfully:', data);
                // If successful, you can redirect to a different page or perform other actions
                alert('Order added successfully');
            })
            .catch(error => console.error('Error adding order:', error));
    });
});
