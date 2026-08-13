const steps = [
  {
    title: "Abre la Terminal",
    description: "La encuentras en Launchpad o buscando “Terminal” con Spotlight (⌘ + Espacio).",
  },
  {
    title: "Pega el comando y pulsa Enter",
    description: "El script descarga Markit, lo instala en Aplicaciones y limpia los archivos temporales.",
  },
  {
    title: "Ponlo como app por defecto",
    description: "Clic derecho sobre un .md → Obtener información → en “Abrir con” elige Markit y pulsa “Cambiar todo…”. Así el doble clic siempre lo abrirá con Markit.",
  },
];

export default function InstallSteps() {
  return (
    <section>
      <p className="text-xl text-black dark:text-white font-black">
        Cómo instalarlo
      </p>
      <div className="py-5 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4 items-start">
            <span className="shrink-0 flex items-center justify-center size-8 border-2 border-neutral-800 dark:border-neutral-50 font-bold">
              {index + 1}
            </span>
            <div>
              <h3 className="font-bold">{step.title}</h3>
              <p className="text-sm opacity-80 text-pretty">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-pretty mt-4 p-2 bg-amber-100 text-neutral-800 dark:bg-amber-950 dark:text-amber-100">
        Nota: si macOS avisa de “desarrollador no identificado” al abrir
        Markit, ve a Ajustes del Sistema → Privacidad y seguridad y pulsa
        “Abrir de todos modos”, o haz clic derecho sobre la app y elige Abrir.
      </p>
    </section>
  );
}
