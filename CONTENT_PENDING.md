# Conteúdos pendentes — Associação Nós na Rua

Arquivo **interno**. Não é publicado no site. As seções sem dados reais ficam
ocultas (não renderizam) — nunca com placeholder público.

## 🔴 Urgentes antes da publicação definitiva

- **Confirmar o WhatsApp oficial completo.** O site usa `+55 48 99135-3909`
  (centralizado em `src/data/site.ts`). Números informados antes —
  `(48) 9957-3580` e `(48) 9135-3909` — pareciam incompletos.
- **Aprovação final da missão** com a diretoria (hoje há um texto provisório
  aprovado em `siteConfig.mission`).
- **Autorização de uso público de todas as fotografias** — inclusive equipe,
  entregas de marmita e imagens com rostos desfocados. Rostos de pessoas
  atendidas foram anonimizados por precaução; ainda assim é preciso o aval
  formal (ver `IMAGE_INVENTORY.md`).
- **QR Code** ou payload PIX oficial (`siteConfig.donation.qrCodeImage`).
- **Local público** para entrega de doações (o endereço cadastral é residencial
  e não é divulgado).

## Projetos

- **Adote uma Família:** número atual de famílias; como é feito o cadastro e o
  apadrinhamento. Enviar a **melhor foto de entrega de cesta básica** (hoje a
  seção usa a foto dos banners "Adote uma Família").
- **Marmitas:** quais **cozinhas comunitárias** colaboram; fotos futuras da
  **preparação das marmitas**.

## Transparência

- Relatório de prestação de contas e comprovantes autorizados
  (preencher `src/data/transparency.ts` — a página mostra estado vazio honesto).
- Confirmação formal antes de publicar qualquer frase como "100% das doações".

## Institucionais

- Nomes e cargos da diretoria (se/quando for divulgar).

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Dados institucionais, contato, PIX, missão, logo, personagens | `src/data/site.ts` |
| Projetos | `src/data/projects.ts` |
| Necessidades de doação (acordeão) | `src/data/donations.ts` |
| Relatórios de transparência | `src/data/transparency.ts` |
