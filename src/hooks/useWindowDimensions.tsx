import { useEffect, useState } from "react";

type WindowDimension = { width: number; height: number };

function getWindowDimensions(): WindowDimension {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
