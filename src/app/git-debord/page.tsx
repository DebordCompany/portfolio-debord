import GitDebordHero from "@/app/components/git-debord/GitDebordHero";
import GitDebordFeatures from "@/app/components/git-debord/GitDebordFeatures";
import GitDebordInstallSteps from "@/app/components/git-debord/GitDebordInstallSteps";

export const metadata = {
  title: "Git Debord — Extensión de VS Code para Git visual",
  description:
    "Git Debord es una extensión de Visual Studio Code para iniciar operaciones avanzadas de Git de forma visual: rebase interactivo y cherry pick.",
  alternates: {
    canonical: "/git-debord",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Git Debord",
  operatingSystem: "Visual Studio Code",
  applicationCategory: "DeveloperApplication",
  description:
    "Extensión de Visual Studio Code para iniciar operaciones avanzadas de Git de forma visual: rebase interactivo y cherry pick.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function GitDebordPage() {
  return (
    <section className="flex flex-col items-stretch gap-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-5">
        <GitDebordHero />
      </article>
      <article className="pt-5">
        <GitDebordFeatures />
      </article>
      <article className="pt-5">
        <GitDebordInstallSteps />
      </article>
    </section>
  );
}
