// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const globalNav = document.querySelector(".global-nav");

if (menuToggle && globalNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    globalNav.classList.toggle("is-open", !isOpen);
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      globalNav.classList.remove("is-open");
    });
  });
}

// Reveal sections gently as they enter the viewport
const revealTargets = document.querySelectorAll(
  ".section-heading, .character-photo, .character-info, .voice-card, .guideline-item, .contact-copy, .contact-links"
);

revealTargets.forEach((element) => element.classList.add("js-reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}



/* =========================================
   Guideline Accordion
   Only one item can be open at a time
   ========================================= */

const guidelineItems = document.querySelectorAll(
  ".guideline-item"
);

guidelineItems.forEach((item) => {
  const button = item.querySelector(".guideline-toggle");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    // すべての項目を閉じる
    guidelineItems.forEach((otherItem) => {
      otherItem.classList.remove("is-open");

      const otherButton = otherItem.querySelector(
        ".guideline-toggle"
      );

      otherButton.setAttribute("aria-expanded", "false");
    });

    // クリックされた項目だけを開く
    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
