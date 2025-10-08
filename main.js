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
      Jogo 2D de plataforma vertical desenvolvido individualmente.
      A história acompanha uma pessoa que tenta superar seus próprios limites e se tornar alguém melhor,
      simbolizando a ascensão emocional através de 4 fases:
      <ul>
        <li>Fase 1:Fundo do Poço — Desespero</li>
        <li>Fase 2:Recomeço — Ansiedade</li>
        <li>Fase 3:Superação — Aceitação</li>
        <li>Fase 4:Propósito — Esperança</li>
      </ul>
    `,
    link: "https://github.com/kaua-gabriel/Ascendente.git",
    imagens: ["img/As1.jpg", "img/As2.png", "img/As3.jpeg", "img/As4.png"]
  },
  2: {
    titulo: "Murmúrios da Floresta",
    desc: `
      Jogo 3D desenvolvido para PC e VR. Após um acidente aéreo, o jogador precisa sobreviver
      em uma floresta hostil e misteriosa. Explorar, construir abrigo, caçar e manter a sanidade
      são fundamentais para resistir aos perigos naturais e psicológicos do isolamento.
    `,
    link: "https://github.com/kaua-gabriel/Murm-rios-da-Floresta.git",
    imagens: ["img/MdF1.jpg", "img/MdF2.jpg", "img/MdF3.jpg", "img/MdF4.jpg"]
  },
  3: {
    titulo: "Take It Back",
    desc: `
      Projeto desenvolvido por uma equipe de 20 pessoas (10 design + 10 dev) como parte do desafio <b>“Gaming Dojo”</b>.
      A missão era criar uma solução gamificada para gerenciar consumíveis utilizados na produção de jogos,
      promovendo eficiência e criatividade.
      <br><br>
      O projeto envolveu competição entre duas equipes — Time Azul e Time Vermelho — exigindo estratégia,
      originalidade e documentação das mecânicas em um sistema tipo <b>“INPI interno”</b>.
    `,
    link: "https://github.com/kaua-gabriel/Take-It-Back.git",
    imagens: ["img/TB1.jpg", "img/TB2.jpg", "img/TB3.jpg", "img/TB4.jpg"]
  },
  4: {
    titulo: "3DARChars - Studio Amphibia",
    desc: `
      Projeto de realidade aumentada (AR) em que o usuário pode visualizar personagens interagindo
      com o mundo real ao apontar o celular para um QR Code.
      <br><br>
      Os personagens escolhidos foram de jogos Indie: <b>Sans</b> (Undertale), <b>Six</b> (Little Nightmares)
      e <b>Ori</b> (Ori and the Blind Forest).
      <br><br>
      Essa experiência une arte digital e realidade, permitindo estudar, explorar e se divertir com
      personagens animados aparecendo no ambiente físico.
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