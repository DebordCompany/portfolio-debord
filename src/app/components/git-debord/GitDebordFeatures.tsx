const features = [
  {
    title: "Rebase interactivo",
    description:
      "Selecciona visualmente un commit para iniciar un rebase interactivo. La extensión muestra los commits recientes, te deja elegir desde dónde reorganizar el historial y ejecuta el comando por ti en el terminal integrado.",
  },
  {
    title: "Cherry pick",
    description:
      "Elige uno o varios commits y aplícalos sobre la rama que quieras. Git Debord valida que no haya cambios sin confirmar, ejecuta el cherry-pick y te avisa si surge algún conflicto.",
  },
];

export default function GitDebordFeatures() {
  return (
    <section>
      <p className="text-xl text-black dark:text-white font-black">
        Qué puedes hacer
      </p>
      <div className="py-5 flex flex-col gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="border-l-4 border-neutral-800 dark:border-neutral-50 pl-4">
            <h3 className="font-bold">{feature.title}</h3>
            <p className="text-sm opacity-80 text-pretty">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-pretty mt-4 bg-amber-100 p-2">
        Nota: la extensión no reescribe el historial ni resuelve conflictos
        por ti. Si aparece un conflicto, tendrás que resolverlo a mano y
        hacer push manualmente cuando termines.
      </p>
    </section>
  );
}
