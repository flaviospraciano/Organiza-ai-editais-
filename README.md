# Organiza Aí, Editais

Aplicativo (PWA) para organizar e prestar contas de projetos culturais da capoeira contemplados em editais.
Produzido por **Flávio S. Praciano**.

## Publicar no GitHub Pages
1. Crie um repositório público (ex.: `organiza-ai-editais`) e envie **todos os arquivos desta pasta** para a raiz dele.
2. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e salve.
3. Em 1 a 2 minutos o app abre em `https://SEU-USUARIO.github.io/organiza-ai-editais/`.

## Gerar o app de celular no PWABuilder
1. Acesse https://www.pwabuilder.com, cole o endereço do GitHub Pages e clique em **Start**.
2. Clique em **Package for stores** → **Android** → **Generate package**.
3. Baixe o .zip: o arquivo `.apk` serve para instalar direto; o `.aab` é para a Google Play.

## Modo local × Firebase
Sem configurar o `config.js`, o app funciona em **modo local** (dados só no aparelho).
Para a agenda compartilhada por cidade e o painel do administrador funcionarem entre aparelhos,
siga o guia da pasta `firebase-NAO-SUBIR-NO-GITHUB` e cole a configuração no `config.js`.

## Novidades da versão 2.7
- **Agenda em dois modos**: um botão grande no topo troca entre **Ações** (compromissos) e **Fotos**. No modo Fotos, cada dia mostra quantas fotos tem e as ações sem fotos ficam com borda amarela.
- **Nome completo no cadastro**: vai direto para a lista de presença e para o termo dos pais. Contas antigas sem nome recebem um pedido para preencher.
- **Início organizado**: cartão "O que fazer agora?", quadro de ferramentas com botões grandes e "Primeiros passos".
- **"Plano" virou "Projeto"**: Metas, Objetivos e Dados, cada um com uma frase explicando. A prestação de contas saiu das telas do agente (continua só para o administrador).
- **Dicas curtas** e relato com o microfone primeiro; o título se preenche sozinho.
