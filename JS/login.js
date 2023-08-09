// Create or open the IndexedDB database
const dbName = 'loginDB';
const storeName = 'logins';
const request = indexedDB.open(dbName, 1);

request.onerror = (event) => {
    console.log('Error opening database: ', event.target.error);
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore(storeName, { keyPath: 'email' });
    objectStore.createIndex('password', 'password', { unique: false });
};

// Function to add login details to IndexedDB
function addLoginDetails(email, password) {
    const db = request.result;
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const loginDetails = { email, password };
    const request = objectStore.add(loginDetails);

    request.onsuccess = (event) => {
        console.log('Login details added to IndexedDB.');
    };

    request.onerror = (event) => {
        console.log('Error adding login details: ', event.target.error);
    };
}

 // Function to check login details from IndexedDB
 function checkLoginDetails(email, password) {
    const db = request.result;
    const transaction = db.transaction(storeName, 'readonly');
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.get(email);

    request.onsuccess = (event) => {
        const loginDetails = event.target.result;

        if (loginDetails && loginDetails.password === password) {
            console.log('Login successful!');
        } else {
            console.log('Invalid email or password.');
        }
    };

    request.onerror = (event) => {
        console.log('Error retrieving login details: ', event.target.error);
    };
}

// Function to handle form submission and store login details
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    addLoginDetails(email, password);
    checkLoginDetails(email, password);

    return false; // Prevent form submission
}

/*function validateForm() {
    // Get form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Validate email and password
    if (email === "abc@gmail.com" && password === "12345") {

        // Show the login message
        document.getElementById("loginMessage").style.display = "block";

        // Store the email in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        setTimeout(function(){
            window.location.href="login.html";
        },3000);// Redirect after 3 seconds

    } else {
        // Hide the login message
        document.getElementById("loginMessage").style.display = "none";
        alert("Invalid email or password.");

    }
}*/

