document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".u-nav");
    const navItems = document.querySelectorAll(".u-nav .u-nav-item a");

    if (!nav || navItems.length === 0) return; // Prevent errors if elements are missing

    // Create and insert the underline element
    let underline = document.createElement("div");
    underline.classList.add("u-nav-underline");
    nav.appendChild(underline);

    function moveUnderline(target) {
        if (!target) return; // Prevent moving to an invalid position
        const rect = target.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        underline.style.width = `${rect.width}px`;
        underline.style.left = `${rect.left - navRect.left}px`;
    }

    function getActiveTab() {
        let currentPath = window.location.pathname.toLowerCase().split('/').pop(); // Extract filename

        // Check for Home, About, Contact using exact file names
        if (currentPath === "home.html") {
            return document.querySelector(".u-nav-item a[href$='Home.html']");
        } else if (currentPath === "about.html") {
            return document.querySelector(".u-nav-item a[href$='About.html']");
        } else if (currentPath === "contact.html") {
            return document.querySelector(".u-nav-item a[href$='Contact.html']");
        }

        // Check if the page is inside the /products/ folder
        if (window.location.pathname.toLowerCase().includes("/products/")) {
            return document.querySelector(".u-nav-item a[href$='products.html']") ||
                   document.querySelector(".u-nav-item a[href*='products.html']");
        }

        // Default to Home if nothing matches
        return document.querySelector(".u-nav-item a[href$='Home.html']");
    }




    let activeTab = getActiveTab(); // Always follows the requested format

    function setActiveTab() {
        activeTab = getActiveTab(); // Get the detected active tab

        // If we're inside the /products/ folder, force "Top Covers" to be active
        if (window.location.pathname.toLowerCase().includes("/products/")) {
            activeTab = document.querySelector(".u-nav-item a[href*='products.html']") || activeTab;
        }

        if (activeTab) {
            moveUnderline(activeTab);
        }
    }


    setActiveTab(); // Set the underline on page load

    // Move underline on hover
    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => moveUnderline(item));
        item.addEventListener("mouseleave", setActiveTab);
    });

    // Update active tab when clicking a new tab
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(tab => tab.classList.remove("u-text-active-custom-color-3"));
            item.classList.add("u-text-active-custom-color-3");
            setActiveTab();
        });
    });
});
