        const menuButton =
            document.getElementById("menuButton");

        const menuSection =
            document.getElementById("menu");

        menuButton.addEventListener("click", function() {

            menuSection.scrollIntoView({
                behavior: "smooth"
            });

        });


        const contactButton =
            document.getElementById("contactButton");

        const contactSection =
            document.getElementById("contact");

        contactButton.addEventListener("click", function() {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        });


        const contactForm =
            document.getElementById("contactForm");

        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            alert(
                "Thanks for your message! We'll get back to you soon."
            );

        });

        const revealElements = document.querySelectorAll(
                ".reveal-left, .reveal-right"
            );

        const revealObserver = new IntersectionObserver(function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        }, {
            threshold: 0.2
        });

        revealElements.forEach(function(element) {
            revealObserver.observe(element);
        });