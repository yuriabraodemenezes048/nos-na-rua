import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";
import { whatsappUrl, whatsappMessages, companyPartnership } from "@/data/site";
import { needCategories } from "@/data/donations";

/**
 * Como ajudar — quatro caminhos, apresentados como uma lista editorial (não
 * uma parede de cards), para serem entendidos rapidamente. Os itens de
 * doação ficam atrás de um acordeão acessível. Empresas ganha um bloco
 * próprio logo abaixo, com mais destaque, pois é uma frente em crescimento.
 */
export function HelpSection() {
  return (
    <section id="como-ajudar" className="section">
      <div className="container-site">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-2xl">
            <p className="kicker">Como ajudar</p>
            <h2 className="section-title mt-4">Tem muitas formas de fazer parte.</h2>
            <p className="section-lead mt-4">
              Cada contribuição ajuda o Nós na Rua a manter suas ações e ampliar
              sua rede de cuidado.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120} className="mx-auto hidden w-36 lg:block">
            <Character who="box" tone="cream" float objectPosition="center top" />
          </Reveal>
        </div>

        <Reveal className="mt-12 border-t border-brown/12">
          {/* 1 — Doar */}
          <HelpRow
            index="01"
            title="Doar"
            desc="Contribua com qualquer valor pelo PIX. Rápido, seguro e direto."
          >
            <Link href="/doe" className="btn-primary">
              Doar
            </Link>
          </HelpRow>

          {/* 2 — Doar itens */}
          <HelpRow
            index="02"
            title="Doar itens"
            desc="Alimentos, roupas, higiene, materiais e insumos ajudam nas entregas e nos projetos."
          >
            <a
              href={whatsappUrl(whatsappMessages.items)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Combinar doação
            </a>
          </HelpRow>
          <details className="group -mt-2 pb-8">
            <summary className="ml-0 flex w-fit cursor-pointer list-none items-center gap-2 text-[0.9375rem] font-semibold text-brown sm:ml-[4.5rem]">
              Ver itens mais necessários
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full border border-brown/30 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-4 grid gap-x-10 gap-y-4 sm:ml-[4.5rem] sm:grid-cols-2">
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

          {/* 3 — Ser voluntário */}
          <HelpRow
            index="03"
            title="Ser voluntário"
            desc="A atuação do Nós na Rua também acontece com a força de pessoas dispostas a ajudar, acolher e participar das ações junto à comunidade."
          >
            <a
              href={whatsappUrl(whatsappMessages.volunteer)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero participar
            </a>
          </HelpRow>

          {/* 4 — Ser parceiro (versão curta da lista; detalhe logo abaixo) */}
          <HelpRow
            index="04"
            title="Ser parceiro"
            desc="Sua empresa também pode fazer parte dessa rede de cuidado."
          >
            <a
              href="#empresas"
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brown underline-offset-4 hover:underline"
            >
              Saiba mais
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </HelpRow>
        </Reveal>

        {/* Empresas — bloco com mais destaque dentro de Como ajudar */}
        <Reveal
          id="empresas"
          delay={80}
          className="relative mt-10 overflow-hidden rounded-3xl bg-brown p-8 text-white sm:p-10 lg:pr-56"
        >
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-white/70">
            Para empresas
          </p>
          <h3 className="mt-3 font-display text-2xl sm:text-[1.75rem]">
            Sua empresa pode fortalecer essa rede.
          </h3>
          <p className="mt-3 max-w-prose leading-relaxed text-white/85">
            Empresas podem apoiar o Nós na Rua por meio de doações financeiras,
            produtos, serviços, logística, campanhas e outras formas de
            parceria.
          </p>

          {companyPartnership.fiscalInfo.enabled &&
            companyPartnership.fiscalInfo.text && (
              <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-white/75">
                {companyPartnership.fiscalInfo.text}
              </p>
            )}

          <a
            href={whatsappUrl(whatsappMessages.partnership)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-brown mt-7"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quero ser parceiro
          </a>

          <Character
            who="blazer"
            tone="cream"
            className="pointer-events-none absolute -bottom-4 -right-2 hidden w-48 lg:block"
            sizes="192px"
          />
        </Reveal>
      </div>
    </section>
  );
}

function HelpRow({
  index,
  title,
  desc,
  children,
}: {
  index: string;
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-4 border-b border-brown/12 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
      <span
        aria-hidden="true"
        className="font-display text-2xl font-semibold text-brown/50 sm:w-10"
      >
        {index}
      </span>
      <div className="max-w-prose">
        <h3 className="font-display text-xl text-ink sm:text-2xl">{title}</h3>
        <p className="mt-1.5 leading-relaxed text-muted">{desc}</p>
      </div>
      <div className="sm:justify-self-end">{children}</div>
    </div>
  );
}
