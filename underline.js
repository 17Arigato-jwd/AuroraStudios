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
        } else if (currentPath === "auroralis.html") {
            return document.querySelector(".u-nav-item a[href$='Auroralis.html']");
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
        setTimeout(() => { // Delay execution to ensure the menu is fully loaded
            activeTab = getActiveTab(); // Get detected active tab

            // Force "Top Covers" as active if in /products/
            if (window.location.pathname.toLowerCase().includes("/products/")) {
                activeTab = document.querySelector(".u-nav-item a[href*='products.html']") || activeTab;
            }

            if (activeTab) {
                moveUnderline(activeTab);
            }
        }, 200); // Delay by 200ms to allow menu rendering
    }



    setActiveTab(); // Set the underline on page load

    // Move underline on hover
    let resetTimeout; // Store the timeout reference

    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            clearTimeout(resetTimeout); // Cancel reset if moving between tabs
            moveUnderline(item);
        });

        item.addEventListener("mouseleave", () => {
            resetTimeout = setTimeout(setActiveTab, 200); // Only reset after 0.2s if no new hover
        });
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
