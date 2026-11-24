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
  googleAvaliar: "https://g.page/r/Ca1kbICgBH56EBM/review",
   // ID de medição do GA4
  ga: "G-TD0LK322VP"
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

/* ===== Medição (GA4) ===== */
if (CONFIG.ga) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.ga}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", CONFIG.ga);
}

function registrar(evento, params) {
  if (window.gtag) gtag("event", evento, { ...params, transport_type: "beacon" });
}

document.querySelectorAll("[data-whatsapp]").forEach(a => {
  a.addEventListener("click", () => registrar("whatsapp_click", {
    servico: a.dataset.servico || "geral",
    secao: a.closest("[id]")?.id || "topo"
  }));
});
document.querySelectorAll("[data-instagram]").forEach(a => {
  a.addEventListener("click", () => registrar("instagram_click"));
});
document.querySelectorAll("[data-google]").forEach(a => {
  a.addEventListener("click", () => registrar("google_avaliacoes_click"));
});