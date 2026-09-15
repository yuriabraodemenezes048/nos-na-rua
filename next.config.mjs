/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // O protótipo não usa imagens externas por padrão; se você adicionar
  // domínios de imagens reais depois, configure-os aqui.
  images: {
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        // Cabeçalhos básicos de segurança, aplicados a todas as respostas.
        // Evitados: CSP rígida (exige mapear cada fonte/domínio usado e o
        // risco de quebrar algo em produção é maior que o benefício nesta
        // rodada) e HSTS (a Vercel já aplica no nível de borda).
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        // Redireciona SOMENTE o hostname exato do domínio antigo da Vercel
        // para o domínio oficial, preservando o path. Não afeta outros
        // hostnames *.vercel.app (previews) nem localhost.
        source: "/:path*",
        has: [{ type: "host", value: "nos-na-rua.vercel.app" }],
        destination: "https://www.nosnarua.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
