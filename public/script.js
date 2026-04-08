const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const navLink = document.querySelector(".nav-link");
const navItems = document.querySelectorAll(".nav-link a");

menuIcon.addEventListener("click", () => {
    navLink.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLink.classList.remove("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLink.classList.remove("active");
    });
});

function setupScroll(gridId, btnLeftId, btnRightId, scrollAmount = 200) {
    const grid = document.getElementById(gridId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);

    if (!grid || !btnLeft || !btnRight) return;

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
}


// iphone hero
setupScroll('iphoneGrid', 'scrollLeft', 'scrollRight');
// explore
setupScroll('exploreGrid', 'explorePrev', 'exploreNext');
// gallery
setupScroll('galleryGrid', 'galleryPrev', 'galleryNext');

// iphone-menu-dropdowns
const items = document.querySelectorAll(".accordion .item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));

    item.classList.add("active");
  });
});

// footer-dropdown
const footerTitles = document.querySelectorAll(".footer h4");

footerTitles.forEach(title => {
  title.addEventListener("click", () => {
    if (window.innerWidth <= 768) {

      const parent = title.parentElement;

      parent.classList.toggle("active");
    }
  });
});