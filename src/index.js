import createHero from "./hero.js";
import navHandler from "./nav-handler.js";
import "./style.css"
import RestaurantMenu from "./menu.js";
import Contact from "./contact.js";

const content = document.getElementById("content");



document.addEventListener("DOMContentLoaded", ()=>{
    const heroContent = document.createElement("div");
    heroContent.appendChild(createHero());
    heroContent.classList.add("slideshow-container");
    heroContent.setAttribute('id', 'slideshow-container' );
    content.appendChild(heroContent);

})

navHandler();


document.addEventListener("DOMContentLoaded", ()=>{
    content.appendChild(RestaurantMenu());
    
})

document.addEventListener('DOMContentLoaded', ()=>{
     content.appendChild(Contact())
}
   
)

