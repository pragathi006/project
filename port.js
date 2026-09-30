/* =========================================================
   NAKSHATRA V S — PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* ================= MOBILE NAVIGATION ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");


    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");


    const sectionObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navLinks.forEach(link => {

                        link.classList.remove("active");


                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35,
            rootMargin: "-80px 0px -30% 0px"
        }

    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ================= BACK TO TOP ================= */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ================= NAVBAR SCROLL EFFECT ================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(16,47,42,0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* ================= PROJECT CARD TILT ================= */

    const cards =
        document.querySelectorAll(".project-card");


    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ================= SKILL CARD HOVER ================= */

    const skillCards =
        document.querySelectorAll(".skill-card");


    skillCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.borderColor =
                "rgba(35,107,93,0.30)";

        });


        card.addEventListener("mouseleave", () => {

            card.style.borderColor = "";

        });

    });


    /* ================= CONTACT LINKS ================= */

    const contactLinks =
        document.querySelectorAll(".contact-link");


    contactLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transform =
                "translateX(5px)";

        });


        link.addEventListener("mouseleave", () => {

            link.style.transform = "";

        });

    });


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            navMenu.classList.remove("open");

        }

    });


});
