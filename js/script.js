function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('pageContent');
    const toggleButton = document.getElementById('toggleButton');

    // Toggle classes
    menu.classList.toggle('open');
    content.classList.toggle('shifted');
    toggleButton.classList.toggle('active');
}

const filterMenu = document.getElementById('filterMenu');
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', () => {
    filterMenu.classList.toggle('hidden');
});

