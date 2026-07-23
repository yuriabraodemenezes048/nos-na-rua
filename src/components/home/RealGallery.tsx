import Image from "next/image";
import { galleryItems } from "@/data/gallery";

/**
 * Registros reais das ações.
 * Renderiza somente quando existem fotografias reais e autorizadas no
 * arquivo de dados — nunca caixas vazias nem imagens de banco.
 */
export function RealGallery() {
  if (galleryItems.length === 0) return null;

  const items = galleryItems.slice(0, 4);

  return (
    <section className="section">
      <div className="container-site">
        <h2 className="section-title">O trabalho acontece na prática</h2>
        <p className="section-lead mt-4">
          Conheça alguns registros das ações e da mobilização feita pela
          associação.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.src}>
              <figure>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-sm text-muted">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
