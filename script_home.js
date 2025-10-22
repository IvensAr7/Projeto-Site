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
