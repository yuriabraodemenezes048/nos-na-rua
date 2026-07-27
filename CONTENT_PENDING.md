# Conteúdos pendentes — Nós na Rua

Arquivo **interno**. Não é publicado no site.

Enquanto os itens abaixo não forem recebidos, as áreas correspondentes ficam
desativadas por dados (não renderizam) — nunca com texto provisório.

## Já resolvido

- [x] **Logotipo oficial** extraído da identidade e aplicado no cabeçalho e
      rodapé (`public/logo-nos-na-rua.png`).
- [x] **Personagens ilustrados** da marca aplicados no site
      (`public/personagens/`): mulher de blazer e homem com caixa de doações.

## Marca e arquivos

- [ ] Se houver versões vetoriais/maior resolução do logo e dos personagens,
      substituir os arquivos em `/public` (mesmos nomes) para nitidez extra.
- [ ] Receber **QR Code PIX oficial** (ou o payload PIX validado). Coloque em
      `/public` e informe em `siteConfig.donation.qrCodeImage`. Sem ele, o bloco
      de QR Code simplesmente não aparece.

## Contato e dados

- [ ] Confirmar o **segundo número de WhatsApp** — o valor informado como
      "(48) 9957-3580" está com a quantidade de dígitos incompleta e por isso
      não foi publicado.
- [ ] Confirmar o **local oficial para entrega de doações**. O endereço
      cadastral é residencial e **não** está publicado no site.

## Textos institucionais

- [ ] Receber **nomes e cargos dos responsáveis** (se/quando for divulgar).
- [ ] Receber informações detalhadas sobre **voluntariado** e **parcerias**,
      caso queiram uma explicação mais completa no site.

## Conteúdo variável

- [ ] Receber **fotos reais e autorizadas** das ações para uso pontual em
      seções estratégicas (confirmar quais imagens podem mostrar pessoas
      atendidas e se há autorização de uso de imagem).
- [ ] Receber **números de impacto adicionais confirmados** (hoje o site usa
      apenas os confirmados: ≈100 refeições/semana, segundas às 19h30,
      registrada desde 2021, atuação na Grande Florianópolis).
- [ ] Receber **prestações de contas** e **documentos autorizados**. Preencher
      `src/data/transparency.ts`. A página exibe um estado vazio honesto até lá.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Dados institucionais, contato, PIX, logo, personagens | `src/data/site.ts` |
| Projetos (marmitas, Adote uma Família, ações sazonais) | `src/data/projects.ts` |
| Relatórios e prestação de contas | `src/data/transparency.ts` |
