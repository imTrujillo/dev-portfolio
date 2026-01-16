import KeepScrollingLabel from "../../components/common/ScrollLabel";
import Title from "../../components/ui/Title";
import useProjectsCarousel from "../../hooks/useProjectsCarousel";

const Projects = () => {
  useProjectsCarousel();
  return (
    <>
      <section
        id="projects-section"
        className="relative w-full"
        data-section="4"
      >
        <div className="relative z-10 flex flex-col items-center md:items-start justify-start min-h-screen p-8 text-white">
          <Title label="Proyectos" />
          <KeepScrollingLabel />
        </div>
      </section>
    </>
  );
};

export default Projects;
