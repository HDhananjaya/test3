function Formvalidation() {
    var a = document.forms["form"]["email"].value;
    var b = document.forms["form"]["uname"].value;
    var c = document.forms["form"]["password"].value;
    var d = document.forms["form"]["cpassword"].value;
    

    if(a==""){
        alert("Email is Required!");
        return false;
    }
    if(b==""){
        alert("Username is Required!");
        return false;
    }
    if(c==""){
        alert("Password is Required!");
        return false;
    }
    if(d==""){
        alert("Confirm Password is Required!");
        return false;
    }
    if(c != d){
        alert("Passwords are not matching!");
        return false;
    }
    else{
        return true;
    }
    
}