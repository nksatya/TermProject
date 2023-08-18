const dbName = 'loginDB';
const storeName = 'logins';

// Open or create the IndexedDB database
const request = indexedDB.open(dbName, 1);

request.onerror = (event) => {
    console.log('Error opening database:', event.target.error);
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    // Create an object store to store user data
    const objectStore = db.createObjectStore(storeName, { keyPath: 'email' });
    objectStore.createIndex('email', 'email', { unique: true });
};

// Function to add login details to IndexedDB
function addLoginDetails(email, password) {
    const db = request.result;
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const loginDetails = { email, password };
    const addRequest = objectStore.add(loginDetails);

    addRequest.onsuccess = (event) => {
        console.log('Login details added to IndexedDB.');
    };

    addRequest.onerror = (event) => {
        console.log('Error adding login details: ', event.target.error);
    };
}


function validateLogin(email, password) {
    const db = request.result;
    const transaction = db.transaction(storeName, 'readonly');
    const objectStore = transaction.objectStore(storeName);
    const getRequest = objectStore.get(email);

    getRequest.onsuccess = (event) => {
        const userDetails = event.target.result;

        if (userDetails && userDetails.password === password) {
            console.log('Login successful!');
            location.href = "https://nksatya.github.io/TermProject/HTML/category.html";
        } else {
            alert('Invalid email or password.');
        }
    };

    getRequest.onerror = (event) => {
        console.log('Error retrieving user details:', event.target.error);
    };
}


// Function to handle login form submission and validate login details
function validateForm() {
    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;

    addLoginDetails(loginEmail, loginPassword);
    validateLogin(loginEmail, loginPassword);

    const loginMessage = document.getElementById('loginMessage');
    loginMessage.style.display = 'block';

    return false; // Prevent form submission
}