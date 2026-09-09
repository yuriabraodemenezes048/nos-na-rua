import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

/**
 * Imagem de compartilhamento, gerada com a identidade da associação.
 * Usa a logo oficial (arquivo real em /public), nunca uma recriação.
 * O gerador (Satori) exige "display: flex" em qualquer elemento com mais de
 * um filho, por isso todos os contêineres usam flex.
 */
export const runtime = "nodejs";
export const alt = "Associação Nós na Rua – São José/SC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public", "logo-nos-na-rua.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F3EF",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca — logo oficial */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={84} height={94} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              color: "#111111",
            }}
          >
            Nós na Rua
          </div>
        </div>

        {/* Mensagem */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#111111",
              maxWidth: "940px",
            }}
          >
            Solidariedade que chega a quem precisa.
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#5B5049" }}>
            Associação Nós na Rua · Grande Florianópolis
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              background: "#7A4A3A",
              color: "#FFFFFF",
              padding: "16px 34px",
              borderRadius: "999px",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            Doar agora
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#5B5049" }}>
            {siteConfig.social.instagramHandle}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
