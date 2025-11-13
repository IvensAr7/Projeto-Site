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
const mediaQuery = window.matchMedia('(max-width: 900px)'); // mesmo breakpoint do seu CSS

function atualizarSpace() {
  // Só executa se NÃO estiver no @media
  if (!mediaQuery.matches) {
    slideshow.style.top = navbar.getBoundingClientRect().height + 'px';
    space.style.height = slideshow.getBoundingClientRect().height + 'px';
  }
}

// Observa mudanças no tamanho da tela
mediaQuery.addEventListener('change', e => {
  if (e.matches) {
    // Entrou no modo responsivo -> remove estilos
    slideshow.style.top = '';
    space.style.height = '';
  } else {
    // Saiu do modo responsivo -> recalcula
    atualizarSpace();
  }
});

const observer = new ResizeObserver(() => {
  if (!mediaQuery.matches) atualizarSpace();
});
observer.observe(navbar);
observer.observe(slideshow);

// Atualiza quando imagens carregam (apenas fora do modo responsivo)
slideshow.querySelectorAll('img').forEach(img => {
  if (!img.complete && !mediaQuery.matches) {
    img.addEventListener('load', atualizarSpace);
  }
});

window.addEventListener('load', atualizarSpace);
window.addEventListener('resize', () => {
  if (!mediaQuery.matches) atualizarSpace();
});

// Faixas

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn-faixas');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const faixas = btn.nextElementSibling;
            faixas.classList.toggle('show');
            if(faixas.classList.contains('show')){
                btn.textContent = 'Ocultar Faixas';
            } else {
                btn.textContent = 'Mostrar Faixas';
            }
        });
    });
});