/**
 * O que fazemos — três blocos, sem ícones decorativos e sem afirmar
 * periodicidade, quantidade ou programas que não foram confirmados.
 */
const areas = [
  {
    title: "Apoio essencial",
    text: "Mobilização de alimentos, roupas, produtos de higiene e outros itens necessários para as ações.",
  },
  {
    title: "Ações solidárias",
    text: "Organização de campanhas e entregas de acordo com as necessidades identificadas pela associação.",
  },
  {
    title: "Comunidade em ação",
    text: "União entre voluntários, doadores e parceiros para ampliar o alcance de cada iniciativa.",
  },
];

export function WorkAreas() {
  return (
    <section id="como-ajudamos" className="section">
      <div className="container-site">
        <h2 className="section-title">Ajuda que chega a quem precisa</h2>
        <p className="section-lead mt-4">
          A associação mobiliza doações, voluntários e parceiros para apoiar
          pessoas e famílias em situações de vulnerabilidade.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-3">
          {areas.map((area) => (
            <article key={area.title} className="bg-cream p-6">
              <h3 className="font-display text-lg">{area.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                {area.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
