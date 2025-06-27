// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", function() {
            mobileNav.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll(".nav-link-mobile");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
        });
    });

    // Handle dropdown in mobile menu
    const mobileDropdownBtn = mobileNav.querySelector(".dropdown .dropbtn");
    if (mobileDropdownBtn) {
        mobileDropdownBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.classList.toggle("active");
            }
        });
    }

    // Phone number formatting for quote form
    const phoneInput = document.getElementById("telefone");
    if (phoneInput) {
        phoneInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
            if (value.length > 0) {
                value = "(" + value.substring(0, 2) + ") " + value.substring(2, 7) + "-" + value.substring(7, 11);
            }
            e.target.value = value;
        });
    }

    // Handle form submission (example - replace with actual backend logic)
    const quoteForm = document.getElementById("quoteForm");
    if (quoteForm) {
        quoteForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Solicitação de orçamento enviada com sucesso! Em breve entraremos em contato.");
            quoteForm.reset();
        });
    }
});




    // Handle dropdown in desktop menu
    const desktopDropdownBtn = document.querySelector(".nav-desktop .dropdown .dropbtn");
    if (desktopDropdownBtn) {
        desktopDropdownBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.classList.toggle("active");
            }
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener("click", function(event) {
            if (!event.target.matches(".dropbtn")) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains("active")) {
                        openDropdown.classList.remove("active");
                    }
                }
            }
        });
    }


