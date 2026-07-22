import MarkitHero from "@/app/components/markit/MarkitHero";
import InstallSteps from "@/app/components/markit/InstallSteps";

export const metadata = {
  title: "Markit || Debord Company",
  description:
    "Markit es un lector de Markdown nativo para macOS. Instálalo con una línea de terminal.",
};

export default function MarkitPage() {
  return (
    <section className="flex flex-col items-stretch gap-4">
      <article className="pt-5">
        <MarkitHero />
      </article>
      <article className="pt-5">
        <InstallSteps />
      </article>
    </section>
  );
}
