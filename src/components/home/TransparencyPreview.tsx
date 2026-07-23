import Link from "next/link";
import { siteConfig } from "@/data/site";

/** Chamada para a área de transparência, com a identificação institucional. */
export function TransparencyPreview() {
  return (
    <section className="section bg-sand/40">
      <div className="container-site">
        <h2 className="section-title">Transparência em cada contribuição</h2>
        <p className="section-lead mt-4">
          Queremos que doadores, voluntários e parceiros possam acompanhar como
          as ações são realizadas e quais resultados foram publicados pela
          associação.
        </p>

        <div className="mt-8 text-[0.9375rem] text-muted">
          <p className="font-medium text-ink">{siteConfig.legalName}</p>
          <p>CNPJ {siteConfig.organization.cnpj}</p>
        </div>

        <Link href="/transparencia" className="btn-primary mt-8">
          Ver transparência
        </Link>
      </div>
    </section>
  );
}
