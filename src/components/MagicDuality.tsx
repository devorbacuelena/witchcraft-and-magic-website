import { Reveal, SectionTitle } from "./ui";

export default function MagicDuality() {
  return (
    <section id="magie" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-night-900 to-night-950" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Două căi, un singur echilibru"
            title={
              <>
                Magia Albă și Magia Neagră
                <br />
                <span className="text-2xl font-normal text-purple-100/70 italic sm:text-3xl">
                  două fațete ale aceleiași monede
                </span>
              </>
            }
          />
        </Reveal>

        <div className="relative grid gap-8 lg:grid-cols-2">
          {/* Simbol central */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-500/40 bg-night-950 shadow-[0_0_40px_rgba(228,194,122,0.25)] lg:flex">
            <svg viewBox="0 0 40 40" className="h-10 w-10">
              <circle cx="20" cy="20" r="18" fill="#f3dca0" />
              <path d="M20 2a18 18 0 0 1 0 36 9 9 0 0 1 0-18 9 9 0 0 0 0-18z" fill="#0d0a1a" />
              <circle cx="20" cy="11" r="2.6" fill="#0d0a1a" />
              <circle cx="20" cy="29" r="2.6" fill="#f3dca0" />
            </svg>
          </div>

          {/* Magia Albă */}
          <Reveal>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-gold-400/25 bg-gradient-to-br from-[#f6f0e4]/[0.07] to-transparent p-9 transition hover:border-gold-300/50 sm:p-12">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-300/10 blur-3xl transition group-hover:bg-gold-300/20" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/50 text-gold-300">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.4}>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-semibold text-gold-200">Magia Albă</h3>
                <p className="mt-2 font-display text-[11px] tracking-[0.3em] text-gold-400/80 uppercase">
                  Lumină · Vindecare · Armonie
                </p>
                <p className="mt-6 text-lg leading-relaxed text-purple-100/80">
                  O formă de magie folosită <span className="text-gold-200">pentru binele tuturor</span>. Se
                  concentrează pe vindecare, protecție, armonie și împlinirea dorințelor în mod pozitiv, fără a
                  dăuna altora.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-purple-100/80 italic">
                  Aceasta este magia iubirii, a prosperității și a echilibrului interior.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Vindecare", "Protecție", "Armonie", "Iubire & prosperitate"].map((x) => (
                    <li key={x} className="flex items-center gap-3 text-purple-100/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-300 shadow-[0_0_8px_#f3dca0]" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Magia Neagră */}
          <Reveal delay={200}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-mystic-500/30 bg-gradient-to-br from-mystic-700/20 to-night-950 p-9 transition hover:border-mystic-400/60 sm:p-12">
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-mystic-700/30 blur-3xl transition group-hover:bg-mystic-500/30" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-mystic-400/50 text-mystic-400">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.4}>
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-semibold text-mystic-400">Magia Neagră</h3>
                <p className="mt-2 font-display text-[11px] tracking-[0.3em] text-mystic-400/80 uppercase">
                  Intensitate · Voință · Dezlegare
                </p>
                <p className="mt-6 text-lg leading-relaxed text-purple-100/80">
                  Lucrează cu <span className="text-mystic-400">energii mai intense</span> și poate fi utilizată
                  pentru a influența voința cuiva sau pentru a rupe legături karmice, însă se face doar cu un scop
                  bine definit.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-purple-100/80 italic">
                  Este important să fie folosită cu multă responsabilitate, deoarece poate aduce atât beneficii,
                  cât și consecințe.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Influențarea voinței", "Ruperea legăturilor karmice", "Scop bine definit", "Responsabilitate"].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-3 text-purple-100/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-mystic-400 shadow-[0_0_8px_#b48cf2]" />
                        {x}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-xl leading-relaxed text-purple-100/70 italic">
            Indiferent de calea aleasă, magia trebuie folosită cu respect și responsabilitate. Eu sunt aici pentru
            a te ghida în acest proces, pentru a-ți oferi soluții potrivite fiecărei situații.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
