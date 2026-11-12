import { PentacleRing, Stars } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-night-950/60 to-night-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),transparent_60%)]" />
      <Stars count={90} />

      <PentacleRing className="animate-spin-slow pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-gold-400/10 lg:-right-20" />
      <PentacleRing className="animate-spin-slower pointer-events-none absolute -left-60 -bottom-40 h-[500px] w-[500px] text-mystic-400/10" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-32 pb-24 text-center sm:px-8">
        <p className="animate-[fade-up_1s_ease_both] mb-6 font-display text-[11px] tracking-[0.45em] text-mystic-400 uppercase">
          Călăuză între lumi · Păstrătoare a cunoașterii străvechi
        </p>
        <h1 className="animate-[fade-up_1s_ease_0.2s_both] font-display text-4xl leading-[1.1] font-semibold text-white sm:text-6xl lg:text-7xl">
          Eu sunt <span className="gold-text">Elena</span>,
          <br />
          <span className="font-normal text-purple-100/90">vrăjitoare și moștenitoare</span>
          <br />
          <span className="font-normal text-purple-100/90">a unui har străvechi</span>
        </h1>
        <p className="animate-[fade-up_1s_ease_0.4s_both] mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-purple-100/75 italic sm:text-2xl">
          „Magia mea nu este doar o artă, ci o chemare – un fir invizibil care mă leagă de energiile
          universului și de secretele ascunse ale sufletului omenesc.”
        </p>

        <div className="animate-[fade-up_1s_ease_0.6s_both] mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="animate-glow rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_auto] px-9 py-4 font-display text-xs tracking-[0.25em] text-night-950 uppercase transition hover:bg-right"
          >
            Începe călătoria
          </a>
          <a
            href="#servicii"
            className="rounded-full border border-purple-200/30 px-9 py-4 font-display text-xs tracking-[0.25em] text-purple-100 uppercase transition hover:border-gold-400 hover:text-gold-300"
          >
            Descoperă serviciile
          </a>
        </div>

        <div className="animate-[fade-up_1s_ease_0.9s_both] mt-20 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            ["Tarot", "Citiri & mesaje"],
            ["Ritualuri", "Iubire & protecție"],
            ["Ierburi", "Purificare"],
            ["Curățări", "Energetice"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-display text-sm tracking-[0.2em] text-gold-300 uppercase">{a}</p>
              <p className="mt-1 text-sm text-purple-100/60">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#despre"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-400/70 transition hover:text-gold-300"
        aria-label="Derulează"
      >
        <span className="font-display text-[10px] tracking-[0.3em] uppercase">Coboară</span>
        <span className="animate-float block h-10 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </a>
    </section>
  );
}
