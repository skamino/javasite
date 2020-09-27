"use strict";

(function() {
    function Start()
    {
        console.log("auth started...");
        val_cookie();
    }

    function val_cookie(){
        let cookie = document.cookie;
        console.log(cookie);
        if(cookie.username === "peter welly"){
            load_page();
        } else {
            //window.location.replace("https://www.google.ca");
        }
        let x = document.cookie;
        console.log(x);
    }

    function load_page()
    {
        let XHR = new XMLHttpRequest();

        XHR.open("GET", "./Partial/java_main.html");
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let main_body = document.getElementsByTagName("main")[0];
            main_body.innerHTML = XHR.responseText;
//first lets add callbacks to the main buttons
            let git_button = document.getElementById("toGit");
            git_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://github.com/skamino");   
            });
            let exit_button = document.getElementById("exit");
            exit_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://skamino.github.io/javasite/index.html");
            });

            let thumbs = document.getElementsByTagName("button");
            for(const butt of thumbs){
                butt.addEventListener("click", (event)=>{
                    event.preventDefault();
                    let but_id = butt.getAttribute("id");
                    switch_function(but_id);
                });
            }


           /* let lesson1 = document.getElementById("lesson1");
            lesson1.addEventListener("click", (event) =>{
                event.preventDefault();
                //call function to reload page
            });
            let src1 = document.getElementById("src1");
            src1.addEventListener("click", (event) =>{
                event.preventDefault();
                //call function to reload page
            });*/
        })
    }

    function switch_function(page){
        document.title = page;
        window.history.pushState("", "", page);

        let XHR = new XMLHttpRequest();

        let partial = "./Partial/" + page + ".html";
        console.log(partial);

        XHR.open("GET", partial);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let main_body = document.getElementsByTagName("main")[0];
            main_body.innerHTML = XHR.responseText;

            let git_button = document.getElementById("toGit");
            git_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://github.com/skamino");   
            });
            let exit_button = document.getElementById("exit");
            exit_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://skamino.github.io/javasite/index.html");
            });
            let thumbs = document.getElementsByTagName("button");
            for(const butt of thumbs){
                butt.addEventListener("click", (event)=>{
                    event.preventDefault();
                    let but_id = butt.getAttribute("id");
                    switch_function(but_id);
                });
            }
        });
        /*switch(page)
        {
            case "lesson1":

                break;
            case "src1":
                break;
            default:
                break;
        }*/
    }
    window.addEventListener("load", Start, false);
})();