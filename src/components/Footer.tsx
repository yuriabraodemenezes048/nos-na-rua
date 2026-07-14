import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/nav";
import {
  WhatsAppIcon,
  InstagramIcon,
  MailIcon,
  HeartIcon,
} from "@/components/Icons";
import {
  site,
  whatsappLink,
  instagramLink,
  emailLink,
} from "@/lib/site";

/**
 * SEÇÃO 11 — RODAPÉ COMPLETO
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 bg-white">
      <div className="container-site py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca + frase */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-stone">
              {site.tagline} A ONG {site.name} realiza ações de cuidado e
              acolhimento a pessoas em situação de vulnerabilidade.
            </p>
            <a href="#doacao" className="btn-primary w-fit py-2.5">
              <HeartIcon className="h-4 w-4" />
              Quero Doar
            </a>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Navegação
            </h3>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone transition hover:text-verde-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contato / redes */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Fale com a gente
            </h3>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone transition hover:text-verde-600"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              {site.contact.whatsappLabel}
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone transition hover:text-terra-500"
            >
              <InstagramIcon className="h-5 w-5 text-terra-500" />
              @{site.contact.instagram}
            </a>
            <a
              href={emailLink()}
              className="inline-flex items-center gap-2 text-stone transition hover:text-verde-600"
            >
              <MailIcon className="h-5 w-5" />
              {site.contact.email}
            </a>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-ink/5 pt-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              © {year} {site.name}. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: <span className="font-medium">{site.cnpj}</span> ·{" "}
              <a href="/privacidade" className="underline hover:text-ink">
                Política de Privacidade
              </a>
            </p>
          </div>
          <p className="rounded-lg bg-sand px-3 py-1.5 text-xs text-stone">
            ✱ Protótipo demonstrativo — conteúdo provisório para apresentação.
          </p>
        </div>
      </div>
    </footer>
  );
}
