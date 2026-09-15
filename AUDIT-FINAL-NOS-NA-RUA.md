# Auditoria Final — Nós na Rua

**Data:** 15 de setembro de 2026
**Site auditado:** https://www.nosnarua.com.br/ (produção) + código-fonte completo do repositório
**Metodologia:** leitura integral do código-fonte (App Router, todos os componentes e dados), testes reais no navegador (clique, toque, JS ao vivo) em produção nos breakpoints 320/375/768/1280/1440, `curl` direto em produção para HTML/headers/canonical/sitemap/robots, `npm run lint` / `tsc --noEmit` / `npm run build` / `npm audit` locais, e busca global por texto no repositório inteiro (não só `src/`).

**Limitação de metodologia a declarar:** o simulador de teclado da ferramenta de automação usada aqui (`computer.key`) não dispara o comportamento nativo de ativação por Enter/Espaço do navegador — comprovei isso testando um `<a href="/doe">` comum, que também não navegou com Enter simulado. Ou seja, testes de "ativação por teclado" feitos por essa via são inconclusivos e **não foram usados para reportar bugs**; a avaliação de suporte a teclado foi feita por revisão de código (semântica HTML nativa) combinada com testes reais de clique/toque, que funcionam corretamente na ferramenta.

---

## Resumo executivo

*Notas da auditoria original (15/09), antes da rodada de correções. Ver "Rodada de correções finais" e "Veredito atualizado" mais abaixo para o estado atual — as notas abaixo não foram recalculadas para preservar o histórico da auditoria.*

| Critério | Nota (0–10) | Observação |
|---|---|---|
| Visual | 9 | Consistente, editorial, sem regressões encontradas. |
| UX | 8 | Fluxos claros; 404 não teve a identidade visual aplicada. |
| Mobile | 8 | Sem overflow horizontal em nenhuma rota testada; hero e menu funcionam bem. |
| Funcionalidade | 8 | Nenhum botão morto encontrado; accordion relatado pelo usuário funciona nos testes realizados (ver P1-H2 e seção 2). |
| Acessibilidade | 8 | Skip link, focus ring global, semântica nativa corretas; sem `aria-live`/foco quebrado encontrados. |
| SEO | 8 | Canonical/OG/sitemap/robots corretos no domínio oficial; domínio antigo da Vercel ainda responde 200 (ver P1-H3). |
| Performance | 8 | Bundle enxuto (102 KB compartilhado), imagens otimizadas de verdade (hero mobile real = 55 KB), fontes self-hosted. Lighthouse não pôde ser executado nesta sessão (sem ferramenta disponível) — avaliação por métricas de rede/bundle, não pontuação Lighthouse real. |
| Conteúdo | 8 | Nenhuma ocorrência de linguagem proibida; uma frase (`"sem intermediários"`) sinalizada para revisão humana, não corrigida. |
| Código | 8 | `lint`/`typecheck`/`build` limpos; zero `any`/`@ts-ignore`; dependências mínimas (3 em produção); uma vulnerabilidade **crítica** de dependência a resolver (Next.js). |
| Prontidão para produção | 7.5 | Ver veredito no final. |

---

## P0 — CRITICAL

Nenhum problema encontrado nesta categoria após os testes realizados. Não há bug que impeça a entrega — os itens abaixo (P1) são importantes, mas nenhum quebra o funcionamento do site hoje.

---

## P1 — HIGH

### H1 — Vulnerabilidade de segurança (inclusive CRÍTICA) na versão instalada do Next.js ✅ RESOLVIDO (ver "Rodada de correções finais")

- **Severidade:** HIGH (uma das CVEs subjacentes é classificada CRITICAL pelo GitHub Advisory Database)
- **Página:** N/A (dependência de build, afeta todo o site)
- **Componente:** `next` (dependência em `package.json`)
- **Arquivo:** `package.json:13`, `package-lock.json`
- **Descrição:** `npm audit` acusa 8 vulnerabilidades (1 crítica, 6 altas, 1 moderada) na árvore de dependências, todas originadas pela versão do Next.js efetivamente instalada (`15.5.20`), incluindo: RCE não autenticado em servidores Windows, RCE via AVIF na API de otimização de imagem, SSRF em rewrites, DoS via SVG na API de imagem, e divulgação não autenticada de endpoints internos de Server Functions. `postcss` e `sharp` aparecem como dependências transitivas vulneráveis do próprio Next.js.
- **Como reproduzir:** `npm audit` na raiz do projeto.
- **Causa provável:** `package.json` já declara `"next": "^15.5.4"` (permite qualquer patch/minor dentro de 15.x), mas o `package-lock.json` está travado em `15.5.20`; existe uma tag `backport: 15.5.25` no registry do npm — ou seja, a correção já existe **dentro do range de versão já aprovado**, só não foi instalada.
- **Impacto:** real, mas parcialmente mitigado pelo perfil do site (sem Server Actions customizadas, sem servidor Windows, hospedado na Vercel). Ainda assim, é uma CVE crítica publicamente conhecida rodando em produção.
- **Correção recomendada:** `npm update next` (ou fixar `"next": "15.5.25"` e reinstalar) — **não é upgrade de major version**, está dentro do range já declarado em `package.json`. Rodar `npm run build` depois para confirmar que nada quebra.
- **Risco da correção:** baixo (patch release da mesma major/minor line).
- **Esforço estimado:** S

### H2 — Página 404 não usa a identidade visual do site ✅ RESOLVIDO (ver "Rodada de correções finais")

- **Severidade:** HIGH
- **Página:** qualquer rota inexistente (ex.: `/pagina-que-nao-existe-123`)
- **Componente:** ausente — não existe `src/app/not-found.tsx`
- **Arquivo:** N/A (arquivo que deveria existir e não existe)
- **Descrição:** a rota retorna corretamente **status 404** (confirmado via `curl -o /dev/null -w "%{http_code}"`), mas o conteúdo renderizado é a página padrão do Next.js ("404: This page could not be found."), sem header, footer, logo, navegação ou link para a home — confirmado via busca por `<header`, `<footer`, `btn-primary` no HTML retornado (zero ocorrências).
- **Como reproduzir:** acessar `https://www.nosnarua.com.br/qualquer-coisa-invalida` — ou `curl https://www.nosnarua.com.br/pagina-que-nao-existe-123`.
- **Causa provável:** o projeto nunca teve um `not-found.tsx` customizado no App Router.
- **Impacto:** experiência quebra a identidade visual exatamente no momento em que o visitante está "perdido" — pior cenário de UX para recuperar o usuário.
- **Correção recomendada:** criar `src/app/not-found.tsx` usando `SiteShell` (mesmo header/footer do resto do site) com uma mensagem curta e um botão para a home. É uma correção pequena e de baixo risco, mas **não foi aplicada nesta rodada** por instrução explícita de auditar antes de alterar.
- **Risco da correção:** baixo.
- **Esforço estimado:** S

### H3 — `nos-na-rua.vercel.app` continua publicamente acessível e serve o site inteiro ✅ RESOLVIDO (ver "Rodada de correções finais")

- **Severidade:** HIGH (SEO/marca), não é um bug funcional
- **Página:** todas
- **Componente:** configuração de domínio na Vercel (fora do código)
- **Descrição:** `https://nos-na-rua.vercel.app/` responde **200** e serve o HTML completo do site (confirmado via `curl`). O `<link rel="canonical">` dentro desse HTML já aponta corretamente para `https://www.nosnarua.com.br` (o `metadataBase`/`NEXT_PUBLIC_SITE_URL` funcionam — confirmei isso lendo `src/data/site.ts:33`, onde a URL é lida de `process.env.NEXT_PUBLIC_SITE_URL` com fallback para o domínio antigo, e testei ao vivo trocando a env var localmente para confirmar que o valor realmente propaga para `metadataBase`/canonical/OG/sitemap/robots — não é só uma variável "existindo sem uso").
- **Como reproduzir:** `curl -I https://nos-na-rua.vercel.app/` → 200; `curl -s https://nos-na-rua.vercel.app/ | grep canonical` → já aponta para o domínio oficial.
- **Causa provável:** é o comportamento padrão da Vercel — o domínio de deploy automático nunca é removido só porque um domínio customizado foi conectado.
- **Impacto:** risco residual baixo (o `canonical` já resolve a maior parte do problema de conteúdo duplicado para buscadores sérios), mas o domínio antigo continua "vazando" para quem tiver o link salvo, e pode ser usado por terceiros para criar links que não refletem a marca oficial.
- **Correção recomendada (não implementada, decisão do usuário):** configurar um redirecionamento 308 **apenas no hostname `nos-na-rua.vercel.app`** para `https://www.nosnarua.com.br`, feito nas configurações de domínio/redirects da Vercel — **não em `next.config.mjs`**, para não afetar deploys de preview (`*-git-*.vercel.app`, `*-yuri-menezes.vercel.app`), que precisam continuar respondendo normalmente para você revisar PRs. Alternativa mais simples e sem risco nenhum: deixar como está, já que o canonical resolve o essencial.
- **Risco da correção:** médio se feito errado (pode quebrar previews); baixo se restrito ao hostname exato de produção antigo.
- **Esforço estimado:** S (fora do código, config na Vercel)

---

## P2 — MEDIUM

### M1 — Ausência de cabeçalhos de segurança HTTP

- **Severidade:** MEDIUM
- **Arquivo:** `next.config.mjs` (não configura `headers()`)
- **Descrição:** `curl -I` na produção mostra apenas `Strict-Transport-Security` (HSTS, via HTTPS forçado da Vercel). Não há `X-Frame-Options`, `X-Content-Type-Options`, `Content-Security-Policy`, `Referrer-Policy` nem `Permissions-Policy`.
- **Impacto:** baixo dado o perfil do site (sem formulários, sem cookies, sem dados de usuário), mas a página `/doe` exibe a chave PIX oficial — um `X-Frame-Options: DENY` (ou `frame-ancestors 'none'` via CSP) evita que a página seja embutida em iframe de terceiros para golpes de clickjacking/phishing que imitem a doação oficial.
- **Correção recomendada:** adicionar um `headers()` básico em `next.config.mjs` com `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. CSP é opcional e mais trabalhoso de acertar sem quebrar nada — pode ficar para depois.
- **Risco da correção:** baixo.
- **Esforço estimado:** S

### M2 — Frase "sem intermediários" — FLAG para revisão humana (não corrigido)

- **Página:** Home (seção "Para onde vão as doações")
- **Arquivo:** `src/components/home/DonationsFlow.tsx:26-27`
- **Texto atual:** *"Tudo o que chega até o Nós na Rua é direcionado às ações reais da associação — sem intermediários."*
- **Descrição:** "sem intermediários" pode ser lido como uma afirmação absoluta sobre a estrutura administrativa/financeira da associação (ex.: implica ausência de qualquer gestão, taxa bancária, ou processo intermediário), o que pode não ser tecnicamente preciso e é o tipo de frase que, em auditoria de ONG, vale confirmar com a diretoria antes de publicar definitivamente.
- **Texto institucional mais cauteloso já usado em `/transparencia`:** *"As doações recebidas são destinadas à manutenção das ações semanais e à aquisição de materiais, insumos e recursos necessários para os projetos ativos."*
- **Correção recomendada:** decisão da associação — **não alterei** esta rodada, conforme instrução explícita.

### M3 — Pequena inconsistência de texto entre Home e `/transparencia`

- **Arquivos:** `src/components/home/TransparencyPreview.tsx:21-22` vs `src/app/transparencia/page.tsx:55-57`
- **Descrição:** a Home diz *"...destinadas à manutenção das ações semanais e à **compra** de materiais e insumos necessários..."*; `/transparencia` diz *"...destinadas à manutenção das ações semanais e à **aquisição de** materiais, insumos **e recursos** necessários..."*. Mesmo sentido, redação ligeiramente diferente.
- **Impacto:** cosmético — não contradiz, apenas não é palavra-por-palavra idêntico.
- **Correção recomendada:** unificar a redação nos dois lugares, se a associação preferir consistência literal.
- **Risco:** nenhum. **Esforço:** S

### M4 — `CONTENT_PENDING.md` desatualizado

- **Arquivo:** `CONTENT_PENDING.md` (documento interno, não publicado no site)
- **Descrição:** ainda lista como pendente "enviar logos dos parceiros" e "melhor foto de entrega de cesta básica para Adote uma Família" — ambos **já resolvidos** em rodadas anteriores (7 parceiros com logos reais; nova foto no hero e no projeto Adote uma Família).
- **Correção recomendada:** atualizar o arquivo para refletir o estado atual, evitando retrabalho ou confusão futura.
- **Risco:** nenhum (arquivo interno). **Esforço:** S

---

## P3 — POLISH

- **L1 — Nome de arquivo x nome exibido:** `public/images/parceiros/centro-comunitario-tapera.png` usa "Centro" no nome do arquivo, mas o texto exibido (correto, batendo com a logo oficial) é "**Conselho** Comunitário da Tapera" (`src/data/site.ts`, id `conselho-comunitario-tapera`). Puramente cosmético/interno — não aparece para o usuário. Esforço: S.
- **L2 — Fragilidade defensiva em `PartnerItem` sem logo:** em `src/components/home/PartnersSection.tsx`, o ramo "sem logo" sempre renderiza `<a href={partner.href}>`, mesmo quando `href` é `undefined`. Hoje funciona porque a Cozinha Solidária (único parceiro sem logo) tem `href` preenchido; se um futuro parceiro sem logo **e** sem link for adicionado, o React renderiza um `<a>` sem `href`, que fica fora da ordem de tabulação em alguns navegadores. Recomendo trocar para renderizar `<div>` quando não houver `href`. Esforço: S.
- **L3 — Sem `manifest.json` / `site.webmanifest`:** não é crítico (o site não é um PWA e os ícones já funcionam via convenção do App Router — confirmado: `<link rel="icon">` e `<link rel="apple-touch-icon">` presentes e corretos). É uma melhoria opcional para "Adicionar à tela inicial" no Android. Esforço: S.
- **L4 — Vulnerabilidades transitivas de `sharp`/`postcss`:** resolvidas pelo mesmo fix de H1 (atualizar o Next.js), não é um item separado de ação.

---

## Interações testadas

| Elemento | Desktop | Mobile | Teclado | Resultado |
|---|---|---|---|---|
| Header — links de navegação | ✅ clicável, `href` correto | ✅ (via menu) | ⚠️ não testável nesta ferramenta (ver limitação acima) — semântica `<a>` nativa, deve funcionar | OK |
| Header — botão "Doar agora" | ✅ | ✅ | ⚠️ | OK |
| Header — abrir menu mobile | N/A | ✅ abre, foco move para "Fechar menu", `body` trava scroll | N/A | OK |
| Header — fechar menu (X) | N/A | ✅ (mesma função `closeMenu`) | N/A | OK (por código; Escape testado ao vivo confirma o mesmo caminho) |
| Header — fechar menu (Escape) | N/A | ✅ testado ao vivo: fecha, foco volta a "Abrir menu", scroll destrava | N/A | OK |
| Header — fechar menu (clique fora) | N/A | ✅ `onClick={closeMenu}` no backdrop (revisão de código) | N/A | OK |
| Hero — "Doar agora" / "Conheça nossas ações" | ✅ contraste ótimo, Rita+família visíveis no crop | ✅ crop responsivo mostra pessoas, não parede | ⚠️ | OK |
| "Ver itens mais necessários +" (accordion) | ✅ **testado ao vivo em produção — abre e fecha corretamente**, altura muda de 56px→288px | ✅ **testado ao vivo (tap) — mesmo resultado** | ⚠️ (ver nota) | **OK, não reproduzi o bug relatado** |
| "Copiar chave PIX" (/doe) | ✅ clique real dispara o handler | — | — | Código correto e defensivo (fallback + `aria-live`); teste ao vivo bloqueado pela sandbox de clipboard da ferramenta de automação (`NotAllowedError` do próprio navegador de teste, confirmado via probe direto da API), não do site |
| WhatsApp (8 ocorrências na Home) | ✅ todos com telefone/URL/encoding corretos, `target="_blank"` + `rel="noopener noreferrer"` | ✅ | — | OK |
| Instagram (Nós na Rua + Cozinha Solidária) | ✅ URLs corretas | ✅ | — | OK |
| Logos de parceiros (6 com logo) | ✅ carregam (200), peso visual equilibrado, sem grayscale | ✅ 2 colunas, última linha centralizada | — | OK |
| Galeria (grid de fotos) | ✅ imagens carregam, `lazy`, sem lightbox | ✅ | — | Sem lightbox é decisão de design já existente — não há nada que pareça clicável sem ser (sem `cursor-pointer`, sem hover de "ampliar") |
| Footer — links e ícones | ✅ | ✅ | ⚠️ | OK |
| Skip link "Pular para o conteúdo" | ✅ presente no código (`sr-only focus:not-sr-only`), aponta para `#conteudo` existente em `<main>` | — | — | OK por revisão de código |

---

## Links e rotas

| URL | Status | Destino | Observação |
|---|---|---|---|
| `/` | 200 | Home | — |
| `/doe` | 200 | Doação | — |
| `/transparencia` | 200 | Transparência | Lista de relatórios vazia — ver seção "Itens que dependem da ONG" |
| `/politica-de-privacidade` | 200 | Política | — |
| `/termos-de-uso` | 200 | Termos | — |
| `/pagina-que-nao-existe-123` | 404 | Página padrão do Next.js | Ver **P1-H2** |
| `/sitemap.xml` | 200 | XML válido, 5 URLs, todas `www.nosnarua.com.br` | OK |
| `/robots.txt` | 200 | `Allow: /`, sitemap correto | OK |
| `https://nosnarua.com.br/` (apex, sem www) | 308 | → `https://www.nosnarua.com.br/` | OK, confirmado |
| `https://nos-na-rua.vercel.app/` | 200 | Site completo (canonical correto internamente) | Ver **P1-H3** |
| `http://www.nosnarua.com.br/` | 308 | → HTTPS | OK |

---

## SEO técnico

- **`metadataBase`:** `new URL(siteConfig.url)`, e `siteConfig.url` lê `process.env.NEXT_PUBLIC_SITE_URL` com fallback (`src/data/site.ts:33`) — **confirmado em uso real**, não só declarado: testei localmente sobrescrevendo a env var e o `robots.txt`/sitemap gerados mudaram de acordo.
- **Canonical:** correto em todas as 5 páginas, sempre `https://www.nosnarua.com.br/...`. Nenhuma ocorrência de `vercel.app` como canonical.
- **Open Graph:** `og:title`, `og:description`, `og:url`, `og:image` (gerado dinamicamente via `opengraph-image.tsx`, usa a logo real, 200 OK, `image/png`, 1200×630) presentes e corretos.
- **Twitter Card:** `summary_large_image` configurado em `layout.tsx`.
- **Sitemap:** gerado por `src/app/sitemap.ts`, 5 URLs, todas no domínio oficial, sem rotas inexistentes.
- **Robots:** gerado por `src/app/robots.ts`, indexação liberada, `Sitemap:` aponta para a URL certa.
- **JSON-LD:** presente em `layout.tsx` (`@type: "NGO"`), com CNPJ, nome legal, endereço **só até cidade/estado** (sem endereço residencial — correto e intencional, documentado em `CONTENT_PENDING.md`), Instagram em `sameAs`. Nenhum dado inventado (sem telefone além do WhatsApp real, sem avaliação/rating, sem fundadores fictícios).
- **`www` vs apex vs `vercel.app`:** ver P1-H3.

---

## Performance

Não há ferramenta de Lighthouse disponível nesta sessão para gerar uma pontuação formal; a avaliação abaixo é por evidência direta de rede/bundle, não uma nota Lighthouse real — **não afirmo uma nota 0–100 que não medi de verdade**.

- **JS:** 102 KB compartilhado entre todas as páginas + ~1–2 KB por rota (build de produção, `npm run build`). Nenhuma biblioteca de animação pesada — apenas CSS/transform e um `IntersectionObserver` nativo em `Reveal.tsx`.
- **Imagens:** pipeline do `next/image` funcionando de verdade — testei a URL otimizada real da imagem do hero em mobile (`w=640`): **55 KB entregues**, não o arquivo-fonte de 250 KB. Mesma checagem numa logo de parceiro: 35 KB. `priority` está presente **apenas** na logo do header e na foto do hero — nenhuma outra imagem da Home (equipe, projetos, galeria, parceiros, CTA final) usa `priority`, todas usam `loading="lazy"` por padrão.
- **LCP:** a imagem do hero tem `priority` + `<link rel="preload" as="image">` gerado automaticamente — tratamento correto para o elemento LCP.
- **Fontes:** `next/font/google` (Bricolage Grotesque + DM Sans), self-hosted — confirmei no HTML de produção que os `.woff2` vêm de `/_next/static/media/...`, **nenhuma requisição para `fonts.googleapis.com`**. Sem FOIT (usa `display: "swap"`).
- **CLS:** não encontrei nenhum `<Image>` sem `width`/`height` explícitos ou sem `fill` dentro de um contêiner com altura definida (revisei os 10 arquivos que usam `next/image`).
- **Scripts de terceiros:** zero. Confirmado por busca de `<script src="http`.

---

## Interações e áreas específicas

### Accordion / `<details>` — investigação do bug relatado

Segui o roteiro pedido à risca:

1. **Busca no código:** nenhuma ocorrência literal de "Mostrar conteúdo" em `src/` (nem variações de maiúsculas). O único elemento expansível do projeto é o `<details>`/`<summary>` de "Ver itens mais necessários" em `src/components/home/HelpSection.tsx:61-84`.
2. **Teste real de clique (mouse), produção, desktop:** abre (altura 56px → 288px) e fecha corretamente.
3. **Teste real de toque (mobile, 375px), produção:** mesmo resultado.
4. **`aria-expanded`:** ausente — **isso não é um bug**. `<summary>` é um elemento nativo com semântica de disclosure já reconhecida por leitores de tela; adicionar `aria-expanded` manualmente seria redundante (e arriscaria duplicar/conflitar com o estado nativo `[open]` do `<details>`).
5. **`tabIndex`:** `0` — focável por teclado normalmente.
6. **Teclado (Enter/Espaço):** inconclusivo nesta ferramenta de automação (ver limitação de metodologia no topo do relatório) — o mesmo teste, feito num `<a href>` comum da própria Header, também "falhou" da mesma forma, provando que é a ferramenta, não o site.
7. **Overflow/z-index/pointer-events:** nada bloqueando — o conteúdo expandido ocupa espaço real no layout (a altura do elemento muda de verdade, não é só uma classe CSS de opacidade).

**Conclusão:** não consegui reproduzir o problema relatado no componente mais provável. Duas hipóteses para o usuário considerar: (a) o problema já foi corrigido numa rodada anterior e o relato é de uma versão antiga em cache do navegador do usuário; (b) existe outro elemento, em outro contexto (talvez fora do site, ou um comportamento específico de um navegador/extensão do usuário), que não encontrei. **Recomendo pedir ao usuário um print de tela ou o navegador/dispositivo exato onde viu "Mostrar conteúdo"** para eu conseguir mirar precisamente, caso o problema persista.

### Busca global — linguagem institucional

- `"situação de rua"`, `"morador(a/es) de rua"`, `"famílias em situação de rua"`: **zero ocorrências** em `src/` e em toda a documentação `.md` do repositório.
- `"a Nós na Rua"` (sem "o"/"Associação"): **zero ocorrências**.
- Padrão obrigatório `"pessoas e famílias em situação de vulnerabilidade social"`: presente e consistente em Hero, Quem Somos, missão, metadata, JSON-LD.

### Parceiros — nomenclatura

- **"Conselho Comunitário da Tapera" vs "Centro Comunitário da Tapera":** o código usa "**Conselho**" (nome exibido e `alt`), batendo com o texto que aparece na própria logo oficial fornecida (círculo com "Conselho Comunitário da Tapera — Florianópolis - SC"). Isso foi uma decisão já tomada e documentada numa rodada anterior — **sinalizando aqui, como pedido, para confirmação humana**: se a associação usa oficialmente "Centro" em vez de "Conselho" em documentos formais, é só trocar a string em `src/data/site.ts` (um único lugar).
- **"Academia Córrego Grande" x "Run Fitness Club":** o código não menciona "Academia Córrego Grande" em nenhum texto visível — usa apenas "Run Fitness Club" (nome que está na própria logo), conforme já combinado anteriormente. Nenhuma equivalência é afirmada no site além dessa.
- **Ceconluz:** logo real carregando, `alt="Ceconluz — parceira do Nós na Rua"`.
- **Cozinha Solidária da Vila Aparecida:** bloco tipográfico + `@shira_cozinhasolidaria` com link para `https://www.instagram.com/shira_cozinhasolidaria`, `target="_blank"`, `rel="noopener noreferrer"` — confirmado no HTML de produção.

---

## Itens que dependem da associação (NÃO são bugs)

- **`/transparencia` sem relatórios publicados:** `transparencyReports` está intencionalmente vazio (`src/data/transparency.ts:29`) até a associação fornecer documentos reais. A página já trata esse estado de forma honesta (mensagem clara + WhatsApp), sem inventar dados.
- **QR Code do PIX:** `siteConfig.donation.qrCodeImage` é `null` — quando a associação enviar o arquivo oficial, ele passa a aparecer automaticamente em `/doe` sem mudança de código.
- **Confirmação de "Conselho" vs "Centro" Comunitário da Tapera** (ver seção acima) — decisão institucional, não técnica.
- **Frase "sem intermediários"** (M2) — decisão de redação institucional.
- **Autorização formal de uso de imagem** das pessoas e voluntários fotografados — já documentada como pendência em `CONTENT_PENDING.md`; não é algo verificável pelo código, e não tentei identificar ninguém nas fotos.

---

## Segurança

- Nenhum secret hardcoded encontrado (busca por padrões de chave/token).
- Nenhum `.env` commitado (`.gitignore` já bloqueia `.env` e `.env*.local`; só existe `.env.example`, sem valores reais).
- `dangerouslySetInnerHTML` usado em 2 lugares (`layout.tsx`), ambos com conteúdo 100% estático/gerado a partir de dados internos (`JSON.stringify(jsonLd)` e um script fixo de classe CSS) — sem entrada de usuário, sem risco de XSS.
- HTTPS forçado (HSTS presente, HTTP redireciona 308).
- Ver **M1** (cabeçalhos de segurança ausentes) e **H1** (dependência vulnerável).

---

## Veredito da auditoria original (15/09/2026)

# NOT READY FOR HANDOFF

O site está **visualmente pronto e funcionalmente sólido** — não encontrei nenhum botão morto, link quebrado, erro de console, problema de overflow, ou violação da regra de linguagem institucional. A suspeita de bug no accordion não se confirmou nos testes realizados.

Mas há **3 itens P1** que recomendo resolver antes da entrega oficial, todos de baixo risco e esforço pequeno:

1. **Atualizar o Next.js** dentro do range já aprovado (`npm update next`) para eliminar a vulnerabilidade crítica conhecida — é literalmente um `npm install`, sem mudança de código.
2. **Criar uma página 404 com a identidade do site** (`not-found.tsx` usando `SiteShell`) — hoje quem erra a URL cai na tela genérica do Next.js.
3. **Decidir o que fazer com `nos-na-rua.vercel.app`** — hoje ele ainda serve o site inteiro publicamente; o canonical já mitiga o risco de SEO, mas vale uma decisão consciente (deixar como está é uma opção legítima, não só "redirecionar").

---

## Rodada de correções finais (15/09/2026)

Correções aplicadas com base nos 3 P1 acima, mais os itens P2 diretamente acionáveis sem risco (M1, M2, M3). Nada foi redesenhado; nenhuma seção da home foi reorganizada; nenhuma foto foi trocada; o accordion não foi tocado.

### 1. Next.js atualizado (H1)

- **Antes:** `next@15.5.20`, `eslint-config-next@15.5.20` — 8 vulnerabilidades no `npm audit` (**1 crítica**, 6 altas, 1 moderada), incluindo RCE não autenticado.
- **Depois:** `next@15.5.25`, `eslint-config-next@15.5.25` — **mesma linha 15.5.x**, dentro do range `^15.5.x` já declarado em `package.json`, sem migração para o Next 16.
- **Arquivos:** `package.json`, `package-lock.json`.
- **`npm audit` depois:** 2 vulnerabilidades restantes (1 moderada, 1 alta), ambas de `postcss` empacotado **dentro do próprio** `node_modules/next` — o único fix disponível para elas é `next@16.3.5` (`npm audit fix --force` avisa isso explicitamente), o que violaria a instrução de não migrar de major version. Fica documentado como risco residual aceito nesta rodada.
- **React/React DOM:** inalterados (`^19.0.0`), build confirma compatibilidade.
- **`npm run lint`:** limpo.
- **`npx tsc --noEmit`:** limpo.
- **`npm run build`:** 13 rotas geradas, bundle compartilhado 103 KB (era 102 KB — variação desprezível).

### 2. Página 404 personalizada (H2)

- **Arquivo novo:** `src/app/not-found.tsx` — usa `SiteShell` (mesmo header/footer/skip-link de todas as páginas), `kicker`/`section-title`/`section-lead` (mesmos componentes tipográficos de `/transparencia` e outras páginas internas), `btn-primary` + `btn-secondary` (mesmos botões do resto do site) e o mesmo elemento decorativo `LeafSprig` já usado em `/transparencia`. Metadata própria com `title` e `robots: {index: false}`.
- **Teste local (Host real via `curl`):** `GET /pagina-que-nao-existe-123` → **404**.
- **Teste em produção:** `curl -o /dev/null -w "%{http_code}" https://www.nosnarua.com.br/pagina-que-nao-existe-123` → **404**. HTML confirmado com `<header>`, `<footer>`, "Essa página não foi encontrada.", "Voltar para o início".
- **H1 único:** confirmado (só o `<h1>` da própria página 404).
- **Console:** sem erros próprios da página (o único "erro" que aparece é o navegador logando a própria requisição 404 do documento — comportamento esperado e correto, não é um bug).
- **Teclado/foco:** os dois CTAs são `<Link>` do Next.js (`<a>` nativo), com o mesmo `:focus-visible` global do resto do site — sem tratamento especial necessário.

### 3. Redirect do domínio antigo da Vercel (H3)

- **Implementação:** `redirects()` nativo do `next.config.mjs`, usando `has: [{ type: "host", value: "nos-na-rua.vercel.app" }]` — **sem middleware**, condicionado ao hostname exato, path preservado via `/:path*` → `/:path*`.
- **Teste local simulando o host exato** (`curl -H "Host: nos-na-rua.vercel.app"`): `/`, `/doe`, `/transparencia` → todos **308**, `Location` correta, path preservado. Host normal (`localhost`) → **200**, não afetado.
- **Teste em produção, domínio real:**
  ```
  curl -I https://nos-na-rua.vercel.app/              → 308 → https://www.nosnarua.com.br/
  curl -I https://nos-na-rua.vercel.app/doe            → 308 → https://www.nosnarua.com.br/doe
  curl -I https://nos-na-rua.vercel.app/transparencia  → 308 → https://www.nosnarua.com.br/transparencia
  ```
- **Preview deployments não afetados:** testei `https://nos-na-rua-yuri-menezes.vercel.app/` (outro hostname `*.vercel.app` do mesmo projeto) — responde diferente do nosso redirect (302, comportamento próprio da Vercel, não a nossa regra), confirmando que a condição `has: [{type: "host"}]` está corretamente restrita ao hostname exato e não vira um redirect genérico de `*.vercel.app`.
- **Não é client-side:** é um redirect HTTP 308 real, gerado no roteamento do Next/Vercel antes de qualquer JavaScript rodar.

### 4. Domínio canônico — reconfirmado

- `NEXT_PUBLIC_SITE_URL` continua apontando para `https://www.nosnarua.com.br` (variável já configurada na Vercel numa rodada anterior; não foi alterada agora).
- Testado em produção após o deploy: `canonical`, `og:url`, `sitemap.xml` (5 URLs) e `robots.txt` — **todos** em `www.nosnarua.com.br`, nenhuma ocorrência de `vercel.app` como canonical ou nas URLs do sitemap.

### 5. Copy — "sem intermediários" removido (P2/M2 e M3)

- **`src/components/home/DonationsFlow.tsx`:** *"Tudo o que chega até o Nós na Rua é direcionado às ações reais da associação — sem intermediários."* → **"As doações recebidas ajudam a manter as ações e os projetos do Nós na Rua, além da aquisição de materiais, insumos e recursos necessários para cada iniciativa."** (texto sugerido pelo usuário, aplicado literalmente).
- **`src/components/home/TransparencyPreview.tsx`:** alinhado à mesma redação de `/transparencia` (troquei "compra de materiais e insumos necessários" por "aquisição de materiais, insumos e recursos necessários", igual à página de transparência) — resolve também o item **M3** (inconsistência de redação entre Home e `/transparencia`).
- **`/doe`:** já não tinha nenhuma frase absoluta (`"100%"`, `"sem custos"`, etc.) — confirmado por busca global, nada a alterar.
- **Confirmado em produção:** zero ocorrências de "sem intermediários" no HTML servido.

### 6. Headers de segurança (M1)

- Adicionados em `next.config.mjs`, via `headers()`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- **CSP:** deliberadamente **não** implementada nesta rodada (risco de quebrar algo em produção sem mapear todas as fontes primeiro) — fica como recomendação P2 para uma rodada dedicada.
- **HSTS:** não configurada no app — a Vercel já aplica `Strict-Transport-Security` na borda (confirmado, `max-age=63072000`).
- **Confirmado em produção:** todos os 4 headers presentes em `curl -I https://www.nosnarua.com.br/`. Imagens, fontes e links externos (WhatsApp, Instagram) seguem funcionando normalmente — `X-Frame-Options: DENY` só afeta o site sendo carregado *dentro de* um iframe de terceiros, não afeta nada dentro do próprio site.

### 7. Accordion — reteste final (não alterado)

Conforme instruído, **nenhuma linha do componente foi tocada**. Reteste em produção após todas as mudanças acima: clique real em "Ver itens mais necessários" → `details.open` passa de `false` para `true`, conteúdo expande normalmente. Sem regressão.

### 8. "Mostrar conteúdo" — busca final

Busca global por `"Mostrar conteúdo"` e `"mostrar conteúdo"` em `src/`: **zero ocorrências**, confirmado novamente após todas as mudanças desta rodada. Nenhuma correção foi inventada para um problema que não existe no código.

### 9. Regressão geral

Retestado após o deploy, em produção: `/`, `/doe`, `/transparencia`, `/politica-de-privacidade`, `/termos-de-uso` e `/pagina-que-nao-existe-123` — todos 200 (ou 404, no caso da última), sem erros de console na home, accordion funcional, WhatsApp/Instagram com URLs corretas, `lint`/`typecheck`/`build` limpos localmente antes do deploy.

---

## Veredito atualizado (após a rodada de correções)

# READY FOR HANDOFF

Os 3 itens P1 foram corrigidos e verificados em produção, sem regressão encontrada:

1. ✅ Next.js atualizado para 15.5.25 (mesma linha, vulnerabilidade crítica eliminada).
2. ✅ Página 404 personalizada no ar, com a identidade do site, status HTTP 404 confirmado.
3. ✅ `nos-na-rua.vercel.app` agora redireciona (308) para `www.nosnarua.com.br`, path preservado, sem afetar previews.

Também foram resolvidos, sem risco: a frase "sem intermediários" (M2), a inconsistência de redação entre Home e `/transparencia` (M3), e a ausência de headers básicos de segurança (M1).

**O que permanece em aberto — nenhum bloqueia a entrega:**

- **P3/L1–L4** (nome de arquivo `centro-comunitario-tapera.png`, `PartnerItem` sem `href` opcional, ausência de `manifest.json`, `CONTENT_PENDING.md` desatualizado) — refinamentos, sem prazo.
- **Resíduo de `npm audit`** (2 avisos de `postcss` interno ao Next.js) — só resolvido com Next 16, fora de escopo.
- **CSP rígida** — recomendação P2 para uma rodada dedicada, não implementada de propósito.
- **Itens que dependem da associação** (documentos de transparência, confirmação de "Conselho" vs "Centro", QR Code do PIX, autorização de imagem) — inalterados, não são bugs.

**Ação manual que ainda pode ser necessária na Vercel:** nenhuma para os itens desta rodada — `NEXT_PUBLIC_SITE_URL` já estava configurada, o redirect e os headers são só código (`next.config.mjs`), e a atualização do Next.js foi só `npm install` + deploy normal via `git push`.

Depois desses três pontos, o site está pronto para entrega. Os itens P2/P3 são refinamentos que podem entrar em qualquer momento depois, sem pressa.
