import photo1 from "../../assets/images/skills-gallery/tech/1.svg";
import photo2 from "../../assets/images/skills-gallery/tech/2.svg";
import photo3 from "../../assets/images/skills-gallery/tech/3.svg";
import photo4 from "../../assets/images/skills-gallery/tech/4.svg";
import photo5 from "../../assets/images/skills-gallery/tech/5.svg";
import photo6 from "../../assets/images/skills-gallery/tech/6.svg";
import photo7 from "../../assets/images/skills-gallery/tech/7.svg";
import photo8 from "../../assets/images/skills-gallery/tech/8.svg";
import photo9 from "../../assets/images/skills-gallery/tech/9.svg";
import photo10 from "../../assets/images/skills-gallery/tech/10.svg";
import photo11 from "../../assets/images/skills-gallery/tech/11.svg";
import photo12 from "../../assets/images/skills-gallery/tech/12.svg";
import photo13 from "../../assets/images/skills-gallery/tech/13.svg";
import photo14 from "../../assets/images/skills-gallery/tech/14.svg";
import photo15 from "../../assets/images/skills-gallery/tech/15.svg";
import photo16 from "../../assets/images/skills-gallery/tech/16.svg";
import photo17 from "../../assets/images/skills-gallery/tech/17.svg";
import photo18 from "../../assets/images/skills-gallery/tech/18.svg";

import photo19 from "../../assets/images/skills-gallery/soft/1.svg";
import photo20 from "../../assets/images/skills-gallery/soft/2.svg";
import photo21 from "../../assets/images/skills-gallery/soft/3.svg";
import photo22 from "../../assets/images/skills-gallery/soft/4.svg";
import photo23 from "../../assets/images/skills-gallery/soft/5.svg";
import photo24 from "../../assets/images/skills-gallery/soft/6.svg";

import Title from "../../components/ui/Title";
import Grid from "../../components/ui/Grid";

function Skills() {
  const techSkills = [
    { label: "JavaScript", img: photo1 },
    { label: "CSS", img: photo2 },
    { label: "Bootstrap", img: photo3 },
    { label: ".NET", img: photo4 },
    { label: "C#", img: photo5 },
    { label: "TypeScript", img: photo6 },
    { label: "React", img: photo7 },
    { label: "MySql", img: photo8 },
    { label: "PostgreSql", img: photo9 },
    { label: "Git", img: photo10 },
    { label: "Figma", img: photo11 },
    { label: "Illustrator", img: photo12 },
    { label: "Laravel", img: photo13 },
    { label: "Tailwind", img: photo14 },
    { label: "Insomnia", img: photo15 },
    { label: "Kotlin", img: photo16 },
    { label: "Python", img: photo17 },
    { label: "PowerBI", img: photo18 },
  ];

  const softSkills = [
    { label: "Creatividad", img: photo19 },
    { label: "Responsabilidad", img: photo20 },
    { label: "Colaboración", img: photo21 },
    { label: "Adaptabilidad", img: photo22 },
    { label: "Autodidactismo", img: photo23 },
    { label: "Compromiso", img: photo24 },
  ];

  return (
    <section className="flex py-12 md:py-4" data-section="3">
      <div className="gap-8 w-full h-full">
        <div className="flex flex-col justify-start pb-8 h-full">
          <div className="px-4 text-center md:text-start">
            <Title label="Habilidades" />
          </div>
          <div className="text-center space-y-4 md:text-end overflow-hidden md:w-[75%] lg:w-[85%]">
            <Grid label="Técnicas" skills={techSkills} />
            <Grid label="Blandas" skills={softSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
