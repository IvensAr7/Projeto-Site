// ===== Navbar muda com scroll =====
const navbar = document.getElementById('navbar');
const gatilho = document.getElementById('gatilho');
let ativado = false;

if (navbar && gatilho) {
  window.addEventListener('scroll', () => {
    const gatilhoTop = gatilho.getBoundingClientRect().top;
    if (gatilhoTop + 40 <= navbar.offsetHeight && !ativado) {
      navbar.classList.add('scrolled');
      ativado = true;
      window.scrollBy({ top: 20, behavior: 'smooth' });
    } else if (gatilhoTop > navbar.offsetHeight && ativado) {
      navbar.classList.remove('scrolled');
      ativado = false;
    }
  });
}

// ===== Sincroniza tamanhos do slideshow =====
const slideshow = document.getElementById('slideshow');
const space = document.getElementById('space');
const mediaQuery = window.matchMedia('(max-width: 900px)');

if (slideshow && space) {
  function atualizarSpace() {
    if (!mediaQuery.matches) {
      const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      slideshow.style.top = navHeight + 'px';
      space.style.height = slideshow.getBoundingClientRect().height + 'px';
    }
  }

  mediaQuery.addEventListener('change', e => {
    if (e.matches) {
      slideshow.style.top = '';
      space.style.height = '';
    } else {
      atualizarSpace();
    }
  });

  const observer = new ResizeObserver(() => {
    if (!mediaQuery.matches) atualizarSpace();
  });
  observer.observe(slideshow);
  if (navbar) observer.observe(navbar);

  slideshow.querySelectorAll('img').forEach(img => {
    if (!img.complete && !mediaQuery.matches) {
      img.addEventListener('load', atualizarSpace);
    }
  });

  window.addEventListener('load', atualizarSpace);
  window.addEventListener('resize', () => {
    if (!mediaQuery.matches) atualizarSpace();
  });
}

// ===== Faixas dos álbuns =====
document.querySelectorAll('.album').forEach(album => {
  const botao = album.querySelector('.btn');
  const lista = album.querySelector('.faixas');

  if (botao && lista) {
    botao.addEventListener('click', () => {
      lista.classList.toggle('aberta'); // abre/fecha lista
      botao.classList.toggle('aberta'); // gira o ícone
    });
  }
});

// ===== Player de música =====
document.querySelectorAll('.musica').forEach(album => {
  const botao2 = album.querySelector('.btn2');
  const botao3 = album.querySelector('.btn3');
  const letra = album.querySelector('.letra');
  const sign = album.querySelector('.sign');
  

  if (botao2 && letra) {
    botao2.addEventListener('click', () => {
      letra.classList.toggle('aberta');
      botao3.classList.toggle('aberta');
    });
  }

  if (botao3 && sign) {
    botao3.addEventListener('click', () => {
      sign.classList.toggle('aberta');
      botao3.classList.toggle('aberta');
    });
  }
});

