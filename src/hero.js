import { startSlider } from "./slide";
import img1 from "./assets/img3.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img1.jpg";

export default function createHero() {
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const slidesData = [
    {
      img: img1,
      text: "One cannot think well, love well, sleep well, if one has not dined well."
    },
    {
      img: img2,
      text: "Food so good, it's worth the calorie splurge."
    },
    {
      img: img3,
      text: "Eating is a necessity, but dining is an art form."
    }
  ];

  slidesData.forEach(slideData => {
    const slide = document.createElement("div");
    slide.classList.add("slide", "fade");

    const img = document.createElement("img");
    img.src = slideData.img;
    img.alt = "restaurant image";

    const caption = document.createElement("div");
    caption.textContent = slideData.text;
    caption.classList.add("caption");

    slide.appendChild(img);
    slide.appendChild(caption);
    hero.appendChild(slide);
  });


  startSlider(hero);

  return hero;
}

