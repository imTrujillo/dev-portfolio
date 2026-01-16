import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../hooks/scrollToSection";

const sections = [
  "Acerca",
  "Educación",
  "Experiencia",
  "Habilidades",
  "Proyectos",
  "Contacto",
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.section);
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        className="md:hidden fixed bottom-6 right-4 w-10 h-10 rounded-full bg-orange-500/40! text-white flex items-center justify-center backdrop-blur-md shadow-lg transition hover:bg-black/60 z-50 outline-none! border-none!"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      <aside
        className={`fixed bottom-18 md:bottom-0 lg:bottom-16 right-4 z-40 flex-col p-4 rounded-lg 
          transition-all duration-300 
          ${
            open
              ? "flex bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
              : "hidden md:flex"
          }`}
      >
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`category relative  ${
              activeIndex === index ? "active" : ""
            }`}
            data-index={index}
          >
            {section}
          </button>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
