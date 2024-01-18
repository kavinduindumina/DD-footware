document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display the item list
    function displayItemList() {
        // Fetch data for the item list
        fetch('https://localhost:7264/api/Product')
            .then(response => response.json())
            .then(data => {
                // Display the item list in the HTML table
                const itemList = document.getElementById('itemList');
                itemList.innerHTML = ''; // Clear previous list

                data.forEach(item => {
                    const row = itemList.insertRow();

                    row.insertCell(0).textContent = item.itemCode;
                    row.insertCell(1).textContent = item.itemName;
                    row.insertCell(2).textContent = item.price;
                    row.insertCell(3).textContent = item.quentity;

                    const deleteCell = row.insertCell(4);
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.className = 'btn btn-danger';
                    deleteButton.addEventListener('click', () => deleteItem(item.itemCode));

                    deleteCell.appendChild(deleteButton);
                });
            })
            .catch(error => console.error('Error fetching item list:', error));
    }

    // Initial display of the item list
    displayItemList();

    // Function to delete an item
    window.deleteItem = function (itemCode) {
        // Confirm deletion
        const confirmDelete = confirm(`Are you sure you want to delete item with code ${itemCode}?`);
        if (!confirmDelete) {
            return;
        }

        // Perform deletion
        fetch(`https://localhost:7264/api/Product/${itemCode}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to delete item with code ${itemCode}`);
                }
                console.log(`Item with code ${itemCode} deleted successfully`);
                // Refresh the item list after deletion
                displayItemList();
            })
            .catch(error => console.error('Error deleting item:', error));
    };
});
