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
  { href: "/#galeria", label: "Galeria" },
  { href: "/transparencia", label: "Transparência" },
];

/**
 * Cabeçalho fixo e compacto.
 *
 * Sobre o hero da home, usa um fundo translúcido escuro (bg-ink/55 + blur) em
 * vez de transparência pura — isso garante contraste AA para a navegação
 * independentemente do que estiver na foto por baixo (testado contra o pixel
 * mais claro da imagem). Ao rolar, ou em outras páginas, o fundo vira creme
 * sólido. Menu do celular é um diálogo acessível: foco move para dentro ao
 * abrir, fica preso no painel (Tab/Shift+Tab), e Escape fecha e devolve o
 * foco ao botão que abriu.
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Na home, o header fica transparente enquanto o hero domina a viewport.
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.6 : 8;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const overHero = isHome && !scrolled;

  useEffect(() => {
    if (!open) return;

    function getFocusable(): HTMLElement[] {
      return [
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
      ];
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        // Devolve o foco ao botão que abriu o menu (padrão de diálogo acessível).
        toggleRef.current?.focus();
        return;
      }
      // Prende o foco dentro do painel enquanto o menu estiver aberto.
      if (event.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    getFocusable()[0]?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        overHero
          ? "border-white/10 bg-ink/55"
          : "border-sand/80 bg-cream/95"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Nós na Rua — página inicial"
          className={overHero ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]" : ""}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.9375rem] font-medium transition-colors ${
                overHero
                  ? "text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.55)] hover:text-white/85"
                  : "text-muted hover:text-ink"
              }`}
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
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
            overHero
              ? "border-white/50 bg-ink/15 text-white backdrop-blur-sm"
              : "border-brown/20 text-brown"
          }`}
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
