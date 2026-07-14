import { PhotoFrame } from "@/components/PhotoFrame";
import { DemoNotice } from "@/components/DemoNotice";
import {
  HeartIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/Icons";
import { site, whatsappLink, instagramLink } from "@/lib/site";

/**
 * SEÇÃO 1 — HERO / PRIMEIRA DOBRA
 * Comunica em segundos: existe uma ONG séria, ela ajuda pessoas, dá para
 * confiar e é fácil doar.
 */
export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-24 sm:pt-28"
      aria-labelledby="hero-titulo"
    >
      {/* Brilho suave de fundo, bem leve */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 75% 0%, rgba(56,133,95,0.10), transparent 60%), radial-gradient(50% 45% at 10% 10%, rgba(184,90,52,0.08), transparent 60%)",
        }}
      />

      <div className="container-site grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-24">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <span className="eyebrow">
            <HeartIcon className="h-4 w-4" />
            ONG {site.name}
          </span>

          <h1
            id="hero-titulo"
            className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Solidariedade
            <br className="hidden sm:block" /> transformada em{" "}
            <span className="text-verde-500">ação</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-stone">
            Conheça o trabalho da ONG, entenda como sua contribuição ajuda e doe
            de forma simples e segura.
          </p>

          {/* CTAs principais */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a href="#doacao" className="btn-primary w-full sm:w-auto">
              <HeartIcon className="h-5 w-5" />
              Quero Doar
            </a>
            <a href="#o-que-fazemos" className="btn-secondary w-full sm:w-auto">
              Conheça nosso trabalho
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Acesso rápido a WhatsApp e Instagram */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-ink transition hover:text-verde-600"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              Falar no WhatsApp
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-ink transition hover:text-terra-500"
            >
              <InstagramIcon className="h-5 w-5 text-terra-500" />
              @{site.contact.instagram}
            </a>
          </div>
        </div>

        {/* Coluna de imagem */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <PhotoFrame
            label="Foto humana da ONG em ação"
            aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
            className="shadow-soft"
          />
          {/* Selo flutuante de confiança */}
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-ink/5 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:left-6">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-verde-50 text-verde-500">
              <HeartIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">
                Cuidado e acolhimento
              </p>
              <p className="text-xs text-stone">
                Ações sociais com transparência
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site pb-10">
        <DemoNotice />
      </div>
    </section>
  );
}
