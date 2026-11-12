import { Ornament, Reveal } from "./ui";

export default function About() {
  return (
    <section id="despre" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(91,52,184,0.18),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="animate-float absolute -inset-4 rounded-[2rem] border border-gold-500/30" />
            <div className="absolute -inset-10 rounded-full bg-mystic-500/20 blur-3xl" />
            <img
              src="/images/elena.jpg"
              alt="Elena, vrăjitoare"
              className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
            />
            <div className="absolute -right-6 -bottom-6 hidden rounded-2xl border border-gold-500/30 bg-night-900/90 px-6 py-4 backdrop-blur sm:block">
              <p className="font-display text-xs tracking-[0.3em] text-mystic-400 uppercase">Moștenire</p>
              <p className="mt-1 font-display text-2xl text-gold-300">3 generații</p>
              <p className="text-sm text-purple-100/60">de femei înțelepte</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 font-display text-xs tracking-[0.35em] text-mystic-400 uppercase">Despre mine</p>
            <h2 className="font-display text-3xl leading-tight font-semibold text-gold-300 sm:text-4xl lg:text-5xl">
              Magia curge în sângele meu
            </h2>
            <Ornament className="my-6 justify-start" />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xl leading-relaxed text-purple-100/80">
              Sunt descifratoare a tainelor nevăzute și păstrătoare a cunoașterii străvechi. Magia mea este o{" "}
              <span className="text-gold-300">moștenire sacră de la bunicile mele</span>, femei înțelepte și pline
              de putere, care au învățat să comunice cu spiritele naturii și să manipuleze energiile universului.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-xl leading-relaxed text-purple-100/80">
              De la ele am învățat tainele magiei – acele vrăji uitate de timp și ritualuri ce dau viață dorințelor
              și viselor celor care cred cu adevărat.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <blockquote className="mt-10 border-l-2 border-gold-500 pl-6 text-2xl text-gold-200/90 italic">
              „Magia este în fiecare dintre noi, dar eu am fost aleasă să o păstrez și să o împărtășesc celor care
              au nevoie de ea.”
            </blockquote>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["Călăuză", "între lumi"],
                ["Descifratoare", "a tainelor nevăzute"],
                ["Păstrătoare", "a cunoașterii"],
              ].map(([t, s]) => (
                <div key={t} className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center">
                  <p className="font-display text-xs tracking-wider text-gold-300 uppercase sm:text-sm">{t}</p>
                  <p className="mt-1 text-sm text-purple-100/55 italic">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
