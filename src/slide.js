let slideIndex = 0;

function autoSlides(container) {
  const slides = container.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => autoSlides(container), 5000); 
}

export function startSlider(container) {
  slideIndex = 0; 
  autoSlides(container);
}

