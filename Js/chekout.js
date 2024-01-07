let login = document.querySelector(".visible-login");
login.addEventListener("click", () => {
  let loginForm = document.querySelector(".login-form");
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
  } else {
    loginForm.style.display = "block";
  }
});

let coupon = document.querySelector(".visible-coupon");
coupon.addEventListener("click", () => {
  let couponForm = document.querySelector(".coupon-form");
  if (couponForm.style.display === "block") {
    couponForm.style.display = "none";
  } else {
    couponForm.style.display = "block";
  }
});

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
