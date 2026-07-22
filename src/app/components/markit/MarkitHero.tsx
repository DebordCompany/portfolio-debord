import InstallTerminal from "./InstallTerminal";

export default function MarkitHero() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl md:text-6xl font-black">Markit</h1>
      <p className="text-lg md:text-xl max-w-2xl text-pretty">
        Un lector de Markdown nativo para macOS. Abre tus archivos{" "}
        <code className="bg-slate-100 dark:bg-slate-700 dark:text-neutral-50 text-black px-2 py-0.5 rounded-sm text-base">
          .md
        </code>{" "}
        y léelos tal y como se ven, sin editores pesados ni pestañas de
        navegador de por medio.
      </p>
      <InstallTerminal />
    </div>
  );
}
