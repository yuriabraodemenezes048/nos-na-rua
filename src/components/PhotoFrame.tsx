import { CameraIcon } from "@/components/Icons";

/**
 * Moldura de foto (placeholder elegante).
 *
 * Como este é um protótipo, ainda não temos as fotos reais da ONG. Em vez de
 * imagens quebradas, mostramos um bloco suave e proposital, indicando com
 * clareza onde entrará cada foto real.
 *
 * COMO TROCAR POR FOTO REAL:
 * Substitua este componente por <Image src="/foto.jpg" ... /> do next/image,
 * ou por uma <img>, no lugar onde ele é usado.
 */
export function PhotoFrame({
  label = "Foto real da ONG",
  aspect = "aspect-[4/3]",
  className = "",
  tone = "verde",
}: {
  label?: string;
  aspect?: string;
  className?: string;
  tone?: "verde" | "terra" | "sand";
}) {
  const tones = {
    verde: "from-verde-100 to-verde-50 text-verde-500",
    terra: "from-terra-100 to-terra-50 text-terra-500",
    sand: "from-sand to-cream text-stone",
  } as const;

  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl border border-ink/5 bg-gradient-to-br ${tones[tone]} ${className}`}
      role="img"
      aria-label={`Espaço reservado para: ${label}`}
    >
      {/* Textura sutil de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          color: "rgba(255,255,255,0.5)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <CameraIcon className="h-8 w-8 opacity-80" />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
