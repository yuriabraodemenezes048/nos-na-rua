/**
 * Quem somos — apresentação curta, apenas com o que está confirmado.
 * O texto oficial completo entrará aqui quando a associação enviar.
 */
export function AboutSection() {
  return (
    <section className="section">
      <div className="container-site">
        <h2 className="section-title max-w-prose">
          Uma associação feita por pessoas que cuidam de pessoas
        </h2>

        <div className="mt-5 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Registrada em São José desde 2021, a Associação Nós na Rua mobiliza
            pessoas e recursos em apoio a quem enfrenta situações de
            vulnerabilidade social.
          </p>
          <p>
            Seu trabalho é fortalecido pela participação da comunidade, de
            voluntários, doadores e parceiros.
          </p>
        </div>
      </div>
    </section>
  );
}
