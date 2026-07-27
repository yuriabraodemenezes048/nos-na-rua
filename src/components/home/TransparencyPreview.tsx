import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LeafSprig } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/** Chamada para a área de transparência, com a identificação institucional. */
export function TransparencyPreview() {
  return (
    <section id="transparencia-preview" className="section bg-sand/50">
      <div className="container-site">
        <Reveal className="relative max-w-2xl">
          <LeafSprig
            aria-hidden="true"
            className="absolute -right-4 -top-10 hidden h-28 w-20 text-brown/15 sm:block"
          />
          <p className="kicker">Transparência</p>
          <h2 className="section-title mt-4">
            Confiança se constrói com clareza
          </h2>
          <p className="section-lead mt-4">
            As doações recebidas são destinadas à manutenção das ações semanais
            e à compra de materiais necessários para os projetos ativos.
          </p>

          <div className="mt-6 text-[0.9375rem] text-muted">
            <p className="font-medium text-ink">{siteConfig.legalName}</p>
            <p>CNPJ {siteConfig.organization.cnpj}</p>
          </div>

          <Link href="/transparencia" className="btn-primary mt-8">
            Ver transparência
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
