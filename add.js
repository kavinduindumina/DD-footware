document.addEventListener("DOMContentLoaded", function () {
    const addProductForm = document.getElementById('addProductForm');
    const successMessage = document.getElementById('successMessage');

    addProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(addProductForm);
        const productData = {};
        formData.forEach((value, key) => {
            productData[key] = value;
        });

        // Post data to the API endpoint
        fetch('https://localhost:7264/api/Product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data posted:', data);
                // If successful, display success message
                successMessage.style.display = 'block';
            })
            .catch(error => {
                console.error('Error posting data:', error);
                // Optionally, display an error message
            });
    });
});


/*

const firebaseConfig = {
    apiKey: "AIzaSyCP6ur4fas57KKVeLJou-YUoC3Ho6aCBQs",
    authDomain: "dd-footware.firebaseapp.com",
    projectId: "dd-footware",
    storageBucket: "dd-footware.appspot.com",
    messagingSenderId: "434977585441",
    appId: "1:434977585441:web:93a477d7254559e6bee660",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const storage = firebase.storage();
const storageRef = storage.ref();

// Function to add product details (you can customize this function)
function addProduct() {
    // Add your logic to collect and store product details
    console.log('Product added successfully!');
}

// Function to upload an image
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const idInput = document.getElementById('idInput');

    const file = fileInput.files[0];
    const id = idInput.value.trim(); // Trim to remove leading and trailing whitespaces

    if (file && id) {
        // Create a reference to the storage location with the ID
        const imageRef = storageRef.child('images/' + id + '/' + file.name);

        // Upload the file
        imageRef.put(file).then(() => {
            console.log('Image uploaded successfully!');
            displayImage(id, file);
        });
    } else {
        console.error('Please select a file and enter an ID');
    }
}

// Function to display an image
function displayImage(id, file) {
    const imageContainer = document.getElementById('imageContainer');

    // Get the download URL of the uploaded image
    storageRef.child('images/' + id + '/' + file.name).getDownloadURL().then((url) => {
        // Create an image element and set its source to the download URL
        const image = document.createElement('img');
        image.src = url;

        // Append the image to the container
        imageContainer.appendChild(image);
    });
}*/
