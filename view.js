
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



                // Create an img element for the Image Column
                const imgElement = document.createElement('img');
                imgElement.src = product.images; // Assuming product.images contains the image URL
                imgElement.alt = 'Product Image'; // Set alt text as needed
                imgElement.width = '50'; // Adjust the width as needed
                imgElement.height = '50'; // Adjust the height as needed


                // Append the img element to the cell
                const imageCell = row.insertCell(4);
                imageCell.appendChild(imgElement);


            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


/*
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
    import {getStorage, ref, listAll, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

    // Your Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCP6ur4fas57KKVeLJou-YUoC3Ho6aCBQs",
    authDomain: "dd-footware.firebaseapp.com",
    projectId: "dd-footware",
    storageBucket: "dd-footware.appspot.com",
    messagingSenderId: "434977585441",
    appId: "1:434977585441:web:93a477d7254559e6bee660"
};

    // Initialize the Firebase app
    const app = initializeApp(firebaseConfig);

    // Get a reference to the Firebase Storage
    const storage = getStorage(app);
    const imageContainer = document.getElementById("imageContainer");

    // Fetch data from the API endpoint
    fetch('https://localhost:7264/api/Product')
    .
    then(response => response.json()
)
    .
    then(data => {
    console.log('Data received:', data);
    const tableBody = document.getElementById("tableBody");
    data.forEach(product => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = product.itemCode.trim();
    row.insertCell(1).textContent = product.itemName.trim();
    row.insertCell(2).textContent = product.price.trim();
    row.insertCell(3).textContent = product.quentity;

    // Display the image in a cell
    const imgCell = row.insertCell(4);
    if (product.image) {
    const imgRef = ref(storage, `images/${product.image}`);
    getDownloadURL(imgRef).then((url) => {
    createImageElement(url, imgCell);
});
}
});
})
    .
    catch(error => console.error('Error fetching data:', error
))
;

    function createImageElement(url, container
) {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.height = "50";
    imgElement.width = "50";
    container.appendChild(imgElement);
}

*/

/*000000000000000000000000000000000*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP6ur4fas57KKVeLJou-YUoC3Ho6aCBQs",
    authDomain: "dd-footware.firebaseapp.com",
    projectId: "dd-footware",
    storageBucket: "dd-footware.appspot.com",
    messagingSenderId: "434977585441",
    appId: "1:434977585441:web:93a477d7254559e6bee660"
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage
const storage = getStorage(app);
const imageContainer = document.getElementById("imageContainer");

// List of folder names
const folderNames = ['11', '12', '21', '35', '36', '37', 'RE01','100'];

// Display existing images on page load
displayImages();

async function displayImages() {
    try {
        // Loop through each folder
        for (const folderName of folderNames) {
            // Get a list of all items (files) in the current folder
            const imageFolderRef = ref(storage, 'images/' + folderName);
            const imageFiles = await listAll(imageFolderRef);

            // Loop through each image file and display it
            imageFiles.items.forEach(async (imageRef) => {
                const url = await getDownloadURL(imageRef);
                createImageElement(url);
            });
        }
    } catch (error) {
        console.error('Error displaying images:', error);
    }
}

function createImageElement(url) {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.height = "200";
    imgElement.width = "200";

    imageContainer.appendChild(imgElement);
}
