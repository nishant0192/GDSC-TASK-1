function myFunction() {
    let bdy = document.body;
    bdy.classList.toggle("dark-mode");
    let section = document.getElementById('footer');
    section.classList.toggle("dark-mode-section");
    let last = document.getElementById('last');
    last.classList.toggle("dark-mode-last");
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle("dark-mode-nav");
    document.querySelectorAll(".nav-link").forEach((el) => {
        el.classList.toggle('dark-mode-nav');
    });
    document.querySelectorAll(".card-t").forEach((el) => {
        el.classList.toggle('dark-mode-nav');
    });
    document.querySelectorAll(".card").forEach((el) => {
        el.classList.toggle('dark-mode-card');
    });
 }