/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { useState, useEffect } from "react";

const followPointer = (ref) => {
  const [point, setPoint] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({
        x,
        y,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};

export default followPointer;
