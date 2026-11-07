
// =================================
// COZYCODE WEBSITE JAVASCRIPT
// =================================

// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    navLinks.classList.toggle("is-open", !isOpen);

  });

  // Close menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });

}


// NEWSLETTER FORM

const newsletterForm =
  document.querySelector("#newsletter-form");

const formMessage =
  document.querySelector("#form-message");

if (newsletterForm && formMessage) {

  newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!newsletterForm.reportValidity()) return;

    const email = new FormData(newsletterForm).get("email");

    formMessage.textContent =
      `Thanks! ${email} is on the list for a little more inspiration.`;

    formMessage.classList.add("is-success");

    newsletterForm.reset();

  });

}


// AUTOMATIC COPYRIGHT YEAR

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
