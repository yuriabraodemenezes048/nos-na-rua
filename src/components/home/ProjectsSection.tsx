import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { LeafSprig } from "@/components/brand/Decor";
import { WhatsAppIcon, CheckIcon } from "@/components/Icons";
import { projects } from "@/data/projects";
import { whatsappUrl, siteConfig } from "@/data/site";

/**
 * Projetos — blocos editoriais alternados (não são cards iguais).
 * O primeiro projeto usa o personagem da caixa de doações como apoio visual;
 * os demais usam grafismos da identidade.
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
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Texto */}
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

                {/* Visual */}
                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={120}
                  className={flipped ? "lg:order-1" : ""}
                >
                  <ProjectVisual index={index} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Bloco visual de cada projeto — varia por índice para não repetir. */
function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative mx-auto w-full max-w-sm">
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 -z-10 h-40 w-40 bg-terracotta/15"
          style={{ borderRadius: "54% 46% 58% 42% / 44% 56% 44% 56%" }}
        />
        <Character who="box" tone="sand" objectPosition="center top" />
        <span className="absolute bottom-4 left-4 rounded-full bg-brown px-4 py-2 text-sm font-semibold text-white shadow-soft">
          {siteConfig.impact.day} · {siteConfig.impact.time}
        </span>
      </div>
    );
  }

  const tone = index === 1 ? "bg-terracotta/15" : "bg-sand";
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl ${tone}`}
    >
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
