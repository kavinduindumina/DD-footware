document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display order details
    function viewOrders() {
        // Fetch data for the orders
        fetch('https://localhost:7264/api/Order')
            .then(response => response.json())
            .then(data => {
                // Display the order details in the HTML table
                const orderTableBody = document.getElementById('orderTableBody');
                orderTableBody.innerHTML = '';

                data.forEach(order => {
                    const row = orderTableBody.insertRow();
                    row.insertCell(0).textContent = order.orderId.toString(); // Convert to string
                    row.insertCell(1).textContent = order.userId;
                    row.insertCell(2).textContent = order.itemCode;
                    row.insertCell(3).textContent = order.quentity.toString(); // Convert to string
                    row.insertCell(4).textContent = order.total;
                });
            })
            .catch(error => console.error('Error fetching order details:', error));
    }

    // Initial display of the order details
    viewOrders();
});
