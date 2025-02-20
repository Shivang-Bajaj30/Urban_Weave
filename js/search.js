// document.addEventListener("DOMContentLoaded", function () {
//
//     const searchBox = document.getElementById("search-box");
//     const searchButton = document.getElementById("search-btn");
//     const products = document.querySelectorAll('.grid-item');
//
//     function normalizeText(text) {
//         return text.toLowerCase()
//             .replace(/[-]/g, " ") // Normalize hyphens ("t-shirt" -> "t shirt")
//             .replace(/\s+/g, " ") // Remove extra spaces
//             .trim();
//     }
//
//     function filterProducts() {
//         let searchQuery = normalizeText(searchBox.value);
//
//         products.forEach(item => {
//             let productName = normalizeText(item.querySelector("span").textContent); // Selects any span inside the grid item
//
//             // Check if product name matches search query
//             let matchesSearch = productName.includes(searchQuery) ||
//                 productName.replace(/\s/g, "").includes(searchQuery.replace(/\s/g, ""));
//
//             // Show/Hide product
//             item.style.display = matchesSearch ? "flex" : "none";
//         });
//     }
//
//     // Search on Enter key press
//     searchBox.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             filterProducts();
//         }
//     });
//
//     // Search on button click
//     searchButton.addEventListener("click", filterProducts);
//
//     filterProducts(); // Apply filter on page load
// });


document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-btn");
    const products = document.querySelectorAll('.grid-item');

    function normalizeText(text) {
        return text.toLowerCase()
            .replace(/[-]/g, " ") // Normalize hyphens ("t-shirt" -> "t shirt")
            .replace(/\s+/g, " ") // Remove extra spaces
            .trim();
    }

    function filterProducts() {
        let searchQuery = normalizeText(searchBox.value);

        products.forEach(item => {
            let productSpan = item.querySelector("span");
            if (!productSpan) return;

            let productName = normalizeText(productSpan.textContent);
            let productCategory = normalizeText(productSpan.className); // Get class for category filtering

            // Ensure "shirt" only matches "shirts" and "t-shirt" only matches "t-shirts"
            let matchesSpecificCategory =
                (searchQuery === "shirt" && productCategory === "shirts") ||
                (searchQuery === "tshirt" && productCategory === "t-shirts");

            let matchesSearch = productName.includes(searchQuery) ||
                productCategory.includes(searchQuery) ||
                matchesSpecificCategory;

            // Show/Hide product
            item.style.display = matchesSearch ? "flex" : "none";
        });
    }

    // Search on Enter key press
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            filterProducts();
        }
    });

    // Search on button click
    searchButton.addEventListener("click", filterProducts);

    filterProducts(); // Apply filter on page load
});
