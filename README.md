# UFRRJ — Projeto de Extensão (versão Vanilla)

Site estático reescrito em **HTML5 semântico + CSS3 puro (BEM) + Vanilla JS (ES6+)**.
Zero frameworks, zero dependências, zero build.

## Como usar

Basta abrir `index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Deploy: faça upload da pasta inteira para GitHub Pages, Netlify, Vercel (estático), Cloudflare Pages, etc.

## Estrutura

```
.
├── index.html       # Página inicial
├── sobre.html       # Sobre a atividade
├── atividades.html  # Equipe e liderança
├── contato.html     # FAQ e canais de contato
├── styles.css       # CSS único (BEM + tokens em :root)
└── script.js        # Menu mobile, link ativo, FAQ accordion
```

## Convenções

- **HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`, `<figure>`. Acessibilidade com `aria-*` e skip link.
- **CSS**: Metodologia BEM (`.block`, `.block__element`, `.block--modifier`). Tokens nativos via `:root`. Mobile-first com `@media (min-width: ...)`.
- **JS**: IIFE, `strict`, delegação de eventos, sem dependências.
