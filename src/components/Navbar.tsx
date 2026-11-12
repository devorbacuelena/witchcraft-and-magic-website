import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { MoonIcon } from "./ui";

const links = [
  { href: "#despre", label: "Despre mine" },
  { href: "#magie", label: "Magia Albă & Neagră" },
  { href: "#servicii", label: "Servicii" },
  { href: "#oferta", label: "Ce îți ofer" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-night-950/85 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-400 transition group-hover:border-gold-400 group-hover:shadow-[0_0_18px_rgba(228,194,122,0.4)]">
            <MoonIcon className="h-5 w-5" />
          </span>
          <span className="whitespace-nowrap font-display text-sm tracking-[0.06em] text-gold-300 sm:text-base">
            De vorbă cu Elena
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-[11px] tracking-[0.22em] text-purple-100/75 uppercase transition hover:text-gold-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold-500/60 px-5 py-2 font-display text-[11px] tracking-[0.2em] text-gold-300 uppercase transition hover:bg-gold-500 hover:text-night-950"
          >
            Programează-te
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-gold-300 lg:hidden"
          aria-label="Meniu"
        >
          <span className={cn("h-px w-6 bg-current transition", open && "translate-y-[7px] rotate-45")} />
          <span className={cn("h-px w-6 bg-current transition", open && "opacity-0")} />
          <span className={cn("h-px w-6 bg-current transition", open && "-translate-y-[7px] -rotate-45")} />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-night-950/95 backdrop-blur-md transition-all duration-500 lg:hidden",
          open ? "max-h-96 border-b border-gold-500/20" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-display text-xs tracking-[0.22em] text-purple-100/80 uppercase transition hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
