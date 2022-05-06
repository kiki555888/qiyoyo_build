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
    sectionhome.style.display="grid";
    sectionservice.style.display="none";
    sectionteam.style.display="none";
    sectionlocation.style.display="none";  
});
nav[1].addEventListener("click",function(e) {
    sectionhome.style.display="none";
    sectionservice.style.display="grid";
    sectionteam.style.display="none";
    sectionlocation.style.display="none"; 
});
nav[2].addEventListener("click",function(e){
    sectionhome.style.display="none";
    sectionservice.style.display="none";
    sectionteam.style.display="grid";
    sectionlocation.style.display="none";  
});
nav[3].addEventListener("click",function(e){
    sectionhome.style.display="none";
    sectionservice.style.display="none";
    sectionteam.style.display="none";
    sectionlocation.style.display="grid";    
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

