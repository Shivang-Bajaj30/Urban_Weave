document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");
    const products = document.querySelectorAll(".grid-item");
    const pageContent = document.getElementById("pageContent");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            filterProducts();
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
        });
    });

    function filterProducts() {

        let selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value); // Using 'value' from checkboxes

        if (selectedCategories.length === 0) {
            products.forEach(product => product.style.display = "block");
        } else {
            products.forEach(product => {
                let productSpan = product.querySelector("span"); // Get the <span> inside the grid-item
                if (productSpan) {
                    let productCategory = productSpan.className.trim().toLowerCase(); // Get class from <span>

                    if (selectedCategories.includes(productCategory)) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                }
            });
        }

        // Align filtered products to the left
        pageContent.style.display = "flex";
        pageContent.style.flexWrap = "wrap";
        pageContent.style.justifyContent = "flex-start";
        pageContent.style.alignItems = "flex-start";
        pageContent.style.gap = "10px"; // Adds spacing for better layout
    }
});
