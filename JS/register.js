const dbName = 'RegistrationDB';
const storeName = 'users';

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

function addUserToDB(user) {
    const db = request.result;
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    objectStore.add(user);
}

function validateForm() {
    // Your form validation logic here
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (fname == undefined || lname == undefined || email == undefined || password == undefined){
        return false;
    }

    const user = { fname, lname, email, password };
    addUserToDB(user);

    const registerMessage = document.getElementById('registerMessage');
    registerMessage.style.display = 'block';
}

