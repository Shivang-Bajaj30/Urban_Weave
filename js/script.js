function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('toggleButton');
    menu.classList.toggle('open');
    toggleButton.classList.toggle('active');
}
