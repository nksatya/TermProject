function validateForm() {
    // Get form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Validate email and password
    if (email == "abc@gmail.com" && password == "12345") {
        document.getElementById("loginMessage").style.display = "block";
        setTimeout(function(){
            window.location.href="login.html";
        },3000);
    } else {
        document.getElementById("loginMessage").style.display = "none";
        alert("Invalid email or password.");
    }
}

