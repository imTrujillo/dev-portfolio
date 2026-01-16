import Form from "./Form";
import Parallax from "../common/Parallax";
import { useRef } from "react";
import useFancyBox from "../../hooks/useFancyBox";

import photo1 from "../../assets/images/footer.jpg";
import photo2 from "../../assets/images/footer2.jpg";
import cv from "../../assets/docs/cv.pdf";

const Footer = () => {
  const date = new Date();

  const containerRef = useRef(null);
  useFancyBox({ containerRef });

  return (
    <footer className="bg-black overflow-hidden" data-section="5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 pt-2 h-160 md:h-90 bg-black">
        <Parallax media={photo1}>
          <div className="text-start px-8 py-4">
            <h3 className="text-3xl tracking-tighter uppercase mb-2 text-[#bb6961] font-semibold">
              Contacto
            </h3>
            <ul className="space-y-1">
              <li className="flex items-start" ref={containerRef}>
                <a
                  data-fancybox
                  data-type="iframe"
                  href={cv}
                  className="text-white hover:text-[#d6a29d]! transition"
                >
                  Currículum Vitae
                </a>
              </li>
              <li className="flex items-start">
                <p className="text-white/60 hover:text-[#d6a29d]! transition">
                  San Salvador, El Salvador
                </p>
              </li>
              <li className="flex items-start">
                <a
                  href="mailto:stjs.trujillo@gmail.com"
                  className="text-white hover:text-[#d6a29d]! transition"
                >
                  stjs.trujillo@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="tel:+50373646423"
                  className="text-white hover:text-[#d6a29d]! transition"
                >
                  +503 7364 6423
                </a>
              </li>
            </ul>
            <h3 className="text-3xl tracking-tighter uppercase mt-4 mb-2 text-[#bb6961] font-semibold">
              Redes Sociales
            </h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <a
                  href="https://www.linkedin.com/in/steven-trujillo-js/"
                  className="text-white hover:text-[#d6a29d]! transition"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="https://github.com/imTrujillo"
                  className="text-white hover:text-[#d6a29d]! transition"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </Parallax>
        <Parallax media={photo2}>
          <div className="text-start px-8 py-4 md:w-[70%]">
            <h3 className="text-3xl tracking-tighter uppercase mb-4 text-[#bb6961] font-semibold">
              Escríbeme
            </h3>
            <Form />
          </div>
        </Parallax>
      </div>

      <p className="text-white text-sm py-2 tracking-wider font-extralight uppercase">
        © {date.getFullYear()} · Todos los derechos reservados · Steven Trujillo
      </p>
    </footer>
  );
};

export default Footer;
