function loginForm(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //validate the form
    if(email==""){
        alert("Email is reqruired");
        window.location.reload();
        return false;

    }
    if(password==""){
        alert("Password is required");
        return false;
    }
    if(email!=null || password!=null){
        alert("Login Successfully");
        window.location.href("./index.html");

      }

}