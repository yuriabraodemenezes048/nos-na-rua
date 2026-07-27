import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, ArrowRightIcon } from "@/components/Icons";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";

/**
 * Galeria real — mosaico editorial das fotografias documentais das ações.
 * Renderiza apenas quando há imagens reais no arquivo de dados.
 */
export function RealGallery() {
  if (galleryItems.length === 0) return null;

  return (
    <section id="galeria" className="section">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Registros reais</p>
          <h2 className="section-title mt-4">
            É assim que a solidariedade acontece
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 grid gap-4 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className={`overflow-hidden rounded-2xl border border-sand ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 60rem"
                    : "(max-width: 640px) 100vw, 30rem"
                }
                className={`w-full object-cover ${
                  index === 0 ? "aspect-[62/21]" : "aspect-[16/10]"
                }`}
              />
              {item.caption && (
                <figcaption className="bg-cream px-4 py-3 text-sm text-muted">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </Reveal>

        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-8"
        >
          <InstagramIcon className="h-5 w-5" />
          Veja mais no Instagram
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
