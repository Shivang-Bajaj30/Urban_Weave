document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-btn");
    const products = document.querySelectorAll('.grid-item');

    // Function to normalize text for better matching
    function normalizeText(text) {
        return text.toLowerCase()
            .replace(/[-]/g, " ")    // Replace hyphens with space ("t-shirt" -> "t shirt")
            .replace(/\s+/g, " ")    // Remove extra spaces ("  t shirt " -> "t shirt")
            .trim();                 // Trim whitespace
    }



    function filterProducts() {
        let searchQuery = normalizeText(document.getElementById("search-box").value);
        let products = document.querySelectorAll('.grid-item');

        products.forEach(item => {
            let productName = normalizeText(item.querySelector(".product-name").textContent);

            // Match words like "tshirt", "t-shirt", "t shirt"
            let matchesSearch = productName.includes(searchQuery) ||
                productName.replace(/\s/g, "").includes(searchQuery.replace(/\s/g, ""));

            // Show/hide products
            item.style.display = matchesSearch ? "block" : "none";
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

    filterProducts(); // Run initially to apply filters on page load
});
