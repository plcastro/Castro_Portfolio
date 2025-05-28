function showSidebar() {
  const sidebar = document.querySelector(".sidebar-mobile");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar-mobile");
  sidebar.style.display = "none";
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

function updateActiveNav() {
  let scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelectorAll(`nav ul li a[href="#${id}"]`)
        .forEach((link) => link.classList.add("active"));
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("DOMContentLoaded", updateActiveNav);
