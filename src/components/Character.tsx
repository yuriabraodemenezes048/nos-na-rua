import Image from "next/image";
import { siteConfig } from "@/data/site";

type CharacterKey = keyof typeof siteConfig.characters;

/**
 * Personagem ilustrado da marca, apresentado dentro de uma moldura orgânica.
 *
 * A moldura (com a mesma tonalidade areia do fundo da ilustração) integra o
 * personagem à identidade e dispensa recorte com transparência. A flutuação
 * idle é muito discreta e some sob prefers-reduced-motion.
 */
export function Character({
  who,
  className = "",
  tone = "sand",
  priority = false,
  float = false,
  objectPosition = "center top",
  sizes = "(max-width: 768px) 60vw, 340px",
}: {
  who: CharacterKey;
  className?: string;
  tone?: "sand" | "cream" | "terracotta";
  priority?: boolean;
  float?: boolean;
  objectPosition?: string;
  sizes?: string;
}) {
  const char = siteConfig.characters[who];
  const toneClass =
    tone === "terracotta"
      ? "bg-terracotta/20"
      : tone === "cream"
        ? "bg-cream"
        : "bg-sand";

  return (
    <div className={`${float ? "animate-float" : ""} ${className}`}>
      <div className={`character-frame ${toneClass} shadow-soft`}>
        <Image
          src={char.src}
          alt={char.alt}
          width={char.width}
          height={char.height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
