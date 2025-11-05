// navbar muda com scroll

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

// sincroniza tamanhos 

const slideshow = document.getElementById('slideshow');
const space = document.getElementById('space');

function atualizarSpace() {
  slideshow.style.top = navbar.getBoundingClientRect().height + 'px';
  space.style.height = slideshow.getBoundingClientRect().height - 200 + 'px';
}

const observer = new ResizeObserver(atualizarSpace);
observer.observe(navbar);
observer.observe(slideshow);

slideshow.querySelectorAll('img').forEach(img => {
  if (!img.complete && !MediaQuery.matches) {
    img.addEventListener('load', atualizarSpace);
  }
});

window.addEventListener('load', atualizarSpace);

window.addEventListener('resize', atualizarSpace);

// animação scroll

AOS.init({
    duration: 1000,
    once: true,
});