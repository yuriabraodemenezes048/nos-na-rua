import { SectionHeading } from "@/components/SectionHeading";
import { PhotoFrame } from "@/components/PhotoFrame";
import { DemoTag } from "@/components/DemoNotice";
import { HeartIcon, UsersIcon, ShieldCheckIcon } from "@/components/Icons";

/**
 * SEÇÃO 2 — QUEM SOMOS
 * Apresentação simples e humana da ONG, sem inventar fatos específicos.
 */
export function QuemSomos() {
  const pilares = [
    { icon: HeartIcon, title: "Acolhimento", text: "Cuidado com quem mais precisa." },
    { icon: UsersIcon, title: "Comunidade", text: "Trabalho feito com as pessoas." },
    { icon: ShieldCheckIcon, title: "Transparência", text: "Clareza sobre cada ação." },
  ];

  return (
    <section id="quem-somos" className="py-16 sm:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <PhotoFrame
            label="Foto da equipe / voluntários"
            aspect="aspect-[4/3]"
            tone="terra"
          />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Quem somos"
            title="Uma ONG feita de pessoas que cuidam de pessoas"
          />
          <div className="flex items-center gap-2">
            <DemoTag label="Texto provisório — a ONG substituirá pela história oficial" />
          </div>
          <p className="text-lg leading-relaxed text-stone">
            A ONG <strong className="text-ink">Nós na Rua</strong> realiza ações
            sociais voltadas ao cuidado, apoio e acolhimento de pessoas em
            situação de vulnerabilidade. Este espaço apresentará a história
            oficial da instituição, sua missão, seus valores e a forma como o
            trabalho é realizado.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {pilares.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3 rounded-xl border border-ink/5 bg-white p-4 shadow-sm sm:flex-col sm:items-start"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-verde-50 text-verde-500">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{p.title}</p>
                  <p className="text-sm text-stone">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
