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

// Botão navbar (mobile)

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});





// ===== Faixas dos álbuns =====
document.querySelectorAll('.album').forEach(album => {
  const botao = album.querySelector('.btn');
  const lista = album.querySelector('.faixas');

  if (botao && lista) {
    botao.addEventListener('click', () => {
      lista.classList.toggle('aberta');
      botao.classList.toggle('aberta'); 
    });
  }
});

// ===== Btns de música =====
document.querySelectorAll('.musica').forEach(album => {
  const botao2 = album.querySelector('.btn2');
  const botao3 = album.querySelector('.btn3');
  const letra = album.querySelector('.letra');
  const sign = album.querySelector('.sign');

  if (botao2 && letra) {
    botao2.addEventListener('click', () => {
      letra.classList.toggle('aberta');
      botao2.classList.toggle('aberta');
    });
  }

  if (botao3 && sign) {
    botao3.addEventListener('click', () => {
      sign.classList.toggle('aberta');
      botao3.classList.toggle('aberta');
    });
  }
});

// ===== Slides mscs =====
const slides = document.querySelector(".slides2");
const musicas = document.querySelectorAll(".musica");
const viewport = document.querySelector(".viewport2");

let index = 0;

// Atualiza o slider horizontal e a altura da viewport
function updateSlider() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    updateHeight();
}

// Botões
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn && prevBtn) {
  nextBtn.onclick = () => {
    if (index < musicas.length - 1) {
      index++;
      updateSlider();
    }
  };

  prevBtn.onclick = () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  };
}



// ===== Cursor =====

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

const clickable = "a, audio, button, input, textarea, select, [role='button']";

document.addEventListener("mouseover", (e) => {
  if (e.target.closest(clickable)) {
    cursor.classList.add("active");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(clickable)) {
    cursor.classList.remove("active");
  }
});




