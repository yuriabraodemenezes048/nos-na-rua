# Conteúdos pendentes — Nós na Rua

Arquivo **interno**. Não é publicado no site.

Enquanto os itens abaixo não forem recebidos, as seções correspondentes ficam
desativadas por dados (não renderizam) — nunca com texto provisório.

## Marca e arquivos

- [ ] **Logotipo oficial em alta resolução** (PNG ou SVG). Não há nenhum arquivo
      de logo no projeto. Coloque em `/public` e informe o caminho em
      `siteConfig.logo` (`src/data/site.ts`). Enquanto for `null`, o site exibe a
      assinatura tipográfica da associação.
- [ ] Receber **QR Code PIX oficial** (ou o payload PIX validado). Coloque em
      `/public` e informe em `siteConfig.donation.qrCodeImage`. Sem ele, o bloco
      de QR Code simplesmente não aparece.

## Contato e dados

- [ ] Confirmar o **segundo número de WhatsApp** — o valor informado como
      "(48) 9957-3580" está com a quantidade de dígitos incompleta e por isso
      não foi publicado.
- [ ] Confirmar o **local oficial para entrega de doações**. O endereço
      cadastral é residencial e **não** está publicado no site.
- [ ] Confirmar se o **endereço completo** pode ser divulgado publicamente.

## Textos institucionais

- [ ] Receber a **história completa** da associação.
- [ ] Receber o **texto de missão** e valores oficiais.
- [ ] Receber **nomes e cargos dos responsáveis**.
- [ ] Confirmar se o trabalho **começou antes da abertura do CNPJ**.
- [ ] Receber informações detalhadas sobre **voluntariado**.
- [ ] Receber informações detalhadas sobre **parcerias**.

## Conteúdo variável

- [ ] Receber a **campanha atual** (título, resumo, prazo, itens necessários).
      Preencher `src/data/campaigns.ts` e mudar `active` para `true`.
- [ ] Receber **fotos autorizadas** das ações. Preencher `src/data/gallery.ts`
      (máx. 4 imagens). A seção de registros só aparece com fotos reais.
- [ ] Confirmar **quais fotos podem mostrar pessoas atendidas** e se há
      autorização de uso de imagem.
- [ ] Receber **números de impacto confirmados** (nenhum número foi inventado).
- [ ] Receber **prestações de contas** e **documentos autorizados**. Preencher
      `src/data/transparency.ts`. A página exibe um estado vazio honesto até lá.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Dados institucionais, contato, PIX, logo | `src/data/site.ts` |
| Campanha atual | `src/data/campaigns.ts` |
| Fotos das ações | `src/data/gallery.ts` |
| Relatórios e prestação de contas | `src/data/transparency.ts` |
