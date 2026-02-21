import data from "@/lib/data/data.json";
import HeroCV from "../components/cv/HeroCV";
import { AboutMe } from "../components/sections/AboutMe";
import Experience from "../components/cv/Experience";
import Print from "../components/cv/Print";

export default function Cv() {
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
        <div className="pt-6">
          <h4 className="text-xl font-bold">Educación</h4>
          <div className="grid grid-cols-2 gap-2 pt-3">

            {data.education.map((education, index) => {
              return (
                <div key={index} className="border p-3 rounded">
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
