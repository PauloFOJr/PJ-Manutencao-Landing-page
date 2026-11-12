# Paulo Jr Manutenção e Serviços 🛠️

Landing page simples e objetiva para divulgar os serviços de manutenção residencial, comercial e de condomínios, com atendimento em Cachoeirinha, RS e região. O objetivo é um só: levar o visitante a pedir um orçamento pelo WhatsApp.

---

## 🧑‍💻 Sobre o projeto

- 🎯 Página única, rápida e responsiva (celular e computador)
- 🎨 Visual baseado na logo: azul-petróleo e laranja
- 💬 Botões de WhatsApp com mensagem pronta, inclusive uma mensagem diferente para cada serviço
- 📱 Botão fixo de WhatsApp no celular
- 🧭 Seção "Como funciona" com os 3 passos até o serviço
- 📸 Galeria com dicas de manutenção preventiva publicadas no [Instagram](https://www.instagram.com/paulojrmanutencao/), com rolagem horizontal
- 🔎 SEO: prévia ao compartilhar (Open Graph), link canônico e dados estruturados de negócio local
- ♿ Acessibilidade: link para pular ao conteúdo, foco visível, contraste revisado e respeito a `prefers-reduced-motion`
- 🧩 Arquivos isolados (HTML, CSS e JS) para facilitar edições futuras
- 🚫 Sem frameworks e sem etapa de build

---

## 🛠 Tecnologias

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)](#)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white)](#)

---

## 📁 Estrutura

```
.
├── index.html      # conteúdo, textos e dados estruturados
├── style.css       # visual (cores e fontes no topo do arquivo)
├── script.js       # telefone, mensagens do WhatsApp e Instagram
├── CNAME           # domínio do GitHub Pages
├── README.md
└── assets/
    ├── logo.png        # logo com fundo transparente
    ├── og-image.png    # prévia ao compartilhar o link (1200x630)
    ├── dica-01.png ... dica-08.png   # cards da galeria de dicas
    └── trabalho-01.webp ...          # fotos de serviços (opcional)
```

---

## ✏️ Como editar

| O que mudar | Onde |
|---|---|
| Telefone, mensagens do WhatsApp, links do Instagram e do Google | bloco `CONFIG` no início do `script.js` |
| Link do Google no rodapé (funciona sem JavaScript) | `data-google` no `index.html` |
| Telefone nos links de reserva (funcionam sem JavaScript) | `href="https://wa.me/..."` no `index.html` |
| Telefone nos dados estruturados e no texto da prévia | `telefone` do JSON-LD e `og:image:alt` no `<head>` do `index.html` |
| Cores e fontes | variáveis em `:root` no início do `style.css` |
| Textos e serviços | `index.html` |
| Passos de "Como funciona" | seção `#como-funciona` do `index.html` |
| Fotos de serviços feitos | descomentar a seção `#trabalhos` no `index.html` e colocar as fotos em `assets/` |
| Dicas da galeria | trocar os arquivos em `assets/` ou copiar uma linha `<li>` da galeria no `index.html` |
| Cidades atendidas (Google) | `areaServed` nos dados estruturados do `index.html` |

> **Atenção:** o telefone aparece no `script.js` e também no `index.html`. O script sobrescreve os links ao carregar, mas os valores do HTML são o que vale para quem está sem JavaScript e para os buscadores. Ao trocar o número, atualize os dois.

### Otimizar as imagens das dicas (opcional)

Converter de PNG para WebP deixa a página mais leve. Com o `cwebp` instalado:

```bash
for f in assets/dica-*.png; do cwebp -q 82 "$f" -o "${f%.png}.webp"; done
```

Depois troque `.png` por `.webp` nas imagens da galeria no `index.html`.

---

## 🚀 Como rodar e publicar

**Localmente:** baixe a pasta e abra o `index.html` no navegador.

**No ar (GitHub Pages):** no repositório, abra *Settings → Pages*, escolha a branch `main` e a pasta raiz. O arquivo `CNAME` aponta para o domínio do site.

[Site](https://manutencao.paulojr.dev.br/) no ar.

---

## 📫 Contato

- [WhatsApp](https://wa.me/5551989406950)
- [Site](https://manutencao.paulojr.dev.br)
- [Portfólio](https://paulojr.dev.br)
- [Instagram](https://www.instagram.com/paulojrmanutencao/)
- [Linkedin](https://www.linkedin.com/in/paulofojunior)
- [Github](https://github.com/PauloFOJr)

---

*Manutenção preventiva evita surpresas e gastos maiores.*

Desenvolvido por [Paulo Júnior](https://paulojr.dev.br).
