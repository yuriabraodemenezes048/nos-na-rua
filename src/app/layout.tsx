import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

/* Tipografia: Bricolage Grotesque nos títulos, DM Sans nos textos. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nós na Rua | Associação em São José – SC",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "A Associação Nós na Rua mobiliza doações, voluntários e parceiros para apoiar pessoas em situação de rua e famílias em vulnerabilidade social em São José, Santa Catarina.",
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: "Nós na Rua | Associação em São José – SC",
    description:
      "A Associação Nós na Rua mobiliza doações, voluntários e parceiros para apoiar pessoas em situação de rua e famílias em vulnerabilidade social em São José, Santa Catarina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nós na Rua | Associação em São José – SC",
    description:
      "A Associação Nós na Rua mobiliza doações, voluntários e parceiros para apoiar pessoas em situação de rua e famílias em vulnerabilidade social em São José, Santa Catarina.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EF",
  width: "device-width",
  initialScale: 1,
};

/**
 * Dados estruturados da associação.
 * O endereço é publicado apenas em nível de cidade e estado — o endereço
 * cadastral é residencial e não deve ser divulgado.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: "+5548991353909",
  taxID: siteConfig.organization.cnpj,
  foundingDate: siteConfig.organization.foundedISO,
  sameAs: [siteConfig.social.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
