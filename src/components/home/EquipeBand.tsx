import { PhotoChapter } from "@/components/PhotoChapter";

/**
 * Foto da equipe em largura total — prova humana entre "Quem somos" e os
 * projetos. Uma frase curta sobre a imagem.
 */
export function EquipeBand() {
  return (
    <PhotoChapter
      image={{
        src: "/acoes/equipe.png",
        alt: "Equipe de voluntários da Associação Nós na Rua reunida durante ação social, com caixas de doação.",
        width: 1138,
        height: 809,
        position: "center 10%",
      }}
      variant="cover"
      overlay="bottom"
      align="bottom"
      minH="min-h-[38svh] lg:min-h-[70svh]"
    >
      <p className="font-display text-[1.75rem] font-semibold leading-tight text-cream sm:text-[2.25rem]">
        Uma rede de pessoas cuidando de pessoas.
      </p>
    </PhotoChapter>
  );
}
