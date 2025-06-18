# Romance Site - Versão Futurista

Este é um site romântico, moderno e responsivo, criado para fazer a pergunta "Isabelle, quer namorar comigo?". Ele utiliza HTML, CSS e JavaScript puros, sem a necessidade de um back-end, tornando-o ideal para hospedagem em serviços como GitHub Pages ou Vercel.

## Visual Moderno e Futurista

*   **Fundo de Estrelas Animadas**: Um céu estrelado dinâmico cria uma atmosfera mágica.
*   **Tipografia Clean**: Fontes "Poppins" e "Montserrat" para uma leitura agradável e moderna.
*   **Cores Neon**: Um degradê roxo-azul neon (#6B00FF → #00C8FF) com textos em branco puro, proporcionando um visual vibrante e futurista.
*   **Glow Suave**: Títulos e elementos importantes com um efeito de brilho sutil.

## Estrutura do Projeto

```
romance-site/
├── index.html              # Boas-vindas typewriter
├── pergunta.html           # Pergunta + botões
├── sim.html                # Flor + “agora é oficial”
│  
├── css/                    # Estilos
│   ├── base.css            # Reset, utilitários, tipografia
│   ├── theme.css           # Cores, gradientes, media queries
│   └── animations.css      # Estrela, typewriter, flor, pegadas
│  
├── js/                     # Scripts
│   ├── typewriter.js       # Efeito digitação
│   ├── stars.js            # Fundo estrelado
│   ├── fugitive.js         # Lógica botão “não” + patinhas
│   └── bloom.js            # Controla animação da flor
│  
├── assets/                 # (Somente se necessário para áudio ou ícones SVG)
└── README.md               # Instruções de uso e deploy
```

## Funcionalidades

1.  **Tela de Boas-Vindas (`index.html`)**:
    *   Efeito de máquina de escrever com a mensagem "Oi, Isabelle… posso te perguntar uma coisa? 🤍".
    *   Botão "Claro! ►" que leva à tela principal.
    *   Respeita `prefers-reduced-motion`.

2.  **Tela Principal (`pergunta.html`)**:
    *   Fundo com estrelas animadas (densidade reduzida em mobile para otimização).
    *   Pergunta central com efeito glow: "Isabelle, quer namorar comigo?".
    *   Botão "Sim": Redireciona para `sim.html`.
    *   Botão "Não": Foge do cursor do mouse/toque e deixa um rastro de mini patinhas que desaparecem. Impede o clique em desktop e touch.

3.  **Tela "Sim" (`sim.html`)**:
    *   Animação de flor desabrochando construída 100% em HTML e CSS (sem imagens).
    *   Após a animação da flor, aparece o texto "Agora é oficial! 💞" com fade-in.

## Requisitos Extra Implementados

*   **Totalmente Responsivo**: O layout se adapta a diferentes tamanhos de tela (mobile ≤ 640 px, tablet 641-1024 px, desktop ≥ 1025 px).
    *   Elementos centrais permanecem legíveis (font-size clamp, `max-width` container).
*   **`prefers-reduced-motion`**: Desativa as estrelas e reduz a animação de bloom na flor para usuários com essa preferência ativada.
*   **Acessibilidade**: Todos os botões com `aria-label` e contraste de cores AA.
*   **Code Split**: CSS e JavaScript separados por responsabilidade em arquivos dedicados.
*   **Sem libs pesadas**: O código é puro HTML, CSS e JavaScript, com foco em leveza (máximo 15 KB por dependência).

## Como Usar

Para visualizar e desenvolver o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório (ou baixe os arquivos):**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd romance-site
    ```

2.  **Abra os arquivos HTML:**

    Simplesmente abra `index.html` no seu navegador web. Você pode usar extensões de navegador como "Live Server" para desenvolvimento local com recarregamento automático.

## Deploy (Hospedagem)

Este projeto é projetado para ser facilmente hospedado em plataformas de hospedagem estática, como GitHub Pages ou Vercel.

### GitHub Pages

1.  Crie um novo repositório no GitHub (por exemplo, `romance-site`).
2.  Faça o upload de todos os arquivos do projeto para este repositório.
3.  Vá para as configurações do seu repositório no GitHub.
4.  Na seção "Pages", selecione o branch `main` (ou `master`) como sua fonte de deploy e a pasta `/(root)`.
5.  Salve as alterações. Seu site estará disponível em `https://<SEU_USUARIO>.github.io/romance-site/`.

### Vercel

1.  Certifique-se de que seus arquivos estão em um repositório Git (GitHub, GitLab, Bitbucket).
2.  Crie uma conta Vercel (se ainda não tiver).
3.  No painel da Vercel, clique em "New Project".
4.  Importe seu repositório Git.
5.  A Vercel detectará automaticamente que é um projeto estático e fará o deploy. Seu site estará disponível em um URL gerado pela Vercel.

## Como Substituir Textos e Cores

*   **Textos**: Edite diretamente os arquivos HTML (`index.html`, `pergunta.html`, `sim.html`) para alterar os textos exibidos.
*   **Cores**: As cores principais são definidas nas variáveis CSS no arquivo `css/base.css` e `css/theme.css`. Você pode ajustá-las para personalizar o tema:
    ```css
    :root {
        --primary-color: #6B00FF; /* Roxo neon */
        --secondary-color: #00C8FF; /* Azul neon */
        --glow-color: rgba(107, 0, 255, 0.7); /* Cor do glow */
        /* Outras variáveis de cor */
    }
    ```

---

Feito com 🤍 para Isabelle.

