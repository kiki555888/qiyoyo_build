//===== Prealoder
window.onload = function () {
    window.setTimeout(fadeout, 500);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

//   Sticky top menu
window.onscroll = function () {
    var header_navbar = document.querySelector("#navbar-area");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector("#btn-back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";
    }
    // When the user clicks on the button, scroll to the top of the document
    backToTo.addEventListener('click', backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
};
