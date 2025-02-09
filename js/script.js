function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
}