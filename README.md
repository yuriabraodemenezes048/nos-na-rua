# Nós na Rua — site institucional

Site da **Associação Nós na Rua – São José** (São José/SC), focado em
clareza, confiança e facilidade para doar.

Stack: **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS 3**

---

## Rodar localmente

Requer Node.js 18.18 ou superior.

```bash
npm install
```

```bash
npm run dev
```

Acesse http://localhost:3000

## Outros comandos

```bash
npm run lint
```

```bash
npm run build
```

---

## Estrutura

```
src/
├── app/
│   ├── page.tsx                      # Início
│   ├── doe/page.tsx                  # Doação (PIX)
│   ├── transparencia/page.tsx        # Transparência
│   ├── politica-de-privacidade/
│   ├── termos-de-uso/
│   ├── layout.tsx                    # fontes, metadados, JSON-LD
│   ├── globals.css                   # tokens e componentes de estilo
│   ├── icon.svg · opengraph-image.tsx
│   └── robots.ts · sitemap.ts
├── components/
│   ├── SiteShell · Header · Footer · MobileActionBar
│   ├── Logo · Icons · CopyPixButton · TransparencyReportCard
│   └── home/                         # seções da página inicial
└── data/                             # ⭐ todo o conteúdo editável
    ├── site.ts                       # dados institucionais, contato, PIX
    ├── campaigns.ts                  # campanha atual
    ├── gallery.ts                    # fotos reais das ações
    └── transparency.ts               # relatórios e prestação de contas
```

---

## Como editar o conteúdo

Todo o conteúdo variável está em `src/data/`. Não é preciso mexer nos
componentes.

- **Dados da associação, contato, chave PIX e logo** → `src/data/site.ts`
- **Campanha atual** → `src/data/campaigns.ts` (mude `active` para `true`)
- **Fotos das ações** → `src/data/gallery.ts`
- **Relatórios** → `src/data/transparency.ts`

As seções de **campanha**, **registros** e **relatórios** só aparecem quando
existem dados reais. Sem dados, elas não são renderizadas — o site nunca exibe
placeholder, texto provisório ou número inventado.

Itens ainda pendentes de envio pela associação: veja
[`CONTENT_PENDING.md`](./CONTENT_PENDING.md).

---

## Privacidade

O site **não** possui formulários, cadastro, login ou newsletter, e **não**
utiliza cookies não essenciais, analytics ou pixels de rastreamento. As doações
acontecem no aplicativo bancário do doador — nenhum dado financeiro passa pelo
site.

---

## Publicar

O projeto está conectado à Vercel. Cada `push` na branch `main` publica
automaticamente:

```bash
git push origin main
```
