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