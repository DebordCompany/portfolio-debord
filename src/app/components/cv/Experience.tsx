export default function Experience({ info }) {
  return (
    <>
      <h2 className="text-xl font-black">Experiencia</h2>
      <div className="grid grid-cols-1 gap-8 pt-5">
        {info.map((element, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">{element.name}</h2>
                <p className="text-sm">
                  {element.startDate} - {element.endDate}
                </p>
              </div>
              <h4 className="font-light">{element.position}</h4>
              <p className="text-sm print:text-xs pt-2">{element.summary}</p>
              <div className="flex flex-wrap gap-1">
                {element.highlights.map((highlight, index) => {
                  return (
                    <p key={index} className="text-[10px] bg-gray-200 border border-gray-200 rounded-full px-1 py-[1px]">{highlight}</p>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
