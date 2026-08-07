import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

/** Transparência — bloco curto na home, sem gráficos nem porcentagens. */
export function TransparencyPreview() {
  const { organization, donation } = siteConfig;
  const facts = [
    { label: "CNPJ", value: organization.cnpj },
    { label: "PIX (CNPJ)", value: donation.pixKey },
    { label: "Nome", value: donation.receiverName },
  ];

  return (
    <section id="transparencia-preview" className="section bg-sand/40">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="kicker">Transparência</p>
          <h2 className="section-title mt-4">Transparência também é cuidado.</h2>
          <p className="section-lead mt-4">
            As doações recebidas são destinadas à manutenção das ações semanais e
            à compra de materiais e insumos necessários para os projetos ativos.
          </p>
          <p className="mt-3 max-w-prose leading-relaxed text-muted">
            Nosso compromisso é agir com responsabilidade, clareza e respeito por
            cada contribuição.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-t border-brown/12 pt-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[0.8125rem] uppercase tracking-wide text-muted">
                  {f.label}
                </dt>
                <dd className="mt-1 break-words font-display text-lg text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link href="/transparencia" className="btn-primary mt-8">
            Ver transparência
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
