document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display the user list
    function displayUserList() {
        // Fetch data for the user list
        fetch('https://localhost:7264/api/User')
            .then(response => response.json())
            .then(data => {
                // Display the user list in the HTML
                const userList = document.getElementById('userList');
                userList.innerHTML = ''; // Clear previous list

                data.forEach(user => {
                    const row = userList.insertRow();
                    row.insertCell(0).textContent = user.userId;
                    row.insertCell(1).textContent = user.userName;
                    row.insertCell(2).textContent = user.email;
                    row.insertCell(3).textContent = user.number;
                    // Add more cells for additional user properties as needed
                });
            })
            .catch(error => console.error('Error fetching user list:', error));
    }

    // Initial display of the user list
    displayUserList();
});
