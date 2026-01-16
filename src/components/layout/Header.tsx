import { useRef } from "react";
import Button from "../ui/Button";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { BiSolidNetworkChart } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb";
import { scrollToSection } from "../../hooks/scrollToSection";

import photo from "../../assets/images/profile.png";
import video from "../../assets/videos/header-video.mp4";
import cv from "../../assets/docs/cv.pdf";
import Parallax from "../common/Parallax";
import useFancyBox from "../../hooks/useFancyBox";
import Filter from "../common/Filter";
import Title from "../ui/Title";

const Header = () => {
  const containerRef = useRef(null);
  useFancyBox({ containerRef });

  return (
    <header className="relative h-screen min-h-120 flex flex-col items-center justify-center text-white overflow-hidden">
      <Filter />

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <Parallax media={video} isVideo={true} />
      </div>

      <div className="z-40 relative w-full h-full">
        <div className="w-screen h-screen min-h-100 py-5 px-5 md:px-12 lg:px-10 flex flex-col justify-around md:justify-between text-center md:text-start ">
          <Title label="Hola, soy" size="small">
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-purple-300/80 to-[#daa820] font-bold">
              Steven Trujillo
            </span>
          </Title>

          <div className="relative flex flex-col  md:max-w-[70%] uppercase px-4">
            <img
              src={photo}
              className="mx-auto md:mx-0 w-30 mb-2"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            ></img>
            <p className="text-gray-200/50">
              ¡Bienvenido a mi portafolio! Me apasiona el desarrollo web .
            </p>

            <div
              ref={containerRef}
              className="flex flex-col md:flex-row mx-auto items-center md:items-start md:mx-0 gap-2 p-2 "
            >
              <Button
                label="Ver proyectos"
                onClick={() => scrollToSection(4)}
                icon={<BiSolidNetworkChart />}
                iconPosition="left"
              />
              <a data-fancybox data-type="iframe" href={cv}>
                <Button
                  label="Mostrar CV"
                  icon={<TbFileCv />}
                  iconPosition="left"
                />
              </a>
            </div>
          </div>

          <Title label="FrontEnd Dev. Jr." size="small" />
        </div>
      </div>
    </header>
  );
};

export default Header;
