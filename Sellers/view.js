document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API endpoint
    fetch('https://localhost:7264/api/Product')
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data);
            // Populate the table with the retrieved data
            const tableBody = document.querySelector('#productTable tbody');
            data.forEach(product => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = product.itemCode.trim(); // Trim whitespace
                row.insertCell(1).textContent = product.itemName.trim(); // Trim whitespace
                row.insertCell(2).textContent = product.price.trim();    // Trim whitespace
                row.insertCell(3).textContent = product.quentity;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
