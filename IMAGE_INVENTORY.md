# Inventário de imagens — Associação Nós na Rua

Arquivo **interno**. Registra a avaliação de privacidade e uso de cada imagem.
As fontes originais ficam em `C:/Users/yuria/Downloads`.

## Em uso no site

### Hero — ação na Tapera
- **Origem:** `ChatGPT Image 27 de jul. de 2026, 16_14_13.png` (1672×941)
- **Conteúdo:** ação comunitária na Tapera; **rostos desfocados na origem**.
- **Uso:** hero editorial (`/acoes/tapera-acao.webp`), recorte de calçados
  para Ações comunitárias (`tapera-calcados`) e recorte de famílias para
  Adote uma Família (`tapera-familias`).
- **Decisão:** **USAR** (blur preservado).
- **Pendência:** o Adote uma Família idealmente usaria uma foto de **entrega de
  cesta básica** (ainda não disponível); por ora usa a foto dos banners.
- **`tapera-roupas.webp`** (recorte da mesma origem) está disponível em
  `/public/acoes/` mas **não está em uso** no momento — resolução baixa
  (345×300) demais para qualquer posição de destaque; guardar para uso futuro
  em baixa escala, se fizer sentido.

### Equipe / voluntários
- **Origem:** `equipe nos marmita.jpeg` (1536×1536)
- **Conteúdo:** 5 voluntários posando com camisetas da campanha e caixas de
  doação. **Posaram voluntariamente** para o registro institucional.
- **Uso:** faixa "Uma rede de pessoas cuidando de pessoas" (`/acoes/equipe.png`,
  recorte paisagem), logo após "Quem somos".
- **Decisão:** **USAR.** Rostos de voluntários mantidos (posaram). Pendência:
  confirmar autorização formal de uso de imagem.

### Marmitas — entrega com caixa térmica
- **Origem:** `nos1.jpeg` (1536×1536)
- **Conteúdo:** voluntária entregando marmita; caixa térmica "NÓS na RUA".
- **Tratamento:** **rosto do beneficiário borrado** (Gaussian). Voluntária mantida.
- **Uso:** projeto Marmitas (segunda cena, `/acoes/marmita-caixa.webp`) e
  chamada final (`FinalCTA`) — única imagem reutilizada no site, com grande
  distância de rolagem entre as duas aparições.
- **Decisão:** **USAR** com rosto do beneficiário anonimizado.

### Marmitas — entrega individual
- **Origem:** `nos2.jpeg` (1536×1536)
- **Conteúdo:** voluntária entregando refeição a uma pessoa.
- **Tratamento:** **rosto do beneficiário borrado**. Voluntária mantida.
- **Uso:** projeto Marmitas, cena principal (`/acoes/marmita-entrega.webp`).
- **Decisão:** **USAR** com rosto do beneficiário anonimizado.

### Logo oficial (favicon e imagem de compartilhamento)
- **Origem:** `public/logo-nos-na-rua.png` (arquivo oficial já usado no
  cabeçalho e rodapé).
- **Uso:** favicon (`src/app/icon.png`, `apple-icon.png`, gerados por recorte
  simples do arquivo oficial — sem redesenho) e imagem de Open Graph
  (`opengraph-image.tsx`, embutida via base64 a partir do mesmo arquivo).
- **Decisão:** **USAR.** Antes, favicon e OG usavam formas geométricas
  genéricas (não a logo real) — corrigido para usar somente o arquivo oficial,
  conforme a regra de nunca recriar a marca.

## Não utilizadas

### Distribuição noturna (várias pessoas)
- **Origem:** `nos3.jpeg` (1536×1536)
- **Motivo:** **vários rostos identificáveis de pessoas atendidas** (difícil
  anonimizar com segurança) e enquadramento menos digno. Já há registros fortes
  e dignos suficientes.
- **Decisão:** **NÃO USAR** por ora. Aguardar um registro melhor / autorização.

### Outras imagens em Downloads
- Podem ser de outros projetos ou conter pessoas identificáveis sem autorização.
- **Decisão:** **AGUARDAR** avaliação individual.

## Regra permanente

Não publicar foto com pessoa identificável **atendida** sem desfoque/autorização.
Voluntários que posaram podem aparecer, mas a associação ainda deve **confirmar a
autorização de uso público de todas as fotos** (ver CONTENT_PENDING.md). Não gerar
pessoas fictícias; ilustrações complementam, mas não substituem a prova real.
