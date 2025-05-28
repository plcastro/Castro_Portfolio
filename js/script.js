function showSidebar() {
  const sidebar = document.querySelector(".sidebar-mobile");
  sidebar.style.display = "flex";

  // Add event listener to close sidebar when clicking outside
  setTimeout(() => {
    document.addEventListener("click", handleOutsideClick);
  }, 0);
}

function hideSidebar(e) {
  const sidebar = document.querySelector(".sidebar-mobile");
  sidebar.style.display = "none";
  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(e) {
  const sidebar = document.querySelector(".sidebar-mobile");
  if (sidebar && !sidebar.contains(e.target)) {
    hideSidebar();
  }
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
