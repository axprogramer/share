function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="Ax" && pw=="123"){
      window.location.href="myDrive.html"
    }else if (un=="User" && pw=="515"){
      window.location.href="sharepoint.html"
    }
    
  }