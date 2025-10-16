export default function navHandler() {
  // nav-handler.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // we'll handle scrolling

      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If the element is not yet in DOM, give a helpful message:
        console.warn(`Target not found for ${targetId}. If created dynamically, ensure it has that id.`);
      }
    });
  });
});

}