window.addEventListener("scroll", function () {
    var menu = document.getElementById("menu");
    var navbar = document.querySelector(".navbar"); // Adjust if needed
    var navbarOffset = navbar.offsetHeight; // Get navbar height

    if (window.scrollY >= navbarOffset) {
        menu.classList.add("fixed"); // Fix menu after reaching navbar
    } else {
        menu.classList.remove("fixed"); // Remove fixed when scrolling up
    }
});