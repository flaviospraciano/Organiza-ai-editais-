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

## Novidades da versão 2.8
- **Relatos como um diário por dia**: data grande à esquerda (dia, mês e dia da semana), separador por mês e botões no topo para pular para o mês.
- **Foto de capa grande** em cada relato, com o número de fotos no canto. O cartão inteiro abre o relato.
- **Documentos aparecem direto na lista**, com etiqueta colorida por tipo (PDF vermelho, imagem azul, planilha verde, outros cinza). Dia só com documento ganha um destaque próprio.
- Topo enxuto: uma linha com dias, fotos, documentos e pessoas. O cartão do microfone e o rascunho do relatório foram para o fim.
- O modo Fotos da Agenda usa o mesmo diário.
- Relatos antigos com documentos são completados sozinhos na primeira vez que a tela abre.

## Novidades da versão 2.9
**Relato fácil**
- **Esperando relato**: no Início e em Relatos aparece um cartão para cada ação que já passou e ainda não tem fotos nem relato, com dois botões grandes: **Pôr fotos** e **Falar como foi**. O relato já nasce ligado à ação, com dia e título certos.
- **Relato em 3 passos**, uma pergunta por tela: fotos, falar como foi e quantas pessoas participaram. Todo passo tem "Pular". O app **lê cada pergunta em voz alta** (dá para desligar no botão de alto-falante).
- Ao terminar, aparece "Pronto!" com a meta já atualizada.
- No formulário completo, ação, título, data e metas ficam em **Mais opções**.
- Aviso no celular uma hora depois da ação: "Como foi a Oficina? Toque para pôr as fotos." (com o lembrete ligado).

**Projeto → Agenda**
- Ao cadastrar uma meta que conta ações (ex.: 12 oficinas), o app pergunta se quer **marcar todas na agenda**: escolhe dia da semana, horário e local, e as ações já ficam ligadas à meta.
- O começo e o fim do projeto, as parcelas previstas e os prazos das metas aparecem na agenda.
- Aviso "Faltam marcar X oficinas" quando a meta tem menos ações marcadas que o previsto.

**Agenda → Relatos**
- Em cada ação: **Pôr a lista assinada (foto)**, que vai para o relato daquele dia com o nome certo, e **Avisar no WhatsApp**, com o texto pronto (o quê, quando e onde). O aviso também aparece logo depois de marcar uma ação.
- Ao escrever o nome de uma ação, o app sugere a meta certa.

**Relatos → Projeto**
- Cada meta mostra a comprovação: quantas ações têm fotos, quantas estão sem fotos e quantas estão marcadas. Tocar abre a lista, com botão para pôr as fotos que faltam.
- Objetivos podem ser ligados às metas. Quando elas chegam a 100%, o app avisa e oferece marcar o objetivo como alcançado.
- Gasto ligado à ação: ao lançar um gasto, o app sugere a ação do mesmo dia. A ação mostra quanto custou.

**Extras**
- A foto da lista assinada é lida pelo app, que conta os nomes e preenche o público do relato.
- **Portfólio em PDF** (em Relatos): capa, números, metas e todas as ações com texto e até 4 fotos cada.

## Novidades da versão 3.0
**Equipe usando a mesma conta**
- Em **Ajustes → Equipe deste projeto**, cadastre cada pessoa: nome, cor e, se quiser, uma foto.
- Ao abrir o app num celular, aparece **"Quem está usando?"** com botões grandes. O aparelho lembra a escolha; para trocar, toque na bolinha da pessoa no topo da tela (o botão de tema claro/escuro continua em Ajustes).
- Tudo o que a pessoa faz leva a etiqueta dela: ação marcada, fotos, relato e documento.
- Ao marcar uma ação, escolha **quem vai conduzir** (uma ou mais pessoas). A ação mostra "Conduz" e "Marcada por".
- **Filtro por pessoa** na Agenda (Ações e Fotos) e em Relatos. Os cartões mostram a bolinha colorida de quem fez.
- Tirar alguém da equipe não apaga o nome dela no que já foi feito.

**Repetir ação**: em cada ação, "Repetir em outro dia" abre a ação já preenchida (nome, local, horário, meta e quem conduz); é só escolher o dia.

**Para o administrador**: no Painel, o quadro **"Precisam de atenção"** mostra os projetos com 15 dias ou mais sem relato e as metas com prazo vencido. Com os lembretes ligados, chega aviso no celular (no máximo um por semana para cada problema).
