const firebaseConfig = {
    apiKey: "AIzaSyCP6ur4fas57KKVeLJou-YUoC3Ho6aCBQs",
    authDomain: "dd-footware.firebaseapp.com",
    projectId: "dd-footware",
    storageBucket: "dd-footware.appspot.com",
    messagingSenderId: "434977585441",
    appId: "1:434977585441:web:93a477d7254559e6bee660",
    /*measurementId: "G-Y1SN608NLT"*/
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const storage = firebase.storage();
const storageRef = storage.ref();

document.addEventListener("DOMContentLoaded", function () {
    // Initial data fetch (you can adapt this based on your needs)
    fetchData();
});

function fetchData() {
    // Fetch data from the API endpoint
    fetch('https://localhost:7264/api/Product')
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data);
            // Populate the table with the retrieved data
            const tableBody = document.querySelector('#productTable tbody');
            data.forEach(product => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = product.itemCode.trim();
                row.insertCell(1).textContent = product.itemName.trim();
                row.insertCell(2).textContent = product.price.trim();
                row.insertCell(3).textContent = product.quentity;

                // Display placeholder for images
                const imageCell = row.insertCell(4);
                imageCell.textContent = "";

                // Call the displayImage function to show the associated images
                displayImages(product.itemCode.trim(), imageCell);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayImages(id, imageCell) {
    const folderName = document.getElementById('folderName').value;

    // Get the reference to the specified folder
    const folderRef = storageRef.child('images/' + folderName + '/' + id);

    // List all items in the folder
    folderRef.listAll().then(result => {
        if (result.items.length === 0) {
            imageCell.textContent = "No images found.";
        } else {
            // Display each image in the folder
            result.items.forEach(itemRef => {
                itemRef.getDownloadURL().then(url => {
                    const image = document.createElement('img');
                    image.src = url;
                    image.style.maxWidth = '150px'; // Adjust image size if needed

                    // Append the image to the container
                    imageCell.appendChild(image);
                });
            });
        }
    }).catch(error => {
        console.error('Error fetching images:', error);
        imageCell.textContent = "Error loading images.";
    });
}