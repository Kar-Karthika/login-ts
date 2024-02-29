var password2 = document.getElementById("password1");
var uname2 = document.getElementById("username1");
var login = document.getElementById("submit1");
var result = document.getElementById("val2");
function check() {
    var pass2 = password2.value;
    var name2 = uname2.value;
    var nameget = localStorage.getItem("usname");
    var passget = localStorage.getItem("password");
    console.log("HWLLP");
    if (name2 == nameget && pass2 == passget) {
        result.textContent = "Successful";
    }
}
/*if (localStorage.getItem('usname')!== null) {
  console.log('The website key exists');
  
} else {
  console.log('The website key does NOT exist');
} }*/
login.addEventListener("click", check);
