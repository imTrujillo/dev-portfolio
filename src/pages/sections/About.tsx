import { useRef } from "react";
import { useAboutScroll } from "../../hooks/useAboutScroll";

import carousel1 from "../../assets/images/about-carousel/1.png";
import carousel2 from "../../assets/images/about-carousel/2.jpg";
import carousel3 from "../../assets/images/about-carousel/3.jpg";
import carousel4 from "../../assets/images/about-carousel/4.png";
import carousel5 from "../../assets/images/about-carousel/5.jpg";
import Title from "../../components/ui/Title";
import KeepScrollingLabel from "../../components/common/ScrollLabel";

const carousel = [carousel1, carousel2, carousel3, carousel4, carousel5];

function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imgsRef = useRef<HTMLDivElement>(null);

  useAboutScroll({ aboutRef, imgsRef });

  return (
    <section ref={aboutRef} className="about" data-section="0">
      <div className="images" ref={imgsRef}>
        {carousel.map((src, i) => (
          <img key={i} src={src} alt="image" className="mask-img"></img>
        ))}
      </div>

      <div
        className="absolute inset-0 
    bg-[radial-gradient(circle,rgba(51,10,6,0)_-20%,rgba(10,0,1,2)_55%,rgba(10,0,0,1)_35%)]"
      ></div>

      <div>
        <div className="px-6 flex flex-col justify-between md:justify-around lg:justify-between relative py-16 gap-8 w-full h-full min-h-screen text-center md:text-start">
          <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 max-w-100">
            <Title label="Acerca de Mi" />
            <KeepScrollingLabel />
          </div>
          <p className="px-10 text-sm  text-white/60 z-10 text-justify md:w-[80%]">
            Soy Steven Trujillo, un apasionado del desarrollo de websites
            creativas mediante tecnologías como React.js y Laravel. <br />
            Actualmente, soy estudiante de 3° año de Ing. en Sistemas en la
            Universidad Evangélica de El Salvador, donde fortalezco mis
            conocimientos en C#, Java y Kotlin; aplicándolos en proyectos
            académicos y colaborativos. <br />
            Disfruto trabajar en proyectos colaborativos y aprender nuevas
            tecnologías. Además, participo activamente en actividades
            extracurriculares, como bootcamps y talleres de arte.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
