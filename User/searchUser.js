document.addEventListener("DOMContentLoaded", function () {
    function searchUser() {
        const searchUserIdInput = document.getElementById('searchUserId');
        const userIdToSearch = searchUserIdInput.value.trim();

        // Fetch user data for the specified user ID
        fetch(`https://localhost:7264/api/User/${userIdToSearch}`)
            .then(response => response.json())
            .then(data => {
                // Display the user details in the HTML
                const userDetails = document.getElementById('userDetails');
                userDetails.innerHTML = ''; // Clear previous details

                if (data.userId) {
                    userDetails.innerHTML = `
                        <h3>User Details:</h3>
                        <p><strong>User ID:</strong> ${data.userId}</p>
                        <p><strong>User Name:</strong> ${data.userName}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Number:</strong> ${data.number}</p>
                        <!-- Add more details as needed -->
                    `;
                } else {
                    userDetails.innerHTML = '<p>User not found</p>';
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    // Expose the searchUser function globally for the button click
    window.searchUser = searchUser;
});
