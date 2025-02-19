function toggleSidebar() {
    const sidebar = document.getElementById('menu');
    const content = document.getElementById('pageContent');
    const toggleButton = document.getElementById('toggleButton');


    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
    toggleButton.classList.toggle('active');
}


window.addEventListener('DOMContentLoaded', (event) => {
    const sidebar = document.getElementById('menu');
    const toggleButton = document.getElementById('toggleButton');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                sidebar.classList.add('fixed');
            } else {
                sidebar.classList.remove('fixed');
            }
        });
    });

    observer.observe(toggleButton);
});