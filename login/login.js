var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "kar" && password == "kar" || username=="MCA" && password =="MCA"){
alert ("Login successfully");
window.location = "home.html"; // Redirecting to other page.
//document.write( "User name" + username +"     "+  "Password"  +password);
return username,password;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}