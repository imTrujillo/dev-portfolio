import { useRef, useEffect } from "react";

type Props = {
  media: string;
  isVideo?: boolean;
  children?: React.ReactNode;
};

const Parallax = ({ media, isVideo = false, children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mediaRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const containerTop = scrolled + rect.top;
      const offset = (scrollY - containerTop) * 0.3; // parallax factor

      mediaRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div ref={mediaRef} className="absolute inset-0 w-full h-full">
        {isVideo ? (
          <video
            src={media}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <>
            <img
              src={media}
              className="w-full h-140 object-cover object-center"
            />
            <div className="absolute w-full h-[200%] inset-0 z-30 bg-linear-to-l from-[#24335c] to-[#741f18] opacity-20 pointer-events-none"></div>
          </>
        )}
      </div>

      {children && <div className="absolute inset-0 z-20">{children}</div>}
    </div>
  );
};

export default Parallax;
