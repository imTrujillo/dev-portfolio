import { useNavigate, useParams } from "react-router-dom";
import { projectData } from "../hooks/useProjectsCarousel";
import Button from "../components/ui/Button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import Filter from "../components/common/Filter";
import NotFoundState from "../components/layout/NotFoundState";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return <NotFoundState label="Proyecto No Encontrado" />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Filter />

      <div className="p-4 ">
        <div className="max-w-6xl mx-auto text-center md:text-start">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <button
              onClick={() => navigate("/")}
              className="bg-transparent! p-0! mr-2 lg:m-0! border-none! outline-none! focus:border-none! text-white/60 hover:text-[#d6a29d]! transition lg:[writing-mode:vertical-lr] lg:rotate-180"
            >
              REGRESAR
            </button>
            <h4 className="text-4xl md:text-6xl lg:text-[8rem]! xl:text-[10rem]! text-white/40 font-bold leading-[0.9]! mb-4 ">
              {project.title}
            </h4>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <div className="relative group mb-4">
                <div className="absolute -inset-4 bg-orange-600/40 blur-[50px] rounded-3xl opacity-70 group-hover:opacity-100 group-hover:blur-[60px] transition-all duration-700"></div>
                <video
                  src={project.video}
                  autoPlay
                  controls
                  muted
                  className="w-full h-auto aspect-video  relative z-10 rounded-lg"
                />
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-3 px-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="uppercase font-medium text-white/60 hover:text-[#d6a29d]! transition-all "
                    >
                      {tech}
                      {index !== (project.technologies?.length ?? 0) - 1 &&
                        " ・ "}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between md:max-w-[40%]">
              <p className="text-gray-300 text-lg leading-relaxed text-justify mb-8">
                {project.description}
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label="VER CÓDIGO"
                      icon={<BsGithub />}
                      iconPosition="right"
                      colors={[
                        "from-rose-300",
                        "to-blue-300",
                        "text-rose-200",
                        "after:bg-gray-800",
                      ]}
                    />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label="VER SITIO"
                      icon={<RxOpenInNewWindow />}
                      iconPosition="right"
                      colors={[
                        "from-rose-300",
                        "to-blue-300",
                        "text-rose-200",
                        "after:bg-gray-800",
                      ]}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
