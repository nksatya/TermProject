function init() {
    let userSession = JSON.parse(localStorage.getItem("userSession"));
    if (userSession.email != null || userSession.email != undefined) {
        document.getElementById("loginIcons").setAttribute("hidden", "true");
    }
}

function validateForm() {
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

        setTimeout(function () {
            window.location.href = "login.html";
        }, 3000);// Redirect after 3 seconds

    } else {
        // Hide the login message
        document.getElementById("loginMessage").style.display = "none";
        alert("Invalid email or password.");

    }
}

