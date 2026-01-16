import KeepScrollingLabel from "../../components/common/ScrollLabel";
import Formation from "../../components/layout/Formation";
import Title from "../../components/ui/Title";

function Experience() {
  const experienceProjects = [
    {
      year: "2025",
      title: "Frontend Developer Jr.",
      institution: " Pasantía en BotBlaze, Volker Enterprises S.A. de C.V.",
      description:
        "Desarrollé y maqueté landing pages, cubriendo tecnologías como Laravel, React.js, Vite y Tailwinds. Además, colaboré con diseñadores y desarrolladores para la creación y documentación de aplicaciones web.",
    },
  ];
  return (
    <section
      className="year-section h-screen flex px-8 py-12 md:py-4"
      data-year="2025"
      data-section="2"
    >
      <div className="gap-8 w-full h-full">
        <div className="flex flex-col justify-end gap-8 pb-8 h-full">
          <div className="flex flex-col md:items-start">
            <Title label="EXPERIENCIA" size="small" />
            <KeepScrollingLabel />
          </div>
          <Formation projects={experienceProjects} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
