// Sticky nav
document.addEventListener("scroll", () => {
  let header = document.querySelector(".s-header");
  if (window.scrollY > 120) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
});

// Nav Drop-Down
document.querySelectorAll(".s-dropDown").forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    const clickedDropdown = event.currentTarget;

    // Close other dropdowns
    document.querySelectorAll(".s-dropDown-ul").forEach((element) => {
      if (element !== clickedDropdown.nextElementSibling) {
        element.classList.remove("show");
      }
    });
    // Toggle the "show" class for the clicked dropdown
    clickedDropdown.nextElementSibling.classList.toggle("show");
  });
});

window.addEventListener("click", () => {
  document.querySelectorAll(".s-dropDown-ul").forEach((element) => {
    element.classList.remove("show");
  });
});
window.addEventListener("scroll", () => {
  document.querySelectorAll(".s-dropDown-ul").forEach((element) => {
    element.classList.remove("show");
  });
});

// Return Customer login
let login = document.querySelector(".visible-login");
if (login) {
  login.addEventListener("click", () => {
    let loginForm = document.querySelector(".login-form");
    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
    } else {
      loginForm.style.display = "block";
    }
  });
}

// Coupon Area
let coupon = document.querySelector(".visible-coupon");
if (coupon) {
  coupon.addEventListener("click", () => {
    let couponForm = document.querySelector(".coupon-form");
    if (couponForm.style.display === "block") {
      couponForm.style.display = "none";
    } else {
      couponForm.style.display = "block";
    }
  });
}

// Payment Section
let paymentList = document.querySelectorAll(".payment-list");
if (paymentList) {
  paymentList.forEach((label) => {
    label.addEventListener("click", () => {
      const infoDiv = label.nextElementSibling;
      document.querySelectorAll(".checkout-payment-info").forEach((div) => {
        div.style.display = div === infoDiv ? "block" : "none";
      });
    });
  });
}

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
