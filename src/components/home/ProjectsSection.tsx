import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PhotoChapter } from "@/components/PhotoChapter";
import { WhatsAppIcon } from "@/components/Icons";
import { projects, type Project } from "@/data/projects";
import { whatsappUrl } from "@/data/site";

/**
 * Projetos — cada um é um capítulo fotográfico de largura total (sem cards).
 * O texto fica sobre a cena, com contraste garantido. O projeto de marmitas
 * usa duas fotos (a segunda como cena complementar).
 */
export function ProjectsSection() {
  return (
    <>
      <section id="projetos" className="section pb-8 sm:pb-10">
        <div className="container-site max-w-2xl">
          <Reveal>
            <p className="kicker">Nossos projetos</p>
            <h2 className="section-title mt-4">Amor transformado em ação</h2>
            <p className="section-lead mt-4">
              Conheça as iniciativas que fazem parte do trabalho contínuo da Nós
              na Rua.
            </p>
          </Reveal>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectChapter key={project.id} project={project} index={index} />
      ))}
    </>
  );
}

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const imageFirst = index % 2 === 0;
  const cta = project.cta;

  return (
    <>
      <PhotoChapter
        id={project.id}
        image={project.images[0]}
        variant="contain"
        minH="min-h-[72svh]"
        imageFirst={imageFirst}
      >
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-[#F0C6B6]">
          {project.kicker}
        </p>
        <h3 className="mt-3 font-display text-[1.75rem] leading-tight text-cream sm:text-[2.125rem]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-prose leading-relaxed text-sand">
          {project.text}
        </p>
        <p className="mt-4 text-sm font-medium text-white/85">
          {project.facts.join("  ·  ")}
        </p>
        <div className="mt-7">
          {cta.href ? (
            <Link href={cta.href} className="btn-on-brown">
              {cta.label}
            </Link>
          ) : (
            <a
              href={whatsappUrl(cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-brown"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {cta.label}
            </a>
          )}
        </div>
      </PhotoChapter>

      {/* Segunda cena das marmitas (foto da caixa térmica) */}
      {project.images[1] && (
        <PhotoChapter
          image={project.images[1]}
          variant="contain"
          minH="min-h-[56svh]"
          imageFirst={!imageFirst}
        >
          <p className="max-w-prose font-display text-[1.375rem] leading-snug text-cream sm:text-[1.75rem]">
            A cada segunda-feira, a caixa térmica “Nós na Rua” leva refeições
            quentes para quem mais precisa.
          </p>
        </PhotoChapter>
      )}
    </>
  );
}
