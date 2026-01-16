import KeepScrollingLabel from "../../components/common/ScrollLabel";
import Formation from "../../components/layout/Formation";
import Title from "../../components/ui/Title";

function Education() {
  const academicProjects = [
    {
      year: "2022- 2023",
      title: "Beca de Estudios Superiores",
      institution: "Programa Oportunidades - FGK",
      description:
        "Durante mi formación, recibí clases de C++, ARDUINO y HTML/CSS. Además, fortalecí mis habilidades en el inglés, lingüística y emprendimiento.",
    },
    {
      year: "2024",
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Evangélica de El Salvador",
      description:
        "Actualmente cursando el 3er año. He recibido formación en C#, Javascript y Kotlin, así como en gestores db.",
    },
    {
      year: "2024 - 2025",
      title: "Bootcamp Full-Stack Jr. & Data Analyst Jr.",
      institution: "KODIGO - Academia de Tecnología",
      description:
        " En el bootcamp de Full-Stack Jr., aprendí a crear aplicaciones web mediante HTML, CSS, Javascript, React, PHP y Laravel. En el bootcamp de Data Analyst Jr., adquirí competencias en el análisis de datos utilizando Excel, SQL, Power BI y Python.",
    },
  ];

  return (
    <section
      className="year-section h-screen flex px-8 py-12 md:py-4 education-section"
      data-section="1"
    >
      <div className="gap-8 w-full h-full">
        <div className="flex flex-col justify-end md:items-start gap-8 pb-8 h-full">
          <div className="flex flex-col md:items-start">
            <Title label="EDUCACIÓN" size="small" />
            <KeepScrollingLabel />
          </div>
          <Formation projects={academicProjects} />
        </div>
      </div>
    </section>
  );
}

export default Education;
