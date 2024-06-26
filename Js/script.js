// Drop Down List
function toggleDropdown(dropdownId) {
  let dropdown = document
    .getElementById(dropdownId)
    .querySelector(".drop-down");
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  let dropdowns = document.querySelectorAll(".drop-down");

  dropdowns.forEach(function (dropdown) {
    let parent = dropdown.parentNode;
    if (
      !event.target.classList.contains("fa-angle-down") &&
      event.target.parentNode !== parent &&
      !parent.contains(event.target)
    ) {
      dropdown.style.display = "none";
    }
  });
};

// Sticky nav
document.addEventListener("scroll", () => {
  let header = document.getElementById("sticky-nav");
  if (window.scrollY > 140) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
});

// All Category Drop Down
let allCatDrop = document.querySelector(".nav-bottom-all-category");
allCatDrop.addEventListener("click", (e) => {
  e.stopPropagation();
  document
    .getElementById("allCategoryDropDown")
    .classList.toggle("allCatDropDown");
});

window.addEventListener("click", () => {
  document
    .getElementById("allCategoryDropDown")
    .classList.remove("allCatDropDown");
});
window.addEventListener("scroll", () => {
  document
    .getElementById("allCategoryDropDown")
    .classList.remove("allCatDropDown");
});

// Back To Top
let backToTopBtn = document.querySelector(".back-to-top-btn");
backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
  let backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.classList.add("hidden");
  } else {
    backToTop.classList.remove("hidden");
  }
});

// Mobile hamburger Menu
const mobileHamburgerBtn = document.querySelector(".nav-hamburger");
const mobileHamburgerMenu = document.querySelector(".mobile-hamburger-menu");
const mobileHamburgerMenuCloseBtn = document.querySelector(
  ".mobile-hamburger-menu-close-btn"
);
mobileHamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileHamburgerMenu.style.visibility = "visible";
  mobileHamburgerMenu.style.right = "0";
});
mobileHamburgerMenuCloseBtn.addEventListener("click", () => {
  mobileHamburgerMenu.style.visibility = "hidden";
  mobileHamburgerMenu.style.right = "-70vw";
});
