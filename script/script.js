document.addEventListener("DOMContentLoaded", function (event) {
    //Navbar System
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

    //Filter System (W3Schools Slight Modified)
    function filterSelection (filterTag) {
        console.log("now filter" + filterTag);

        var x;
        x = document.getElementsByClassName("workEntry");

        if (filterTag == "all"){ 
            filterTag = "";
        };
        for (let i = 0; i < x.length; i++){
            
            filterRemove(x[i], "show");
            
            if (filterTag === "") {
                filterAdd(x[i], "show");
            }  else if (x[i].className.indexOf(filterTag) > -1){
                filterAdd(x[i], "show");
            }
        }
    }

    function filterAdd (element, name) {
        var array1, array2;

        array1 = element.className.split(" ");
        array2 = name.split(" ");

        for (let i = 0; i < array2.length; i++) {
            if (array1.indexOf(array2[i]) == -1){
                element.className = element.className + " " + array2[i];
            };
        }

    }

    function filterRemove (element, name) {
        var array1, array2;

        array1 = element.className.split(" ");
        array2 = name.split(" ");
        
        for (let i = 0; i < array2.length; i++) {
            while (array1.indexOf(array2[i]) > -1) {
                array1.splice(array1.indexOf(array2[i]), 1);
            };
        }
        element.className = array1.join(" ");
    }

    //Setting Up Button Event Listener
    var buttonContainer =  document.getElementById("introductionTagList");
    var buttonArray = buttonContainer.getElementsByClassName("introductionTag");

    for (let i = 0; i < buttonArray.length; i++){
        buttonArray[i].addEventListener("click", () =>{
            var filterTagFromButton = buttonArray[i].dataset.filterTag;
            console.log("FilterTag " + buttonArray[i].dataset + " " + filterTagFromButton);
            filterSelection(filterTagFromButton);

            var currentActiveButton = document.getElementsByClassName("filterActive");
            currentActiveButton[0].classList.remove("filterActive");
            buttonArray[i].classList.add("filterActive");
        });

    }

    filterSelection("all");
});

//Credit: https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe