type RoadmapItem = {
  title: string;
  description: string;
  done?: boolean;
};

const items: RoadmapItem[] = [
  {
    title: "Migrar a Tauri",
    description:
      "Reescribir la app nativa sobre Tauri para reducir el consumo de recursos y mejorar el rendimiento general.",
  },
  {
    title: "Edición de Markdown",
    description:
      "Añadir la posibilidad de editar los archivos .md directamente desde Markit, sin salir de la app.",
    done: true,
  },
  {
    title: "Exportar a PDF",
    description:
      "Convertir cualquier archivo .md en un PDF listo para compartir, respetando el formato y los estilos de Markit.",
  },
];

const MAX_COMPLETED = 3;

export default function Roadmap() {
  const pending = items.filter((item) => !item.done);
  const completed = items.filter((item) => item.done).slice(-MAX_COMPLETED);
  const visibleItems = [...pending, ...completed];

  return (
    <section>
      <p className="text-xl text-black dark:text-white font-black">
        Próximas actualizaciones
      </p>
      <div className="py-5 flex flex-col gap-4">
        {visibleItems.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <span
              className={`shrink-0 flex items-center justify-center size-8 border-2 font-bold ${
                item.done
                  ? "border-neutral-400 text-neutral-400 dark:border-neutral-600 dark:text-neutral-600"
                  : "border-neutral-800 dark:border-neutral-50"
              }`}
            >
              {item.done ? "✓" : "→"}
            </span>
            <div className={item.done ? "opacity-60" : undefined}>
              <h3 className={`font-bold ${item.done ? "line-through" : ""}`}>
                {item.title}
              </h3>
              <p
                className={`text-sm opacity-80 text-pretty ${
                  item.done ? "line-through" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
