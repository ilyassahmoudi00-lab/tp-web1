// CARDS ANIMATION

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.04)";
        card.style.background = "rgba(255,255,255,0.25)";

        setTimeout(() => {

            card.style.transform = "scale(1)";
            card.style.background = "rgba(255,255,255,0.15)";

        }, 300);

    });

});

// NAVBAR ACTIVE COLOR

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        link.style.color = "#ffe600";

    });

});

// SCROLL ANIMATION

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s";

});

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if(top > offset){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});