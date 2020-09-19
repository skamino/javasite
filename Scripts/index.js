"use strict";

(function() { 
    function Start()
    {
        console.log("App Started...");
        control_button();
    }
    function control_button(){
        let butt_object = document.getElementsByTagName("button");
        console.log(butt_object);
        butt_object[0].addEventListener("click", function(event){
            event.preventDefault();
            check_cred();
        })
    }
    function check_cred(){
        let uname = document.getElementById("inputEmail").innerHTML;
        console.log(uname);
        let pass = document.getElementById("inputPassword").innerHTML;
        console.log(pass);
        if(uname === "peter" && pass === "welly"){
            //send to the real index page
            console.log("uname and password correct");
        }
    }
    window.addEventListener("load", Start, false);
})();