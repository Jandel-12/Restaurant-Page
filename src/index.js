import createHero from "./hero.js";
import "./style.css"

const content = document.getElementById("content");
content.classList.add("slideshow-container")


document.addEventListener("DOMContentLoaded", ()=>{
    content.appendChild(createHero());
})

