import React, { RefObject, useEffect, useRef } from "react";

export const DEFAULT_WIDTHS = {
  minWidth: 320,
};

interface Props {
  innerRef: RefObject<HTMLDivElement>;
  onChange: (width: number) => void;
  maxWidth: number;
}

const edgeCase = (
  value: number,
  min: number,
  max: number,
): [number, boolean] => {
  if (value < min) {
    return [min, false];
  }
  if (value > max) {
    return [max, false];
  }
  return [value, true];
};

const WidthHandler: React.FC<Props> = ({ innerRef, onChange, maxWidth }) => {
  const { minWidth } = DEFAULT_WIDTHS;

  const startX = useRef<number | null>(null);
  const startWidth = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!startX.current || !startWidth.current) return;
      const delta = e.pageX - startX.current; // leftOrRight === 'left' ? startX - e.pageX : (startX - e.pageX) * -1
      const calculated = startWidth.current + delta * window.devicePixelRatio;
      const [newWidth, isChanging] = edgeCase(calculated, minWidth, maxWidth);
      if (isChanging) {
        onChange(newWidth);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [innerRef, maxWidth, minWidth, onChange]);

  useEffect(() => {
    const handleMouseUp = () => {
      startX.current = null;
      document.body.classList.remove("resizing");
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div
      onMouseDown={(e) => {
        document.body.classList.add("resizing");
        startX.current = e.pageX;
        startWidth.current = innerRef.current
          ? innerRef.current.clientWidth
          : 0;
      }}
      role="separator"
      aria-orientation="vertical"
      aria-valuemin={minWidth}
      aria-valuemax={maxWidth}
      className="absolute -right-4 top-1/2 z-30 flex h-14 w-2 cursor-ew-resize rounded-md bg-slate-600"
    ></div>
  );
};

export default WidthHandler;
