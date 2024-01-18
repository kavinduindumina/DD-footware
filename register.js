/*
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
*/

function registerUser() {
    // Get form values

    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;

    // Create JSON payload
    var formData = {
        userName: userName,
        email: email,
        number: number,
        password: password
    };

    // Validate form data (you can add more validation as needed)

    // Send POST request to API
    fetch('https://localhost:7264/api/User', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.userId !== undefined) {
                // Assuming the response contains user data
                document.getElementById('registrationMessage').innerHTML = `
                    
                    User Name: ${data.userName}<br>
                    Email: ${data.email}<br>
                    Number: ${data.number}<br>
                    Password: ${data.password}<br>
                `;
            } else if (data.message !== undefined) {
                // Assuming the response contains a message
                document.getElementById('registrationMessage').innerHTML = data.message;
            } else {
                // Handle unexpected response format
                document.getElementById('registrationMessage').innerHTML = 'Unexpected response format.';
            }
        })
        .catch(error => {

        });
}
