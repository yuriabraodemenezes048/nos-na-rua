/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // O protótipo não usa imagens externas por padrão; se você adicionar
  // domínios de imagens reais depois, configure-os aqui.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
