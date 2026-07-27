"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

/**
 * Logo que começa grande e centralizado no topo do hero e, ao rolar, sobe
 * para o canto do cabeçalho e diminui — apenas na página inicial.
 *
 * É um elemento fixo cuja posição/tamanho são interpolados conforme o scroll,
 * ligando dois estados: (grande, centralizado) → (pequeno, no cabeçalho).
 * Só existe na home; nas demais páginas o cabeçalho usa sua própria logo.
 */
const ASPECT = 480 / 541; // largura / altura da arte da logo

export function ScrollMorphLogo() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [box, setBox] = useState<{ left: number; top: number; height: number } | null>(
    null,
  );
  const raf = useRef(0);

  const update = useCallback(() => {
    const vw = window.innerWidth;
    const y = window.scrollY;

    const padL = vw >= 1024 ? 32 : vw >= 640 ? 24 : 20;
    const endH = vw >= 1024 ? 44 : 40; // altura da logo pequena (no header)
    const startH = vw >= 1024 ? 172 : Math.min(132, vw * 0.36); // logo grande

    const startCenterX = vw / 2;
    const endCenterX = padL + (endH * ASPECT) / 2;
    const startTop = vw >= 1024 ? 86 : 68;
    const endTop = 32 - endH / 2; // header tem 64px de altura → centro em 32

    const travel = vw >= 1024 ? 200 : 150;
    const p = Math.min(Math.max(y / travel, 0), 1);
    const lerp = (a: number, b: number) => a + (b - a) * p;

    setBox({
      left: lerp(startCenterX, endCenterX),
      top: lerp(startTop, endTop),
      height: lerp(startH, endH),
    });
  }, []);

  useEffect(() => {
    if (!isHome) return;
    update();
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf.current);
    };
  }, [isHome, update]);

  if (!isHome || !box) return null;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.legalName} — página inicial`}
      className="fixed z-[55] -translate-x-1/2"
      style={{ left: box.left, top: box.top }}
    >
      <Image
        src={siteConfig.logo!}
        alt={siteConfig.legalName}
        width={480}
        height={541}
        priority
        className="w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
        style={{ height: box.height }}
      />
    </Link>
  );
}
