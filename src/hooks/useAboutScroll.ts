import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  imgsRef: React.RefObject<HTMLDivElement | null>;
};

export function useAboutScroll({ aboutRef, imgsRef }: Props) {
  useEffect(() => {
    if (!aboutRef.current || !imgsRef.current) return;

    const totalImages = gsap.utils.toArray<HTMLImageElement>(
      imgsRef.current.querySelectorAll(".mask-img")
    );

    const MIN_VIEW_HEIGHT = 700;
    const viewHeight = Math.max(window.innerHeight, MIN_VIEW_HEIGHT);

    const trigger = ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top top",
      end: `+=${viewHeight * totalImages.length}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const segment = 1 / totalImages.length;
        const rawIndex = Math.floor(self.progress / segment);
        const lastIndex = totalImages.length - 1;
        const index = Math.min(rawIndex, lastIndex);

        totalImages.forEach((img, i) => {
          const isLast = index === lastIndex;

          if (i === index) {
            if (isLast) {
              gsap.set(img, {
                zIndex: 0,
                maskImage: "linear-gradient(90deg, black 0%, black 100%)",
              });
            } else {
              const localProgress = (self.progress - index * segment) / segment;

              const left = 50 - localProgress * 50;
              const right = 50 + localProgress * 50;
              const deg = 90 + localProgress * 40;

              gsap.set(img, {
                zIndex: 0,
                maskImage: `linear-gradient(
                ${deg}deg,
                black ${left}%, 
                transparent ${left}%, 
                transparent ${right}%, 
                black ${right}%)`,
              });
            }
          } else if (i === index + 1 && !isLast) {
            gsap.set(img, {
              zIndex: -1,
              maskImage: "linear-gradient(90deg, black 0%, black 100%)",
            });
          } else {
            gsap.set(img, {
              zIndex: -2,
              maskImage:
                "linear-gradient(90deg, transparent 0%, transparent 100%)",
            });
          }
        });
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, [aboutRef, imgsRef]);
}
