const password2=document.getElementById("password1")as HTMLInputElement
const uname2=document.getElementById("username1") as HTMLInputElement
const login=document.getElementById("submit1")as HTMLInputElement
const result=document.getElementById("val2")as HTMLInputElement
function check():void{
   const pass2=password2.value;
    const name2=uname2.value;
    const nameget=localStorage.getItem("usname");
    const passget=localStorage.getItem("password");
    console.log("HWLLP");
    if(name2==nameget && pass2==passget)
    {
      result.textContent="Successful";
    }
  }
  /*if (localStorage.getItem('usname')!== null) {
    console.log('The website key exists');
    
  } else {
    console.log('The website key does NOT exist');
 } }*/

login.addEventListener("click",check);
