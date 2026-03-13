import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

type Point = {
  x: number;
  y: number;
};

const useFollowPointer = (ref: RefObject<HTMLElement | null>): Point => {
  const [point, setPoint] = useState<Point>({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    if (!ref.current) return undefined;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      setPoint({
        x,
        y,
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [ref]);

  return point;
};

export default useFollowPointer;
