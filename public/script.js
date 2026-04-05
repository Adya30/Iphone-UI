const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const navLink = document.querySelector(".nav-link");

menuIcon.addEventListener("click", () => {
    navLink.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLink.classList.remove("active");
});

// iphone-hero
const grid = document.getElementById('iphoneGrid');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');

const scrollAmount = 200;

btnRight.addEventListener('click', () => {
    grid.scrollLeft += scrollAmount;
});

btnLeft.addEventListener('click', () => {
    grid.scrollLeft -= scrollAmount;
});

grid.addEventListener('scroll', () => {
    if (grid.scrollLeft > 0) {
        btnLeft.classList.add('visible');
    } else {
        btnLeft.classList.remove('visible');
    }

    if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 5) {
        btnRight.classList.remove('visible');
    } else {
        btnRight.classList.add('visible');
    }
});

// section ip
