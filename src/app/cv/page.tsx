import data from "@/lib/data/data.json";
import HeroCV from "../components/cv/HeroCV";
import { AboutMe } from "../components/sections/AboutMe";
import Experience from "../components/cv/Experience";
import Print from "../components/cv/Print";

export default function Cv() {
  const projects = data.projects.filter((project) => project.isActive).sort((a, b) => b.id - a.id)

  return (
    <>
      <main className="print:text-black print:pt-2 text-sm">
        <div>
          <HeroCV info={data.basics} />
        </div>
        <hr className="mt-2" />
        <div className="pt-6">
          <AboutMe aboutMe={data.basics.summary} title={"Sobre mi"} />
        </div>
        <div className="pt-6">
          <Experience info={data.work} />
        </div>
        <section className="mt-8">
          <p className="text-xl text-black dark:text-white font-black">Proyectos</p>
          <div className="py-5 grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-1">
            {projects.map((element) => {
              return (
                <article
                  className=""
                  key={element.id}
                >
                  <a
                    href={element.url}
                    target="_blank"
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{element.name}</h3>
                      <hr className=" mb-2 print:max-w-1/4" />
                      <p className="text-xs text-pretty mb-2">{element.description}</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        {element.highlights.map((elem) => {
                          return (
                            <span key={elem} className="border-b border-neutral-700 text-xs text-neutral-700">{elem}</span>
                          )
                        })}
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </section>
        <div className="pt-6">
          <h4 className="text-xl font-bold">Educación</h4>
          <div className="grid grid-cols-2 gap-2 pt-3">

            {data.education.map((education, index) => {
              return (
                <div key={index} className="border p-3">
                  <h5 className="text-lg font-semibold">{education.institution}</h5>
                  <p className="text-sm text-gray-600">
                    {education.studyType} - {education.area}
                  </p>
                  <p className="text-sm text-gray-600">
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-6">
          <h4 className="text-xl font-bold">Enlaces de interes</h4>
          <div className="flex flex-wrap gap-2 pt-3">
            {data.basics.profiles.map((profile, index) => {
              return (
                <a
                  key={index}
                  href={profile.url}
                  className="text-sm text-blue-500 underline"
                >
                  <img src={profile.network} alt={profile.network} className="inline-block w-4 h-4 mr-1 invert" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <Print />
        </div>
      </main>
    </>
  );
}
