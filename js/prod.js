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

document.getElementById("search-box").addEventListener("input", function() {
    search();
});

function search(){
    let srch = document.getElementById("search-box").value.toLowerCase();
    let maindata = document.querySelector('.maindata');
    let x = document.querySelectorAll('.grid-item');

    // Hide the entire maindata div if the search box is not empty
    if (srch) {
        maindata.style.display = "none";
    } else {
        maindata.style.display = "block";
    }

    // Display only the matched elements and re-show the maindata div
    let anyMatch = false;
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(srch)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
            anyMatch = true;
        }
    }

    // Re-show the maindata div if there are matches
    if (anyMatch) {
        maindata.style.display = "block";
    }
}
