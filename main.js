// === GALERIA E MODAL DE IMAGEM ===
const icones = document.querySelectorAll('.jogo-icone');
const detalhe = document.getElementById('jogo-detalhe');
const voltar = document.getElementById('voltar');
const detalheTitulo = document.getElementById('detalhe-titulo');
const detalheDesc = document.getElementById('detalhe-desc');
const detalheLink = document.getElementById('detalhe-link');
const detalheGaleria = document.getElementById('detalhe-galeria');

// Cria modal dinamicamente
const modal = document.createElement('div');
modal.classList.add('modal');
modal.style.display = 'none';
modal.innerHTML = `
  <span class="fechar" id="fecharModal" role="button" aria-label="Fechar modal">&times;</span>
  <img class="modal-conteudo" id="imgModal" src="" alt="Imagem ampliada" />
`;
document.body.appendChild(modal);

const imgModal = document.getElementById('imgModal');
const fecharModal = document.getElementById('fecharModal');

// Dados dos jogos
const jogos = {
  1: {
    titulo: "Ascendente",
    desc: `
      Um jogo 2D de plataforma vertical sobre evolução e autodescoberta.  
      <br><br>
      "Ascendente" simboliza a jornada de superar os próprios limites, subindo fase após fase — não apenas fisicamente, mas emocionalmente.  
      Cada nível representa uma etapa da ascensão interior:
      <ul>
        <li>Fundo do Poço — Desespero</li>
        <li>Recomeço — Ansiedade</li>
        <li>Superação — Aceitação</li>
        <li>Propósito — Esperança</li>
      </ul>
      Desenvolvido individualmente, o jogo mistura narrativa simbólica, pixel art feita à mão e trilha personalizada.  
      Foi uma experiência de criação intensa — onde cada mecânica e cada quadro animado carregam um pouco do processo de autossuperação que inspirou o projeto.
    `,
    link: "https://playdeads.itch.io/ascendente",
    imagens: ["img/As1.jpg", "img/As2.png", "img/As3.jpeg", "img/As4.png"]
  },

  2: {
    titulo: "Murmúrios da Floresta",
    desc: `
      Um jogo 3D desenvolvido para PC e realidade virtual (VR), que combina sobrevivência, mistério e imersão psicológica.  
      <br><br>
      Após um acidente aéreo, o jogador desperta sozinho em uma floresta hostil — cercado por sons, sombras e ecos da própria mente.  
      Construir abrigo, caçar e manter a sanidade são essenciais para resistir aos perigos, tanto naturais quanto internos.  
      <br><br>
      Criado em equipe durante o curso, foi a primeira experiência com VR, explorando o equilíbrio entre o medo do desconhecido e a beleza de se perder na natureza.
    `,
    link: "https://github.com/kaua-gabriel/Murm-rios-da-Floresta.git",
    imagens: ["img/MdF1.jpg", "img/MdF2.jpg", "img/MdF3.jpg", "img/MdF4.jpg"]
  },

  3: {
    titulo: "Take It Back",
    desc: `
      Um projeto coletivo desenvolvido durante o desafio <b>“Gaming Dojo”</b>, unindo 20 participantes (10 designers e 10 desenvolvedores).  
      <br><br>
      A missão era criar uma solução gamificada para gerenciar consumíveis usados na produção de jogos, estimulando eficiência e criatividade.  
      O resultado foi um sistema que uniu estratégia, originalidade e documentação de mecânicas em um formato inspirado em um <b>“INPI interno”</b>.  
      <br><br>
      O projeto foi construído com <b>Unity</b> e <b>C#</b>, utilizando conceitos de <b>UX</b> e metodologias ágeis, durante uma competição entre o <b>Time Azul</b> e o <b>Time Vermelho</b>.  
      Uma experiência intensa que misturou técnica, colaboração e o desafio de transformar ideias em algo jogável.
    `,
    link: "https://github.com/kaua-gabriel/Take-It-Back.git",
    imagens: ["img/TB1.jpg", "img/TB2.jpg", "img/TB3.jpg", "img/TB4.jpg"]
  },

  4: {
    titulo: "3DARChars - Studio Amphibia",
    desc: `
      Um experimento de realidade aumentada que transforma personagens digitais em presenças vivas no mundo real.  
      <br><br>
      Ao apontar o celular para um QR Code, o usuário vê figuras icônicas de jogos indie — <b>Sans</b> (Undertale), <b>Six</b> (Little Nightmares) e <b>Ori</b> (Ori and the Blind Forest) — interagindo com o ambiente físico.  
      <br><br>
      Criado como um projeto bônus pelo <b>Studio Amphibia</b>, o 3DARChars une arte digital, animação e tecnologia AR em uma experiência divertida e poética, onde a imaginação rompe a barreira entre o real e o virtual.
    `,
    link: "https://github.com/kaua-gabriel/3DARChars.git",
    imagens: ["img/Gm1.jpg", "img/Gm2.jpg", "img/Gm3.jpg", "img/Gm4.jpg"]
  }
};

// Exibe detalhes do jogo
icones.forEach(icone => {
  icone.addEventListener('click', () => {
    const jogo = jogos[icone.dataset.jogo];

    icones.forEach(i => i.style.display = 'none');
    detalheTitulo.textContent = jogo.titulo;
    detalheDesc.innerHTML = jogo.desc;
    detalheLink.href = jogo.link;

    detalheGaleria.innerHTML = '';
    jogo.imagens.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = jogo.titulo;
      img.classList.add('galeria-img');
      detalheGaleria.appendChild(img);

      img.addEventListener('click', () => {
        imgModal.src = src;
        modal.style.display = 'flex';
      });
    });

    detalhe.style.display = 'block';
  });
});

// Voltar para os ícones
voltar.addEventListener('click', () => {
  detalhe.style.display = 'none';
  icones.forEach(i => i.style.display = 'block');
});

// Fecha modal
fecharModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});


// === PARTÍCULAS DE FUNDO ===
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "speed": 2 }
  }
});

// === MODAL PARA QUALQUER IMAGEM ===
document.querySelectorAll('.modal-img').forEach(img => {
  img.addEventListener('click', () => {
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    modal.style.display = 'flex';
  });
});

// Cria modal (uma vez)
const modalArte = document.createElement('div');
modalArte.classList.add('modal');
modalArte.style.display = 'none';
modalArte.innerHTML = `
  <span class="fechar" role="button" aria-label="Fechar modal">&times;</span>
  <img class="modal-conteudo" src="" alt="Imagem ampliada" />
`;
document.body.appendChild(modalArte);

const imgModalArte = modalArte.querySelector('img');
const fecharModalArte = modalArte.querySelector('.fechar');

// Função para abrir o modal
function abrirModalArte(src, alt = '') {
  imgModalArte.src = src;
  imgModalArte.alt = alt;
  modalArte.style.display = 'flex';
}

// Fecha modal
fecharModalArte.addEventListener('click', () => modalArte.style.display = 'none');
modalArte.addEventListener('click', e => {
  if (e.target === modalArte) modalArte.style.display = 'none';
});

// Aplica o modal a todas as imagens da seção de Arte
document.querySelectorAll('.cartas img').forEach(img => {
  img.addEventListener('click', () => abrirModalArte(img.src, img.alt));
});

