"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services/What we do" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-slate-stone/10 shadow-sm shadow-deep-forest/5">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
          <img
            alt="Terra Heritage Logo"
            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCppJO6_mDK4ib4lUzJAiaJsbyLZ9RGzi3xTbx9QLqgO_e0UvmqNOuOSIFi6575fkzopAwhWTxB1EWA0ARABNIa4I-AxHOFxByGkBBPy-pyQWSbUme0GPFmsD_Cmd9VeOo8sNjWliBmAM6P-WkII-3NtXZhYcC2IJThRYRxmLr8FhuaAkzog8eOTrBmpYwEudZItBwGtN8a6Xdg1lRTJkTd5DqJr8P929q9_3BacZLk-DF-MUhWaO4"
          />
          <span className="font-display-lg text-headline-sm font-bold text-primary tracking-tight hidden sm:block">
            TERRA HERITAGE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-warm-clay transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden sm:flex items-center gap-2 bg-deep-forest text-on-primary font-body-sm text-body-sm px-6 py-2.5 rounded hover:bg-primary transition-colors active:scale-95 shadow-sm"
            href="tel:6012838734"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            Call Us
          </a>
          <button
            className="md:hidden p-2 text-primary hover:text-warm-clay transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-slate-stone/10 bg-surface px-margin-mobile py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-warm-clay transition-colors font-body-md text-body-md"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:6012838734"
            className="flex items-center gap-2 bg-deep-forest text-on-primary font-body-sm text-body-sm px-6 py-2.5 rounded w-fit"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            Call Us
          </a>
        </nav>
      )}
    </header>
  );
}
