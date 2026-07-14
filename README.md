# Nós na Rua — Site institucional (protótipo)

Site/protótipo de apresentação para a ONG **Nós na Rua**, com foco em
**clareza, confiança e facilidade para doar**. Construído com Next.js,
TypeScript e Tailwind CSS.

> ⚠️ **Este é um protótipo demonstrativo.** Os textos, imagens e dados
> (chave PIX, CNPJ, contatos, etc.) são **provisórios** e devem ser
> substituídos pelas informações oficiais da ONG antes da publicação real.

---

## ✨ O que já está pronto

- Landing page completa com 11 seções (da capa ao rodapé).
- Design claro, leve e acolhedor — pensado **primeiro para o celular**.
- Botão **"Copiar chave PIX"** funcionando de verdade (com retorno visual).
- Botão **flutuante de WhatsApp** com mensagem pré-preenchida.
- Links de **Instagram** no cabeçalho, contato e rodapé.
- Botões de **doação** em vários pontos estratégicos.
- Envio de **comprovante** e contato de **empresas** direto pelo WhatsApp.
- Navegação suave entre as seções e menu mobile simples.
- **SEO básico**, Open Graph, favicon e imagem de compartilhamento.
- Estrutura pronta para **Google Analytics** e **Meta Pixel**, com
  rastreamento de cliques nos botões importantes.
- Acessibilidade: tags semânticas, foco visível, "pular para o conteúdo",
  respeito a "reduzir movimento".

---

## 🚀 Como rodar localmente

Pré-requisitos: **Node.js 18.18+** (recomendado 20 ou 22).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Depois abra **http://localhost:3000** no navegador.

Para gerar a versão de produção e testá-la:

```bash
npm run build
npm run start
```

---

## ☁️ Como publicar na Vercel

1. Suba este projeto para um repositório no **GitHub** (ou GitLab/Bitbucket).
2. Acesse **https://vercel.com** e faça login.
3. Clique em **"Add New… → Project"** e importe o repositório.
4. A Vercel detecta o Next.js automaticamente — **não precisa configurar nada**.
5. Clique em **Deploy**. Em poucos minutos o site estará no ar.
6. (Opcional) Em **Settings → Domains**, conecte o domínio oficial da ONG.

### Variáveis de ambiente (opcionais)

Só necessárias se quiser ativar analytics. Em
**Settings → Environment Variables** da Vercel, adicione:

| Variável                     | Exemplo             | Para quê             |
| ---------------------------- | ------------------- | -------------------- |
| `NEXT_PUBLIC_GA_ID`          | `G-XXXXXXXXXX`      | Google Analytics 4   |
| `NEXT_PUBLIC_META_PIXEL_ID`  | `123456789012345`   | Meta (Facebook) Pixel |

Sem elas, o site funciona normalmente e **nenhum dado é coletado**.

---

## ✏️ O que a ONG precisa substituir (dados reais)

### 1. Informações de contato e doação — arquivo principal

Quase tudo que muda está em **um único arquivo, fácil de editar**:

> **`src/lib/site.ts`**

Lá você atualiza (basta trocar o texto entre aspas):

- WhatsApp, Instagram, e-mail, telefone e horário
- **Chave PIX**, nome do titular, banco e tipo da chave
- **CNPJ**
- Cidade / área de atuação
- Mensagens prontas do WhatsApp

### 2. Textos das seções

Os textos provisórios estão marcados com a etiqueta **"Conteúdo de exemplo"**
ou entre colchetes `[assim]`. Ficam nos arquivos de:

> **`src/components/sections/`**

Exemplos: história da ONG (`QuemSomos.tsx`), projetos (`Projetos.tsx`),
níveis de parceria (`Empresas.tsx`).

### 3. Fotos

Onde aparecem blocos de **"Foto real da ONG"** (componente `PhotoFrame`),
troque por fotos verdadeiras. O jeito recomendado:

1. Coloque as imagens na pasta **`public/`** (ex.: `public/acao-1.jpg`).
2. Substitua o `<PhotoFrame ... />` por uma imagem do Next:

   ```tsx
   import Image from "next/image";

   <Image
     src="/acao-1.jpg"
     alt="Descrição da foto"
     width={800}
     height={600}
     className="rounded-2xl"
   />;
   ```

### 4. QR Code do PIX

Na seção **Como Doar** (`src/components/sections/ComoDoar.tsx`) há uma área
demonstrativa para o QR Code. Basta colocar a imagem real do QR Code no lugar.

### 5. Logo oficial

O emblema atual (`src/components/Logo.tsx`) é provisório. Quando a arte oficial
chegar, coloque-a em `public/logo.png` e troque o emblema por uma `<Image>`.

### 6. Cores (opcional)

Toda a paleta está comentada em **`tailwind.config.ts`**. Dá para mudar o
visual inteiro alterando os valores das cores `verde`, `terra`, `cream`, etc.

---

## 🗂️ Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx            # fontes, SEO, metadados globais
│   ├── page.tsx              # monta a landing page (ordem das seções)
│   ├── globals.css           # estilos base + botões reutilizáveis
│   ├── icon.svg              # favicon
│   ├── opengraph-image.tsx   # imagem de compartilhamento (gerada)
│   ├── robots.ts / sitemap.ts
│   └── privacidade/page.tsx  # política de privacidade (modelo)
├── components/
│   ├── Header.tsx            # cabeçalho fixo + menu mobile
│   ├── Footer.tsx            # rodapé completo
│   ├── WhatsAppFloat.tsx     # botão flutuante do WhatsApp
│   ├── PixCopy.tsx           # chave PIX + copiar (funcional)
│   ├── Logo.tsx / Icons.tsx  # marca e ícones
│   ├── PhotoFrame.tsx        # placeholder elegante de foto
│   ├── SectionHeading.tsx    # cabeçalho padrão das seções
│   ├── DemoNotice.tsx        # avisos de "protótipo"
│   └── sections/             # as 11 seções da página
└── lib/
    ├── site.ts               # ⭐ CONFIG central (contatos, PIX, etc.)
    ├── nav.ts                # links de navegação
    └── track.ts              # rastreamento de cliques
```

---

## 💚 Sobre o projeto

Feito para que a diretoria da ONG entenda, com clareza, **como o site vai
funcionar, para onde vai a doação e como a pessoa vai doar** — um protótipo
honesto, humano e pronto para receber os dados reais.
