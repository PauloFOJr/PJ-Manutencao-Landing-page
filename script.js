/* ===== Configurações do site. Edite só aqui ===== */
const CONFIG = {
  telefone: "5551989406950",           // com 55 (Brasil) + DDD + número, sem espaços
  telefoneExibido: "51 98940-6950",    // como aparece na tela
  mensagem: "Olá, Paulo! Vi seu site e gostaria de um orçamento.",
  instagram: "https://www.instagram.com/paulojrmanutencao/"
};

const linkWhatsApp = `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(CONFIG.mensagem)}`;

document.querySelectorAll("[data-whatsapp]").forEach(a => {
  a.href = linkWhatsApp;
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-instagram]").forEach(a => { a.href = CONFIG.instagram; });
document.querySelectorAll("[data-telefone]").forEach(el => { el.textContent = CONFIG.telefoneExibido; });
document.querySelectorAll("[data-ano]").forEach(el => { el.textContent = new Date().getFullYear(); });
