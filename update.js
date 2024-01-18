/*
document.addEventListener("DOMContentLoaded", function () {
    const updateProductForm = document.getElementById('updateProductForm');

    function searchAndUpdate() {
        const updateItemCodeInput = document.getElementById('updateItemCode');
        const itemCodeToSearch = updateItemCodeInput.value.trim();

        // Fetch data for the specified item code
        fetch(`https://localhost:7264/api/Product/${itemCodeToSearch}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data received for update:', data);

                // Populate the update form with the retrieved data
                document.getElementById('updateItemName').value = data.itemName.trim();
                document.getElementById('updatePrice').value = data.price.trim();
                document.getElementById('updateQuantity').value = data.quentity;
            })
            .catch(error => console.error('Error fetching data for update:', error));
    }

    updateProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(updateProductForm);
        const updatedProductData = {};
        formData.forEach((value, key) => {
            updatedProductData[key] = value;
        });

        // Update data using the item code
        const itemCodeToUpdate = document.getElementById('updateItemCode').value.trim();

        fetch(`https://localhost:7264/api/Product/${itemCodeToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProductData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data updated:', data);
                // If successful, you can update the table or perform any other actions
                searchAndUpdate(); // Optionally, refresh data after update
            })
            .catch(error => console.error('Error updating data:', error));
    });

    window.searchAndUpdate = searchAndUpdate; // Expose the function globally for button click
});
*/

document.addEventListener("DOMContentLoaded", function () {
    const updateProductForm = document.getElementById('updateProductForm');

    function searchAndUpdate() {
        const updateItemCodeInput = document.getElementById('updateItemCode');
        const itemCodeToSearch = updateItemCodeInput.value.trim();

        // Fetch data for the specified item code
        fetch(`https://localhost:7264/api/Product/${itemCodeToSearch}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received for update:', data);

                // Populate the update form with the retrieved data
                document.getElementById('updateItemCode2').value = data.itemCode.trim();
                document.getElementById('updateItemName').value = data.itemName.trim();
                document.getElementById('updatePrice').value = data.price.trim();
                document.getElementById('updateQuantity').value = data.quentity;
            })
            .catch(error => console.error('Error fetching data for update:', error));
    }

    updateProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const updatedProductData = {
            itemCode: document.getElementById('updateItemCode2').value.trim(),
            itemName: document.getElementById('updateItemName').value.trim(),
            price: document.getElementById('updatePrice').value.trim(),
            quentity: document.getElementById('updateQuantity').value,
        };

        // Update data using the item code
        const itemCodeToUpdate = document.getElementById('updateItemCode').value.trim();

        fetch(`https://localhost:7264/api/Product/${itemCodeToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProductData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to update data: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data updated:', data);
                // If successful, you can update the table or perform any other actions
                searchAndUpdate(); // Optionally, refresh data after update
            })
            .catch(error => console.error('Error updating data:', error));
    });

    window.searchAndUpdate = searchAndUpdate; // Expose the function globally for button click
});
