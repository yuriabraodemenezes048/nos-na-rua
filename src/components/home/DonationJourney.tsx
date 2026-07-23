import Link from "next/link";

/**
 * Como a doação vira ajuda — três etapas em sequência simples,
 * sem prometer resultados que ainda não foram confirmados.
 */
const steps = [
  {
    title: "A contribuição é recebida",
    text: "Doações podem ser feitas pelo PIX ou por meio de itens combinados com a equipe.",
  },
  {
    title: "A equipe organiza",
    text: "Os recursos e materiais são separados de acordo com as necessidades identificadas.",
  },
  {
    title: "A ajuda é destinada",
    text: "As contribuições são utilizadas nas ações e entregas realizadas pela associação.",
  },
];

export function DonationJourney() {
  return (
    <section className="section bg-sand/40">
      <div className="container-site">
        <h2 className="section-title">Sua doação vira ajuda de verdade</h2>
        <p className="section-lead mt-4">
          Cada contribuição é organizada pela associação de acordo com as
          necessidades das ações realizadas.
        </p>

        <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative sm:pt-0">
              <span
                aria-hidden="true"
                className="font-display text-sm font-semibold text-brown"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-lg">{step.title}</h3>
              <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
          Os resultados e documentos aprovados serão apresentados na área de
          transparência.
        </p>
        <Link
          href="/transparencia"
          className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brown underline underline-offset-4 hover:text-brown-dark"
        >
          Ver transparência
        </Link>
      </div>
    </section>
  );
}
