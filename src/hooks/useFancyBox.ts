import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";

type Props = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const useFancyBox = ({ containerRef }: Props) => {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    Fancybox.bind(container as HTMLElement, "[data-fancybox]", {
      Thumbs: false,
      Toolbar: false,
    } as any);
    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, [containerRef]);
};

export default useFancyBox;
