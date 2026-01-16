import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  onLoaded?: () => void;
};

const LoadingOverlay = ({ onLoaded }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const counterValue = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const counter = counterRef.current;
    if (!overlay || !counter) return;

    intervalRef.current = window.setInterval(() => {
      counterValue.current += Math.random() * 3 + 1;
      if (counterValue.current >= 100) {
        counterValue.current = 100;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // small delay then animate out
        setTimeout(() => {
          gsap.to(counter, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power2.inOut",
          });
          gsap.to(overlay, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.3,
            onComplete: () => {
              overlay.style.display = "none";
              onLoaded?.();
            },
          });
        }, 200);
      }
      counter.textContent = `[${Math.round(counterValue.current)
        .toString()
        .padStart(2, "0")}]`;
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onLoaded]);

  return (
    <div className="loading-overlay" ref={overlayRef}>
      Cargando{" "}
      <span className="loading-counter" ref={counterRef}>
        [00]
      </span>
    </div>
  );
};

export default LoadingOverlay;
