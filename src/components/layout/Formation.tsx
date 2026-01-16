type Project = {
  title: string;
  year: string;
  institution: string;
  description: string;
};

type Props = {
  projects: Project[];
};

const Formation = ({ projects }: Props) => {
  return (
    <div className="flex flex-row gap-x-12 w-full lg:w-[80%]! mx-auto overflow-x-auto  md:mx-0 formation-projects">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group min-w-70 flex-1 flex flex-col gap-4 border-white/10 hover:border-orange-500/50  transition-colors duration-500 md:text-start"
        >
          <span className="text-[16px] tracking-[0.4em] text-orange-400 font-bold uppercase px-2">
            {project.year}
          </span>

          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-black text-white/60 uppercase tracking-tighter leading-[0.9] group-hover:text-white/80 transition-colors duration-300">
              {project.title}
            </h2>

            <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
              {project.institution}
            </p>
          </div>

          <p className="text-sm text-justify text-white/60  font-light intro">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Formation;
