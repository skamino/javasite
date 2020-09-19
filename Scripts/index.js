(function() { 
    function Start()
    {
        console.log("App Started...");
        control_button();
    }
    function control_button(){
        let butt_object = document.getElementsByName("button");
        butt_object[0].addEventListener("click", function(event)){
            Event.preventDefault();
            check_cred();
        }
    }
    function check_cred(){
        let uname = document.getElementById("inputEmail").innerHTML;
        let pass = document.getElementById("inputPassword").innerHTML;
        if(uname === "peter" && pass === "welly"){
            //send to the real index page
            console.log("uname and password correct");
        }
    }
    window.addEventListener("load", Start, false);
})();