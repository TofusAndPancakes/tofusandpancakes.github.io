document.addEventListener("DOMContentLoaded", function (event) {
    navTrigger = document.getElementById("navTrigger");

    navBar = document.getElementById("navActive");
    var navBarStyle = getComputedStyle(navBar);

    var navbarActive = 0;

    function deactivateNavBar() {
        if (navBarStyle.getPropertyValue('visibility') == "visible") {
            navBar.style.visibility = 'hidden';
            navBar.style.opacity = 0;
            navbarActive = 0;
        }
    }

    navTrigger.addEventListener("mouseenter", function () {
        //console.log("hit");
        if (navBarStyle.getPropertyValue('visibility') == "hidden") {
            navBar.style.visibility = 'visible';
            navBar.style.opacity = 1;
            navbarActive = 1;
        }
    });

    navBar.addEventListener("mouseleave", function () {
        deactivateNavBar();
    });

    navTriggerSmall = document.getElementById("navTriggerSmall");

    navBarSmall = document.getElementById("navActiveSmall");
    var navBarStyleSmall = getComputedStyle(navBarSmall);

    var navbarActiveSmall = 0;

    function deactivateNavBarSmall() {
        if (navBarStyleSmall.getPropertyValue('visibility') == "visible") {
            navBarSmall.style.visibility = 'hidden';
            navBarSmall.style.opacity = 0;
            navbarActiveSmall = 0;
        }
    }

    navTriggerSmall.addEventListener("mouseenter", function () {
        //console.log("hit");
        if (navBarStyleSmall.getPropertyValue('visibility') == "hidden") {
            navBarSmall.style.visibility = 'visible';
            navBarSmall.style.opacity = 1;
            navbarActiveSmall = 1;
        }
    });

    navBar.addEventListener("mouseleave", function () {
        deactivateNavBarSmall();
    });

    document.addEventListener("mouseup", function () {
        deactivateNavBar();
        deactivateNavBarSmall();
    });

});

//Credit: https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe