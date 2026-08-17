import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(person.website),
  title: {
    default: `${person.shortName} — AI Software Engineer & IT Consultant`,
    template: `%s — ${person.brand}`,
  },
  description:
    "AI software engineer and electronic engineer on the Gold Coast, Australia. AI integrations for company workflows, custom web applications, REST APIs, database-backed solutions and technical consulting.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: person.website,
    siteName: person.brand,
    title: `${person.shortName} — AI Software Engineer & IT Consultant`,
    description:
      "AI integrations for company workflows, custom web applications, REST APIs and database-backed solutions from the Gold Coast, Australia.",
    images: [{ url: person.avatar, width: 460, height: 460, alt: person.shortName }],
  },
  twitter: {
    card: "summary",
    title: `${person.shortName} — AI Software Engineer & IT Consultant`,
    description:
      "AI integrations for company workflows, custom web applications, REST APIs and technical consulting from the Gold Coast, Australia.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e11",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.shortName,
  alternateName: person.brand,
  jobTitle: "AI Software Engineer & IT Consultant",
  email: `mailto:${person.email}`,
  url: person.website,
  image: `${person.website}${person.avatar}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  sameAs: ["https://github.com/ajfero", "https://www.linkedin.com/in/ajfero"],
  knowsLanguage: ["en", "es"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
