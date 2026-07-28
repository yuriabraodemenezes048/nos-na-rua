import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { LeafSprig } from "@/components/brand/Decor";
import { WhatsAppIcon, CheckIcon } from "@/components/Icons";
import { projects, type Project } from "@/data/projects";
import { whatsappUrl } from "@/data/site";

/**
 * Projetos reais — blocos editoriais alternados com fotografias grandes.
 * O projeto de marmitas recebe uma composição com duas fotos (principal + apoio).
 */
export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Nossos projetos</p>
          <h2 className="section-title mt-4">Amor transformado em ação</h2>
          <p className="section-lead mt-4">
            Conheça algumas das iniciativas que fazem parte do trabalho contínuo
            da Nós na Rua.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 sm:gap-24">
          {projects.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <article
                key={project.id}
                id={project.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  variant={flipped ? "right" : "left"}
                  className={flipped ? "lg:order-2" : ""}
                >
                  <p className="kicker">{project.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight sm:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <div className="mt-4 max-w-prose space-y-3 leading-relaxed text-muted">
                    {project.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-[0.9375rem] text-ink"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brown" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.actions.map((action) =>
                      action.href ? (
                        <Link
                          key={action.label}
                          href={action.href}
                          className={action.primary ? "btn-primary" : "btn-secondary"}
                        >
                          {action.label}
                        </Link>
                      ) : (
                        <a
                          key={action.label}
                          href={whatsappUrl(action.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={action.primary ? "btn-primary" : "btn-secondary"}
                        >
                          {action.primary && <WhatsAppIcon className="h-5 w-5" />}
                          {action.label}
                        </a>
                      ),
                    )}
                  </div>
                </Reveal>

                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={120}
                  className={flipped ? "lg:order-1" : ""}
                >
                  <ProjectVisual project={project} index={index} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Bloco visual do projeto: 2 fotos (composição), 1 foto grande, ou grafismo. */
function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const images = project.images ?? [];

  // Duas fotos — composição editorial (principal grande + apoio sobreposto)
  if (images.length >= 2) {
    return (
      <div className="relative">
        <figure className="overflow-hidden rounded-3xl border border-sand shadow-soft">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
        <figure className="absolute -bottom-8 -right-3 hidden w-2/5 overflow-hidden rounded-2xl border-4 border-cream shadow-soft sm:block">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            width={images[1].width}
            height={images[1].height}
            loading="lazy"
            sizes="220px"
            className="aspect-square w-full object-cover"
          />
        </figure>
      </div>
    );
  }

  // Uma foto grande
  if (images.length === 1) {
    return (
      <figure className="overflow-hidden rounded-3xl border border-sand shadow-soft">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </figure>
    );
  }

  // Sem foto — grafismo da marca
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-sand">
      <LeafSprig
        aria-hidden="true"
        className="absolute -bottom-4 -left-2 h-40 w-28 text-brown/15"
      />
      <span
        aria-hidden="true"
        className="font-display text-[8rem] font-semibold leading-none text-brown/25"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
