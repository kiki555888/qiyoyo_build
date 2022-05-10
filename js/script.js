"use strict";
/*nav flow */
const nav =  document.querySelectorAll(".menu-item");
const sectionhome = document.querySelector(".home");
const sectionservice = document.querySelector(".service");
const sectionteam = document.querySelector(".team");
const sectionlocation = document.querySelector(".location");
/*button flow */
/*const buttonaction = document.querySelector(".btn-action");*/
/*eyes flow */
/*const eyesaction = document.querySelector(".eyesaction");*/
/*bg change*/
const mainbg = document.querySelector("main");

/*nav flow listener*/
nav[0].addEventListener("click",function(e) {
    sectionhome.classList.add("active");
    sectionservice.classList.remove("active");
    sectionteam.classList.remove("active");
    sectionlocation.classList.remove("active");  
});
nav[1].addEventListener("click",function(e) {
    sectionhome.classList.remove("active");
    sectionservice.classList.add("active");
    sectionteam.classList.remove("active");
    sectionlocation.classList.remove("active"); 
});
nav[2].addEventListener("click",function(e){
    sectionhome.classList.remove("active");
    sectionservice.classList.remove("active");
    sectionteam.classList.add("active");
    sectionlocation.classList.remove("active"); 
});
nav[3].addEventListener("click",function(e){
    sectionhome.classList.remove("active");
    sectionservice.classList.remove("active");
    sectionteam.classList.remove("active");
    sectionlocation.classList.add("active");    
});
/*button flow listener*/
/*  buttonaction.addEventListener("click",function(e){
    buttonaction.style.position="absolute";
    buttonaction.style.left="700px";
    buttonaction.style.top="80px";*/
    /*eyesaction.src = "./images/homeye.png";*/
    /*setTimeout(() => {
        buttonaction.style.left="0px";
        buttonaction.style.top="0px";
        buttonaction.style.position="inherit";
    }, 3000);*/
/*});*/
/*backgroundcolor change listener*/
    mainbg.addEventListener("mousewheel",function(e){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var a = 0.4;
        mainbg.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";

    });

