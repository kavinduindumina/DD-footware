document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display seller list
    function viewSellers() {
        // Fetch data for the sellers
        fetch('https://localhost:7264/api/Seller')
            .then(response => response.json())
            .then(data => {
                // Display the seller list in the HTML table
                const sellerTableBody = document.getElementById('sellerTableBody');
                sellerTableBody.innerHTML = '';

                data.forEach(seller => {
                    const row = sellerTableBody.insertRow();
                    row.insertCell(0).textContent = seller.sellerId;
                    row.insertCell(1).textContent = seller.storeName;
                    row.insertCell(2).textContent = seller.email;
                    row.insertCell(3).textContent = seller.password; // Display password
                });
            })
            .catch(error => console.error('Error fetching seller list:', error));
    }

    // Initial display of the seller list
    viewSellers();
});
