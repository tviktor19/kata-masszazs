let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.addEventListener("click", () => {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuBtn.style.background = "none";
        menu.src = "images/close.png";
    } else {
        sideNav.style.right = "-250px";
        menuBtn.style.background = "rgba(165, 199, 181, 0.9)";
        menu.src = "images/menu.png";
    }
});

document.addEventListener("click", event => {
    if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
        sideNav.style.right = "-250px";
        menuBtn.style.background = "rgba(165, 199, 181, 0.9)";
        menu.src = "images/menu.png";
    }
});
