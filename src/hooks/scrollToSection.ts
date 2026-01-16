import { getLenis } from "../animations/lenis";

export const scrollToSection = (index: number) => {
  const lenis = getLenis();
  const target = document.querySelector(
    `[data-section="${index}"]`
  ) as HTMLElement;

  if (!lenis || !target) return;

  lenis.scrollTo(target, {
    duration: 0.8,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });
};
