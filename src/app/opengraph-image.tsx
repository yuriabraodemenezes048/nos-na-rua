import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Imagem de Open Graph gerada automaticamente (aparece ao compartilhar o link
 * em redes sociais / WhatsApp). Gerada em código para não depender de arquivos
 * de imagem. Pode ser substituída depois por uma arte oficial em /public.
 *
 * Observação técnica: o gerador (Satori) exige "display: flex" em qualquer
 * elemento com mais de um filho, por isso todos os contêineres usam flex.
 */
export const runtime = "nodejs";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const titulo = ["Solidariedade", "transformada", "em"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF8F2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "20px",
              background: "#B85A34",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "999px",
                background: "#FBF8F2",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 700,
              color: "#2A2521",
            }}
          >
            {site.name}
          </div>
        </div>

        {/* Título + subtítulo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 22px",
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#2A2521",
            }}
          >
            {titulo.map((palavra) => (
              <span key={palavra} style={{ display: "flex" }}>
                {palavra}
              </span>
            ))}
            <span style={{ display: "flex", color: "#38855F" }}>ação.</span>
          </div>
          <div style={{ display: "flex", fontSize: "32px", color: "#6E655C" }}>
            Conheça o trabalho da ONG e doe de forma simples e segura.
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              background: "#38855F",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "999px",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            Quero Doar
          </div>
          <div
            style={{ display: "flex", fontSize: "26px", color: "#6E655C" }}
          >
            @{site.contact.instagram}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
