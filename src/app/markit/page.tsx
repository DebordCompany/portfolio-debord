import MarkitHero from "@/app/components/markit/MarkitHero";
import InstallSteps from "@/app/components/markit/InstallSteps";
import Roadmap from "@/app/components/markit/Roadmap";

export const metadata = {
  title: "Markit — Lector de Markdown para macOS",
  description:
    "Markit es un lector de Markdown nativo para macOS. Instálalo con una línea de terminal.",
  alternates: {
    canonical: "/markit",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Markit",
  operatingSystem: "macOS",
  applicationCategory: "UtilitiesApplication",
  description:
    "Lector de Markdown nativo para macOS. Abre tus archivos .md y léelos tal y como se ven.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function MarkitPage() {
  return (
    <section className="flex flex-col items-stretch gap-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-5">
        <MarkitHero />
      </article>
      <article className="pt-5">
        <InstallSteps />
      </article>
      <article className="pt-5">
        <Roadmap />
      </article>
    </section>
  );
}
