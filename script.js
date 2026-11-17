/* ===== Configurações do site. Edite só aqui ===== */
const CONFIG = {
  telefone: "5551989406950",           // com 55 (Brasil) + DDD + número, sem espaços
  telefoneExibido: "51 98940-6950",    // como aparece na tela
  mensagem: "Olá, Paulo! Vi seu site e gostaria de um orçamento.",
  // Mensagem dos cartões de serviço. {servico} vira "elétrica", "pintura" etc.
  mensagemServico: "Olá, Paulo! Vi seu site e gostaria de um orçamento de {servico}.",
  instagram: "https://www.instagram.com/paulojrmanutencao/",
  // Perfil da Empresa no Google (mostra a nota e as avaliações)
  google: "https://share.google/kgPlsKAQWhmSRWuIM",
  // Link direto do formulário de avaliação (g.page/r/.../review). Use no WhatsApp, depois do serviço.
  googleAvaliar: ""
};

function montarLink(texto) {
  return `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(texto)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(a => {
  const servico = a.dataset.servico;
  const texto = servico
    ? CONFIG.mensagemServico.replace("{servico}", servico)
    : CONFIG.mensagem;
  a.href = montarLink(texto);
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-instagram]").forEach(a => { a.href = CONFIG.instagram; });
document.querySelectorAll("[data-google]").forEach(a => {
  if (CONFIG.google) { a.href = CONFIG.google; a.hidden = false; }
});
document.querySelectorAll("[data-telefone]").forEach(el => { el.textContent = CONFIG.telefoneExibido; });
document.querySelectorAll("[data-ano]").forEach(el => { el.textContent = new Date().getFullYear(); });

/* ---------- Depoimentos (lê reviews.json) ---------- */
(function () {
  'use strict';
  var secao = document.getElementById('depoimentos');
  if (!secao) return;
  var lista = secao.querySelector('.depoimentos');
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>';

  function card(r) {
    var li = document.createElement('li');
    li.className = 'depoimento';

    var n = Math.max(1, Math.min(5, Number(r.estrelas) || 5));
    var stars = document.createElement('div');
    stars.className = 'depoimento__estrelas';
    stars.setAttribute('role', 'img');
    stars.setAttribute('aria-label', n + ' de 5 estrelas');
    stars.innerHTML = new Array(n + 1).join(STAR);

    var q = document.createElement('blockquote');
    q.textContent = '“' + r.texto + '”';

    var cap = document.createElement('p');
    cap.className = 'depoimento__autor';
    var b = document.createElement('strong');
    b.textContent = r.nome;
    cap.appendChild(b);
    if (r.detalhe) {
      cap.appendChild(document.createElement('br'));
      cap.appendChild(document.createTextNode(r.detalhe));
    }

    li.appendChild(stars);
    li.appendChild(q);
    li.appendChild(cap);
    return li;
  }

  fetch('reviews.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (itens) {
      if (!Array.isArray(itens) || !itens.length) return;
      itens.forEach(function (r) { lista.appendChild(card(r)); });
      secao.hidden = false;
    })
    .catch(function () { /* sem JSON, a seção continua escondida */ });
})();