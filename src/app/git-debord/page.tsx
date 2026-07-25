import GitDebordHero from "@/app/components/git-debord/GitDebordHero";
import GitDebordFeatures from "@/app/components/git-debord/GitDebordFeatures";
import GitDebordInstallSteps from "@/app/components/git-debord/GitDebordInstallSteps";

export const metadata = {
  title: "Git Debord || Debord Company",
  description:
    "Git Debord es una extensión de Visual Studio Code para iniciar operaciones avanzadas de Git de forma visual: rebase interactivo y cherry pick.",
};

export default function GitDebordPage() {
  return (
    <section className="flex flex-col items-stretch gap-4">
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
