import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://debordcompany.es"),
  title: {
    default: "Debord Company || Portfolio de Mario Sanz, desarrollador Frontend/Fullstack",
    template: "%s || Debord Company",
  },
  description:
    "Portfolio de Mario Sanz (Debord Company): desarrollador Frontend/Fullstack en Madrid. Proyectos personales como Markit, Git Debord y Debord Design, además de curriculum y contacto.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://debordcompany.es",
    siteName: "Debord Company",
    title: "Debord Company || Portfolio de Mario Sanz, desarrollador Frontend/Fullstack",
    description:
      "Portfolio de Mario Sanz (Debord Company): desarrollador Frontend/Fullstack en Madrid. Proyectos personales como Markit, Git Debord y Debord Design, además de curriculum y contacto.",
    images: ["/img/foto_perfil.webp"],
  },
  twitter: {
    card: "summary",
    title: "Debord Company || Portfolio de Mario Sanz",
    description:
      "Portfolio de Mario Sanz (Debord Company): desarrollador Frontend/Fullstack y sus proyectos personales.",
    images: ["/img/foto_perfil.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Debord Company",
      url: "https://debordcompany.es",
    },
    {
      "@type": "Person",
      name: "Mario Sanz Gutiérrez",
      jobTitle: "Fullstack developer",
      url: "https://debordcompany.es",
      email: "mailto:work@debordcompany.es",
      sameAs: [
        "https://github.com/DebordCompany",
        "https://www.linkedin.com/in/mario-sanz-guti%C3%A9rrez/",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`print:bg-white  ${ibm.className} bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="max-w-5xl px-8 min-h-[80dvh] m-auto print:bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
