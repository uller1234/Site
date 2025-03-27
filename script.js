// Navbar fixa ao rolar a página
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Animação de entrada suave para as seções
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// Efeito de clique no botão principal
let buttons = document.querySelectorAll(".btn-primary");
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        button.classList.add("clicked");
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300);
    });
});
