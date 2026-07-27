"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";

/**
 * Revela o conteúdo suavemente quando ele entra na viewport.
 * Usa IntersectionObserver + classes CSS (transform/opacity), sem biblioteca.
 * Sob prefers-reduced-motion, o CSS já força o estado visível.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right";
  as?: "div" | "section" | "li" | "article";
}) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    // Sem IntersectionObserver: mostra o conteúdo imediatamente.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : "";

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
