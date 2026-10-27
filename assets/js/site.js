(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Contact form: client-side only (no backend)
  var form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("role", "status");
      }
      form.reset();
      if (success) {
        success.focus && success.focus();
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // Current year in footer
  var yearEls = document.querySelectorAll("[data-year]");
  var y = String(new Date().getFullYear());
  yearEls.forEach(function (el) {
    el.textContent = y;
  });
})();
