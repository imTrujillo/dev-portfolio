import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useYearScroll() {
  const currentYear = useRef("2022");
  const userInteracted = useRef(false);

  useEffect(() => {
    const yearDisplay = document.getElementById("year-display");
    if (!yearDisplay) return;

    const digits = yearDisplay.querySelectorAll<HTMLSpanElement>(".digit");
    gsap.set(yearDisplay, { opacity: 0, y: -20 });
    const sections = gsap.utils.toArray<HTMLElement>(".year-section");
    const allSplits: SplitText[] = [];

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    userInteracted.current = !isTouch;

    function animateYear(from: string, to: string) {
      const fromStr = from.padStart(4, "0");
      const toStr = to.padStart(4, "0");

      digits.forEach((el, i) => {
        if (fromStr[i] === toStr[i]) return;

        gsap.to(el, {
          yPercent: -100,
          opacity: 0,
          duration: 0.2,
          delay: (3 - i) * 0.1,
          onComplete: () => {
            el.textContent = toStr[i];
            gsap.set(el, { yPercent: 100 });

            gsap.to(el, {
              yPercent: 0,
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      });
    }

    sections.forEach((section, index) => {
      const year = section.dataset.year!;
      const color = section.dataset.color || "#ffffff";
      const intros = section.querySelectorAll<HTMLElement>(".intro");

      const splits: SplitText[] = [];
      const allWords: HTMLElement[] = [];

      intros.forEach((introEl) => {
        const s = new SplitText(introEl, { type: "words" });
        splits.push(s);
        allSplits.push(s);
        gsap.set(s.words, { opacity: 0.1 });
        allWords.push(...(s.words as unknown as HTMLElement[]));
      });

      const isEducationSection =
        section.classList.contains("education-section");
      let horizontalScrollContainer: HTMLElement | null = null;

      if (isEducationSection) {
        horizontalScrollContainer = section.querySelector(
          ".formation-projects"
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=90%",
          pin: true,
          scrub: true,

          onEnter: () => {
            animateYear(currentYear.current, year);
            currentYear.current = year;

            gsap.to("body", {
              backgroundColor: color,
              duration: 0.6,
            });
          },

          onLeaveBack: () => {
            const prev = sections[index - 1];
            const prevYear = prev?.dataset.year || "2022";
            const prevColor = prev?.dataset.color || "#ffffff";

            animateYear(currentYear.current, prevYear);
            currentYear.current = prevYear;

            gsap.to("body", {
              backgroundColor: prevColor,
              duration: 0.6,
            });
          },
        },
      });

      if (allWords.length) {
        tl.to(allWords, {
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
        });

        if (isEducationSection && horizontalScrollContainer) {
          const maxScroll =
            horizontalScrollContainer.scrollWidth -
            horizontalScrollContainer.clientWidth;

          if (maxScroll > 0) {
            tl.to(
              horizontalScrollContainer,
              {
                scrollLeft: maxScroll,
                ease: "none",
                duration: 5,
              },
              "<"
            );
          }
        }
      }

      const sectionId = section.dataset.section;
      const shouldShowYear = sectionId === "1" || sectionId === "2";

      const nextSection = sections[index + 1];

      if (yearDisplay) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "+=200%",
          onEnter: () => {
            if (shouldShowYear)
              gsap.to(yearDisplay, { opacity: 1, y: 0, duration: 0.25 });
            else gsap.to(yearDisplay, { opacity: 0, y: -20, duration: 0.25 });
          },
          onLeave: () => {
            const nextShouldShow = nextSection
              ? nextSection.dataset.section === "1" ||
                nextSection.dataset.section === "2"
              : false;
            if (nextShouldShow)
              gsap.to(yearDisplay, { opacity: 1, y: 0, duration: 0.25 });
            else gsap.to(yearDisplay, { opacity: 0, y: -20, duration: 0.25 });
          },
          onEnterBack: () => {
            if (shouldShowYear)
              gsap.to(yearDisplay, { opacity: 1, y: 0, duration: 0.25 });
            else gsap.to(yearDisplay, { opacity: 0, y: -20, duration: 0.25 });
          },
          onLeaveBack: () => {
            const prev = sections[index - 1];
            const prevShouldShow = prev
              ? prev.dataset.section === "1" || prev.dataset.section === "2"
              : false;
            if (prevShouldShow)
              gsap.to(yearDisplay, { opacity: 1, y: 0, duration: 0.25 });
            else gsap.to(yearDisplay, { opacity: 0, y: -20, duration: 0.25 });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
      try {
        allSplits.forEach((s) => s.revert());
      } catch (e) {
        console.error(e);
      }
    };
  }, []);
}
