import React, { useRef, useEffect } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionMap = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
};

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = "",
  direction = "up",
  duration = 600,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 60;
      if (inView) {
        node.style.opacity = "1";
        node.style.transform = "none";
        node.style.transition = `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [duration]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: directionMap[direction],
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
