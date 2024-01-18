document.addEventListener("DOMContentLoaded", function () {
    function searchItem() {
        const searchItemCode = document.getElementById('searchItemCode').value.trim();

        // Fetch data for the specified item code
        fetch(`https://localhost:7264/api/Product/${searchItemCode}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data received for search:', data);

                // Display the item details in the table
                const itemDetailsTable = document.getElementById('itemDetailsTable');
                itemDetailsTable.innerHTML = ''; // Clear previous details

                const row = itemDetailsTable.insertRow();
                row.insertCell(0).textContent = data.itemName;
                row.insertCell(1).textContent = data.price;
                row.insertCell(2).textContent = data.quentity;
            })
            .catch(error => console.error('Error fetching data for search:', error));
    }

    window.searchItem = searchItem; // Expose the function globally for button click
});
