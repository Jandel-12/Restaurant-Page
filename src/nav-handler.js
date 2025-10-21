export default function navHandler() {
  // nav-handler.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 

      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        
        console.warn(`Target not found for ${targetId}. If created dynamically, ensure it has that id.`);
      }
    });
  });
});

}