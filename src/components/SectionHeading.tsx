import type { ReactNode } from "react";

/**
 * Cabeçalho padrão das seções: uma "etiqueta" (eyebrow) opcional, o título
 * principal e um subtítulo curto. Mantém a hierarquia visual consistente em
 * todo o site.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  icon,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  icon?: ReactNode;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow">
          {icon}
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg leading-relaxed text-stone ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
