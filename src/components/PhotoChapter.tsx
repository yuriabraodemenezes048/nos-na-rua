import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Seção fotográfica de largura total (sem cards nem molduras).
 *
 * - variant "cover": a foto preenche o fundo (object-cover) e o texto fica
 *   sobre ela, com um degradê escuro que garante contraste WCAG AA.
 * - variant "contain": para fotos verticais/menores — uma cópia ampliada e
 *   desfocada preenche o fundo e a foto nítida aparece inteira ao lado do
 *   texto, sem recorte nem upscaling agressivo.
 *
 * Os degradês usam Marrom Profundo (identidade) para um tom acolhedor.
 */

export type ChapterImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** object-position da foto no modo cover (ex.: "center 40%") */
  position?: string;
};

type Overlay = "left" | "bottom" | "center";

const overlayClass: Record<Overlay, string> = {
  left: "bg-gradient-to-r from-brown-dark/90 via-brown-dark/55 to-brown-dark/10",
  bottom: "bg-gradient-to-t from-brown-dark/92 via-brown-dark/45 to-brown-dark/5",
  center: "bg-gradient-to-t from-brown-dark/85 via-brown-dark/60 to-brown-dark/45",
};

export function PhotoChapter({
  image,
  variant = "cover",
  overlay = "left",
  align = "bottom",
  minH = "min-h-[70svh]",
  priority = false,
  id,
  children,
  imageFirst = true,
}: {
  image: ChapterImage;
  variant?: "cover" | "contain";
  overlay?: Overlay;
  align?: "bottom" | "center";
  minH?: string;
  priority?: boolean;
  id?: string;
  children?: ReactNode;
  /** contain: foto antes do texto (padrão) ou depois */
  imageFirst?: boolean;
}) {
  if (variant === "contain") {
    return (
      <section
        id={id}
        className={`relative isolate flex w-full items-center overflow-hidden ${minH}`}
      >
        {/* Fundo desfocado da própria foto */}
        <Image
          src={image.src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="scale-125 object-cover blur-2xl brightness-[0.45]"
        />
        <div aria-hidden className="absolute inset-0 bg-brown-dark/45" />

        <div className="container-site relative z-10 grid w-full items-center gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <div className={imageFirst ? "" : "lg:order-2"}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="mx-auto max-h-[62vh] w-auto"
            />
          </div>
          <div className={`text-white ${imageFirst ? "" : "lg:order-1"}`}>
            {children}
          </div>
        </div>
      </section>
    );
  }

  // cover
  return (
    <section
      id={id}
      className={`relative isolate flex w-full overflow-hidden ${minH} ${
        align === "center" ? "items-center" : "items-end"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: image.position ?? "center" }}
      />
      <div aria-hidden className={`absolute inset-0 ${overlayClass[overlay]}`} />
      <div className="container-site relative z-10 w-full py-12 text-white sm:py-16">
        {children}
      </div>
    </section>
  );
}
