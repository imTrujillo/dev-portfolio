import { useEffect, useState } from "react";

export function useGridCols() {
  const getCols = () => {
    const w = window.innerWidth;

    if (w >= 1024) return 6;
    if (w >= 768) return 4;
    return 3;
  };

  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const onResize = () => setCols(getCols());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return cols;
}
