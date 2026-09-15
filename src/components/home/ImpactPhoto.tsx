import { PhotoChapter } from "@/components/PhotoChapter";

/**
 * Foto-impacto — pausa editorial entre "Quem somos" e os projetos. Uma única
 * foto forte (a marmita sendo entregue à noite) com uma frase curta por cima,
 * sem card nem moldura, para reforçar o tom emocional sem virar apelo.
 */
export function ImpactPhoto() {
  return (
    <PhotoChapter
      image={{
        src: "/acoes/foto-impacto-marmita.webp",
        alt: "Pessoa segurando uma marmita com refeição quente entregue pelo Nós na Rua durante a ação noturna.",
        width: 1086,
        height: 1448,
        position: "center 68%",
      }}
      variant="cover"
      overlay="bottom"
      align="bottom"
      minH="min-h-[62svh] sm:min-h-[74svh]"
    >
      <p className="max-w-lg font-display text-[1.75rem] font-semibold leading-tight text-cream sm:text-[2.25rem]">
        Em cada marmita entregue, um gesto de cuidado que chega a quem precisa.
      </p>
    </PhotoChapter>
  );
}
