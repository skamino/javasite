"use strict";

(function() { 
    function Start()
    {
        console.log("App Started...");
        control_button();
    }
    function control_button(){
        let butt_object = document.getElementsByTagName("button");
        butt_object[0].addEventListener("click", function(event){
            event.preventDefault();
            check_cred();
        })
    }
    function check_cred(){
        let uname = document.getElementById("inputEmail").value;
        let pass = document.getElementById("inputPassword").value;
        let steve = document.getElementById("isteve");
        if(steve.checked == true){}
        else{
            alert("please love me");
        }
        if(uname === "peter" && pass === "welly"){
            //send to the real index page
            let date = new Date(Date.now() + 86400e3);
            date = date.toUTCString();
            document.cookie = "username=peter welly; max-age=3600; secure; path=https://skamino.github.io/javasite/auth.html";
            window.location.replace("https://skamino.github.io/javasite/auth.html");
        } else {
            window.location.replace("https://skamino.github.io/javasite/auth.html");
        }
    }

    //where we make it more like an angular site
    function loadStart()
    {
        let title = document.title;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./Partial/signin.html");
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("body")[0];
            html.innerHTML = XHR.responseText;

            control_button();
        });
    }

    window.addEventListener("load", Start, false);
})();