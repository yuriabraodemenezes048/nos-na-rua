import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl, whatsappMessages } from "@/data/site";
import { needCategories } from "@/data/donations";

/**
 * Como ajudar — seção única que reúne doação por PIX, doação de itens (com
 * acordeão de necessidades), voluntariado e parceria empresarial. Composição
 * editorial; os personagens da identidade entram como apoio.
 */
export function HelpSection() {
  const { donation } = siteConfig;

  return (
    <section id="como-ajudar" className="section bg-sand/40">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Como ajudar</p>
          <h2 className="section-title mt-4">Tem muitas formas de fazer parte.</h2>
          <p className="section-lead mt-4">
            Cada contribuição ajuda o Nós na Rua a manter suas ações e ampliar
            sua rede de cuidado.
          </p>
        </Reveal>

        {/* Blocos principais: PIX + Itens */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl bg-brown p-7 text-white shadow-soft sm:p-8">
            <h3 className="font-display text-2xl">Doação financeira</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              Contribua com qualquer valor pelo PIX. Rápido e seguro.
            </p>
            <dl className="mt-5 space-y-3 border-t border-white/15 pt-5 text-[0.9375rem]">
              <div>
                <dt className="text-white/70">PIX (CNPJ)</dt>
                <dd className="font-mono font-medium">{donation.pixKey}</dd>
              </div>
              <div>
                <dt className="text-white/70">Nome</dt>
                <dd className="font-medium">{donation.receiverName}</dd>
              </div>
            </dl>
            <Link href="/doe" className="btn-on-brown mt-6 w-full sm:w-fit">
              Doar agora
            </Link>
          </Reveal>

          <Reveal delay={80} className="relative overflow-hidden rounded-3xl border border-sand bg-cream p-7 sm:p-8">
            <div className="sm:max-w-[72%]">
              <h3 className="font-display text-2xl">Doação de itens</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Alimentos, roupas, agasalhos, itens de higiene, materiais
                escolares, brinquedos e insumos ajudam nas entregas e nos
                projetos.
              </p>

              <details className="group mt-5 rounded-2xl border border-sand">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[0.9375rem] font-semibold text-brown">
                  Ver itens mais necessários
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brown/30 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="space-y-4 px-4 pb-4">
                  {needCategories.map((cat) => (
                    <div key={cat.id}>
                      <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wide text-ink">
                        {cat.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {cat.items.join(" · ")}
                        {cat.note ? ` — ${cat.note}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </details>

              <a
                href={whatsappUrl(whatsappMessages.items)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Combinar uma doação
              </a>
            </div>

            <Character
              who="box"
              tone="sand"
              className="pointer-events-none absolute -bottom-4 -right-2 hidden w-36 sm:block lg:w-44"
              sizes="176px"
            />
          </Reveal>
        </div>

        {/* Blocos secundários: Voluntariado + Empresas */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-3xl border border-sand bg-cream p-7">
            <h3 className="font-display text-xl">Voluntariado</h3>
            <p className="mt-2 leading-relaxed text-muted">
              A atuação do Nós na Rua também acontece com a força de pessoas
              dispostas a ajudar, acolher e participar das ações junto à
              comunidade.
            </p>
            <a
              href={whatsappUrl(whatsappMessages.volunteer)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brown underline-offset-4 hover:underline"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero participar
            </a>
          </Reveal>

          <Reveal delay={80} className="relative overflow-hidden rounded-3xl border border-sand bg-cream p-7">
            <div className="sm:max-w-[70%]">
              <h3 className="font-display text-xl">Empresas</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Sua empresa também pode fazer parte dessa rede — com doações,
                produtos, serviços, logística, campanhas e outras formas de
                parceria.
              </p>
              <a
                href={whatsappUrl(whatsappMessages.partnership)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brown underline-offset-4 hover:underline"
              >
                Quero ser parceiro
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <Character
              who="blazer"
              tone="sand"
              className="pointer-events-none absolute -bottom-3 -right-1 hidden w-28 sm:block lg:w-32"
              sizes="128px"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
