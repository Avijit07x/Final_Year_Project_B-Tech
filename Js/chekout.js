// Sticky nav
document.addEventListener("scroll", () => {
  let header = document.querySelector(".s-header");
  if (window.scrollY > 120) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
});

// Return Customer login
let login = document.querySelector(".visible-login");
login.addEventListener("click", () => {
  let loginForm = document.querySelector(".login-form");
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
  } else {
    loginForm.style.display = "block";
  }
});

// Coupon Area
let coupon = document.querySelector(".visible-coupon");
coupon.addEventListener("click", () => {
  let couponForm = document.querySelector(".coupon-form");
  if (couponForm.style.display === "block") {
    couponForm.style.display = "none";
  } else {
    couponForm.style.display = "block";
  }
});

// Payment Section
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".payment-list").forEach((label) => {
    label.addEventListener("click", () => {
      const infoDiv = label.nextElementSibling;
      document.querySelectorAll(".checkout-payment-info").forEach((div) => {
        div.style.display = div === infoDiv ? "block" : "none";
      });
    });
  });
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
