import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

/** Transparência — bloco curto na home, sem gráficos nem cards extras. */
export function TransparencyPreview() {
  const { organization } = siteConfig;
  const facts = [
    siteConfig.legalName,
    `CNPJ ${organization.cnpj}`,
    organization.legalNature,
    `Ativa desde ${organization.foundedYear}`,
  ];

  return (
    <section id="transparencia-preview" className="section">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Transparência</p>
          <h2 className="section-title mt-4">
            Compromisso com a transparência
          </h2>
          <p className="section-lead mt-4">
            As doações recebidas são destinadas à manutenção das ações semanais e
            à compra de materiais necessários para os projetos ativos.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-muted">
            {facts.map((f, i) => (
              <li
                key={f}
                className={
                  i > 0 ? "border-l border-brown/15 pl-6" : undefined
                }
              >
                {f}
              </li>
            ))}
          </ul>

          <Link href="/transparencia" className="btn-primary mt-8">
            Ver transparência
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
