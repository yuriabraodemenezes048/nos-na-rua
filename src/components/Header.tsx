"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { MenuIcon, CloseIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/transparencia", label: "Transparência" },
];

/**
 * Cabeçalho fixo e compacto.
 * Desktop: marca, dois links e o botão "Doar agora".
 * Celular: marca e menu simples, com foco controlado e fechamento por Escape.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Fecha com Escape e devolve o foco ao botão que abriu o menu.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    // Move o foco para dentro do painel ao abrir.
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

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-cream/95 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Nós na Rua — página inicial">
          <Logo />
        </Link>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/doe" className="btn-primary min-h-[2.75rem] px-6 text-[0.9375rem]">
            Doar agora
          </Link>
        </nav>

        {/* Botão do menu no celular */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="grid h-11 w-11 place-items-center rounded-full border border-brown/20 text-brown md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>

      {/* Painel do menu no celular */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
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

            <Link
              href="/doe"
              onClick={closeMenu}
              className="btn-primary mt-6 w-full"
            >
              Doar agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
