import Image from "next/image";
import type { TransparencyReport } from "@/data/transparency";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Cartão de um relatório publicado pela associação. */
export function TransparencyReportCard({
  report,
}: {
  report: TransparencyReport;
}) {
  const figures = [
    report.receivedAmount !== null && {
      label: "Valor recebido",
      value: currency.format(report.receivedAmount),
    },
    report.spentAmount !== null && {
      label: "Valor utilizado",
      value: currency.format(report.spentAmount),
    },
    report.peopleReached !== null && {
      label: "Pessoas alcançadas",
      value: String(report.peopleReached),
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="rounded-2xl border border-sand p-6 sm:p-8">
      <p className="text-[0.8125rem] font-medium text-muted">{report.period}</p>
      <h3 className="mt-1 font-display text-xl">{report.title}</h3>

      {report.description && (
        <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
          {report.description}
        </p>
      )}

      {figures.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {figures.map((figure) => (
            <div key={figure.label}>
              <dt className="text-[0.8125rem] text-muted">{figure.label}</dt>
              <dd className="font-display text-lg text-ink">{figure.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {report.items.length > 0 && (
        <div className="mt-6">
          <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wide text-muted">
            Itens
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {report.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-sand px-3 py-1 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {report.images.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {report.images.map((image) => (
            <li key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </li>
          ))}
        </ul>
      )}

      {report.documents.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-3">
          {report.documents.map((doc) => (
            <li key={doc.href}>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9375rem] font-semibold text-brown underline underline-offset-4 hover:text-brown-dark"
              >
                {doc.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
