// slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// navbar background change on scroll

const navbar = document.getElementById('navbar');
const gatilho = document.getElementById('gatilho');
let ativado = false;

window.addEventListener('scroll', () => {
    const gatilhoTop = gatilho.getBoundingClientRect().top;
    if (gatilhoTop + 40 <= navbar.offsetHeight && !ativado) {
        navbar.classList.add('scrolled');
        ativado = true;
        window.scrollBy({
          top: 20,
          behavior: 'smooth'
        });
    } else if (gatilhoTop > navbar.offsetHeight && ativado) {
        navbar.classList.remove('scrolled');
        ativado = false;
    }
});
