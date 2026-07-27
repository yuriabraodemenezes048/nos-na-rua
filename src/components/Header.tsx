"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { MenuIcon, CloseIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#quem-somos", label: "Quem somos" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#como-ajudar", label: "Como ajudar" },
  { href: "/transparencia", label: "Transparência" },
];

/**
 * Cabeçalho fixo e compacto.
 *
 * Na página inicial, o cabeçalho começa transparente sobre o hero (links em
 * branco) e vira sólido ao rolar. A logo do cabeçalho fica oculta na home,
 * porque quem a apresenta é a ScrollMorphLogo (grande no topo → pequena aqui).
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const threshold = isHome ? 180 : 8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  // Sobre o hero (home, topo): fundo transparente e itens claros.
  const overHero = isHome && !scrolled;
  const headerBg = overHero
    ? "bg-transparent"
    : "border-b border-sand/80 bg-cream/90 backdrop-blur-md";
  const linkColor = overHero
    ? "text-white/90 hover:text-white"
    : "text-muted hover:text-ink";
  const toggleColor = overHero
    ? "border-white/50 text-white"
    : "border-brown/20 text-brown";

  return (
    <header className={`sticky top-0 z-40 transition-colors ${headerBg}`}>
      <div className="container-site flex h-16 items-center justify-between gap-4">
        {isHome ? (
          // A ScrollMorphLogo ocupa este espaço na home; deixamos um vão.
          <span aria-hidden className="h-11 w-11" />
        ) : (
          <Link href="/" aria-label="Nós na Rua — página inicial">
            <Logo />
          </Link>
        )}

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.9375rem] font-medium transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/doe"
            className="btn-primary min-h-[2.75rem] px-6 text-[0.9375rem]"
          >
            Doar agora
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${toggleColor}`}
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            id="menu-mobile"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-x-0 top-0 rounded-b-3xl bg-cream p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={closeMenu}
                className="grid h-11 w-11 place-items-center rounded-full border border-brown/20 text-brown"
              >
                <CloseIcon className="h-6 w-6" />
                <span className="sr-only">Fechar menu</span>
              </button>
            </div>

            <nav aria-label="Navegação principal" className="mt-6 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-sand py-4 text-lg font-medium text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/doe" onClick={closeMenu} className="btn-primary mt-6 w-full">
              Doar agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
