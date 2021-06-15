var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

var menuBtn = document.getElementById("menu-btn");
var sideNav = document.getElementById("side-nav");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
    console.log(sideNav.style.right);
    if (sideNav.style.right.toString() == "-200px") {
        sideNav.style.right = "0";
        menu.src = "images/resources/close.png";
    }
    else {
        sideNav.style.right = "-200px";
        menu.src = "images/resources/menu.png";
    }
}