function validateForm() {

    const registrationForm = document.getElementsByClassName('register-form');

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const registrationDetails = {
        fname : fname,
        lname : lname,
        email : email,
        password : password,
    };

    const registerationJSON = JSON.stringify(registrationDetails);

    localStorage.setItem("registrationDetails", registerationJSON);

    if( registrationDetails != null ) {

        document.getElementById("registerMessage").style.display = "block";

        setTimeout(function(){
            window.location.href="login.html";
        },3000);

        // registrationForm.reset();
    }
}