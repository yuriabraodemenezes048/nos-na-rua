# Conteúdos pendentes — Associação Nós na Rua

Arquivo **interno**. Não é publicado no site. As seções sem dados reais ficam
ocultas (não renderizam) — nunca com placeholder público.

## 🔴 Urgentes antes da publicação definitiva

- **URGENTE: confirmar o WhatsApp oficial completo.** O site usa
  `+55 48 99135-3909`. Números informados antes — `(48) 9957-3580` e
  `(48) 9135-3909` — parecem incompletos. O número está centralizado em
  `src/data/site.ts` (`contact.whatsapp`).
- Confirmar qual número recebe os comprovantes.
- Confirmar a **missão institucional final** com a diretoria (hoje há um texto
  provisório aprovado em `siteConfig.mission`).
- **Confirmar a autorização de uso público de TODAS as fotos** — inclusive as
  novas (equipe, entregas de marmita) e as que têm rostos desfocados. Rostos de
  pessoas atendidas foram anonimizados por precaução; ainda assim é preciso o
  aval formal da associação. Ver `IMAGE_INVENTORY.md`.
- Receber **QR Code** ou payload PIX oficial (`siteConfig.donation.qrCodeImage`).
- Confirmar **local público** para entrega de doações (o endereço cadastral é
  residencial e **não** é divulgado).

## Institucionais

- Nomes e cargos da diretoria.
- História pessoal da fundação e nome dos fundadores.
- Data real de início das ações (caso anterior ao CNPJ).
- Versão final da missão, visão e valores aprovados.

## Projetos

- Número atual de famílias do Adote uma Família e como é feito o cadastro.
- Como funciona o apadrinhamento.
- Quais cozinhas comunitárias colaboram.
- Detalhes de mutirões de higiene e ações de ressocialização.
- Calendário das próximas ações e campanha prioritária atual.

## Transparência

- Relatórios, extratos/resumos, notas fiscais e comprovantes.
- Totais arrecadados e utilizados; resultados por campanha.
- Política sobre custos administrativos e logísticos.
- Confirmação documental antes de publicar qualquer frase como
  "100% das doações".
- Preencher `src/data/transparency.ts` (a página mostra estado vazio honesto).

## Comunicação e imagens

- Fotografias das marmitas e da equipe; mais registros autorizados para a galeria.
- Autorizações de imagem das pessoas retratadas.
- Logos de parceiros autorizados; depoimentos autorizados; vídeos.
- Ponto oficial para coleta de doações.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Dados institucionais, contato, PIX, missão, logo, personagens | `src/data/site.ts` |
| Projetos | `src/data/projects.ts` |
| Necessidades de doação | `src/data/donations.ts` |
| Galeria de fotos | `src/data/gallery.ts` |
| Relatórios de transparência | `src/data/transparency.ts` |
