import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { projects, type Project } from "@/data/projects";
import { whatsappUrl } from "@/data/site";

/**
 * Projetos reais — três blocos editoriais alternados, cada um com uma foto
 * grande, um parágrafo curto, até três informações e um único CTA.
 * O projeto de marmitas usa uma composição com duas fotos.
 */
export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Nossos projetos</p>
          <h2 className="section-title mt-4">Amor transformado em ação</h2>
          <p className="section-lead mt-4">
            Conheça as iniciativas que fazem parte do trabalho contínuo da Nós na
            Rua.
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
                  <p className="mt-4 max-w-prose leading-relaxed text-muted">
                    {project.text}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.facts.map((fact) => (
                      <li
                        key={fact}
                        className="rounded-full bg-sand px-3.5 py-1.5 text-sm font-medium text-brown"
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    {project.cta.href ? (
                      <Link href={project.cta.href} className="btn-primary">
                        {project.cta.label}
                      </Link>
                    ) : (
                      <a
                        href={whatsappUrl(project.cta.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        {project.cta.label}
                      </a>
                    )}
                  </div>
                </Reveal>

                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={120}
                  className={flipped ? "lg:order-1" : ""}
                >
                  <ProjectVisual project={project} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Foto do projeto: composição de duas fotos ou uma foto grande. */
function ProjectVisual({ project }: { project: Project }) {
  const images = project.images;

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
