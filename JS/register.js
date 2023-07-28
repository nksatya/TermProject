function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if( email != null && password != null ) {

        document.getElementById("registerMessage").style.display = "block";

        setTimeout(function(){
            window.location.href="login.html";
        },3000);
    }
}