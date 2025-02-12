document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const products = document.querySelectorAll(".grid-item");

    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {  // Check if Enter key is pressed
            event.preventDefault();   // Prevent form submission (if any)

            const searchValue = searchBox.value.toLowerCase().trim();

            products.forEach(product => {
                const productName = product.querySelector(".product-name").textContent.toLowerCase();

                // Show product if it matches search, otherwise hide it
                if (productName.includes(searchValue)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const searchBtn = document.getElementById("search-btn");

    function performSearch() {
        const query = searchBox.value.trim().toLowerCase();
        if (query !== "") {
            // Perform search (You can modify this part based on your needs)
            console.log("Searching for:", query);

            // Example: Filter product items
            const products = document.querySelectorAll(".grid-item");
            products.forEach(item => {
                const productText = item.textContent.toLowerCase();
                if (productText.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        }
    }

    // Trigger search when pressing "Enter"
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    // Trigger search when clicking search button
    searchBtn.addEventListener("click", function () {
        performSearch();
    });
});
