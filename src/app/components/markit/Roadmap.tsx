const items = [
  {
    title: "Migrar a Tauri",
    description:
      "Reescribir la app nativa sobre Tauri para reducir el consumo de recursos y mejorar el rendimiento general.",
  },
  {
    title: "Edición de Markdown",
    description:
      "Añadir la posibilidad de editar los archivos .md directamente desde Markit, sin salir de la app.",
  },
];

export default function Roadmap() {
  return (
    <section>
      <p className="text-xl text-black dark:text-white font-black">
        Próximas actualizaciones
      </p>
      <div className="py-5 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <span className="shrink-0 flex items-center justify-center size-8 border-2 border-neutral-800 dark:border-neutral-50 font-bold">
              →
            </span>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm opacity-80 text-pretty">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}