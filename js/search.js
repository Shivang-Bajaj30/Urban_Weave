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
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-btn");
    const products = document.querySelectorAll('.grid-item');

    // Function to normalize words (remove trailing 's' for plural/singular matching)
    function normalize(word) {
        return word.toLowerCase().replace(/s$/, "");
    }

    function filterProducts() {
        let selectedFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => normalize(checkbox.parentNode.textContent.trim()));

        let searchQuery = normalize(searchBox.value.trim());

        products.forEach(item => {
            let productText = normalize(item.textContent.trim());

            let matchesFilter = selectedFilters.length === 0 ||
                selectedFilters.some(filter => productText.includes(filter) || filter.includes(productText));

            let matchesSearch = searchQuery === "" || productText.includes(searchQuery) || searchQuery.includes(productText);

            item.style.display = (matchesFilter && matchesSearch) ? "block" : "none";
        });
    }

    // Event listeners for checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });

    // Search using Enter key
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            filterProducts();
        }
    });

    // Search using search button click
    searchButton.addEventListener("click", filterProducts);

    filterProducts(); // Run initially
});
