import { MoonIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-night-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-400">
            <MoonIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base tracking-[0.25em] text-gold-300 uppercase">Elena</p>
            <p className="text-sm text-purple-100/50 italic">Vrăjitoare · Călăuză între lumi</p>
          </div>
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            ["#despre", "Despre"],
            ["#magie", "Magie"],
            ["#servicii", "Servicii"],
            ["#oferta", "Oferta"],
            ["#contact", "Contact"],
          ].map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="font-display text-[11px] tracking-[0.22em] text-purple-100/60 uppercase transition hover:text-gold-300"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-center text-sm text-purple-100/40">
          © {new Date().getFullYear()} Elena. Toate drepturile rezervate.
        </p>
      </div>
      <p className="mt-8 text-center font-display text-[10px] tracking-[0.4em] text-gold-500/40 uppercase">
        ✦ Magia este în fiecare dintre noi ✦
      </p>
    </footer>
  );
}
