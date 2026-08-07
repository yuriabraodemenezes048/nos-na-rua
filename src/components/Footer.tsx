import Link from "next/link";
import { Logo } from "@/components/Logo";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl, emailUrl } from "@/data/site";

/**
 * Rodapé compacto.
 * Exibe apenas cidade e estado — o endereço cadastral não é divulgado.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-sand/50">
      <div className="container-site py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Identificação */}
          <div className="flex flex-col gap-4">
            <Logo size="footer" />
            <div className="text-sm leading-relaxed text-muted">
              <p className="font-medium text-ink">{siteConfig.legalName}</p>
              <p>{siteConfig.location.label}</p>
              <p>Atuação na {siteConfig.location.region}</p>
              <p>CNPJ {siteConfig.organization.cnpj}</p>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Navegação
            </h2>
            <Link href="/" className="text-sm text-muted hover:text-brown">
              Início
            </Link>
            <Link
              href="/transparencia"
              className="text-sm text-muted hover:text-brown"
            >
              Transparência
            </Link>
            <Link href="/doe" className="text-sm text-muted hover:text-brown">
              Doe
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-muted hover:text-brown"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-sm text-muted hover:text-brown"
            >
              Termos de Uso
            </Link>
          </nav>

          {/* Contato */}
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Contato
            </h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-brown"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              {siteConfig.contact.whatsappLabel}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-brown"
            >
              <InstagramIcon className="h-4 w-4 shrink-0" />
              {siteConfig.social.instagramHandle}
            </a>
            <a
              href={emailUrl}
              className="inline-flex items-center gap-2 break-all text-sm text-muted hover:text-brown"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-brown/10 pt-6 text-xs text-muted">
          © {year} Associação {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
