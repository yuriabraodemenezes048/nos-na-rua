"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/nav";
import { site, instagramLink } from "@/lib/site";
import { trackEvent } from "@/lib/track";
import {
  InstagramIcon,
  MenuIcon,
  CloseIcon,
  HeartIcon,
} from "@/components/Icons";

/**
 * Cabeçalho fixo com navegação suave.
 * - No desktop: logo, links e botão "Quero Doar".
 * - No celular: logo e menu que abre um painel simples e arejado.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sombra sutil no cabeçalho depois de rolar um pouco a página.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Impede o fundo de rolar quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur"
          : "bg-cream/70 backdrop-blur"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          className="rounded-lg"
          aria-label={`${site.name} — início`}
        >
          <Logo />
        </a>

        {/* Navegação desktop */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={instagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da ONG (abre em nova aba)"
            onClick={() => trackEvent("clique_instagram", { local: "header" })}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-stone transition hover:border-terra-200 hover:text-terra-500"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="#doacao"
            onClick={() => trackEvent("clique_doar", { local: "header" })}
            className="btn-primary py-2.5"
          >
            <HeartIcon className="h-4 w-4" />
            Quero Doar
          </a>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Painel do menu mobile */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* fundo escurecido */}
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div className="absolute inset-x-0 top-0 origin-top animate-fade-up rounded-b-3xl bg-cream p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink"
                aria-label="Fechar menu"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav
              className="mt-6 flex flex-col"
              aria-label="Navegação principal (celular)"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/5 py-4 text-lg font-medium text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#doacao"
                onClick={() => {
                  trackEvent("clique_doar", { local: "menu_mobile" });
                  setOpen(false);
                }}
                className="btn-primary w-full"
              >
                <HeartIcon className="h-5 w-5" />
                Quero Doar
              </a>
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-outline w-full"
              >
                <InstagramIcon className="h-5 w-5" />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
