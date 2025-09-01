export default function navHandler() {
  const nav = document.querySelector(".nav-bar");

  nav.addEventListener("click", (e) => {
    // make sure user clicked a link
    if (e.target.tagName === "A") {
      e.preventDefault(); // stop anchor jump

      console.log("Clicked nav link:", e.target.textContent);

      // optional: use dataset attribute to identify which page
      const page = e.target.dataset.page;
      console.log("Navigate to:", page);
    }
  });
}