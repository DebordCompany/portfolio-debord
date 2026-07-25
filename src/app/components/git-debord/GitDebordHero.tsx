const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=MarioSanz.git-debord";
const VSCODE_DOWNLOAD_URL = "https://code.visualstudio.com/download";

export default function GitDebordHero() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl md:text-6xl font-black">Git Debord</h1>
      <p className="text-lg md:text-xl max-w-2xl text-pretty">
        Una extensión de{" "}
        <a
          href={VSCODE_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          <code className="bg-slate-100 dark:bg-slate-700 dark:text-neutral-50 text-black px-2 py-0.5 rounded-sm text-base">
            Visual Studio Code
          </code>
        </a>{" "}
        para iniciar operaciones avanzadas de Git de forma visual, sin
        memorizar comandos. Detecta tu repositorio, te deja elegir commits y
        ramas desde una interfaz gráfica, y ejecuta el comando por ti en el
        terminal integrado.
      </p>
      <a
        href={MARKETPLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit bg-neutral-800 dark:bg-neutral-50 text-white dark:text-black font-semibold px-6 py-3 hover:scale-105 transition-all"
      >
        Ver en el Marketplace
      </a>
    </div>
  );
}
