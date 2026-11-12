import { Reveal, SectionTitle } from "./ui";

type Service = { title: string; desc: string; icon: React.ReactNode };

const white: Service[] = [
  {
    title: "Ritualuri de iubire",
    desc: "Pentru atragerea unei iubiri pure și durabile.",
    icon: (
      <path d="M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6.3 5.3 5.3 0 0 1 21.3 12C19 16.4 12 21 12 21z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Protecție spirituală",
    desc: "Pentru a alunga energiile negative și a păstra un mediu curat și liniștit.",
    icon: <path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5C7.4 20.2 4 16.5 4 11.5v-6L12 2zM9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />,
  },
  {
    title: "Vindecare energetică",
    desc: "Pentru îmbunătățirea stării tale fizice și emoționale.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" strokeLinecap="round" />
      </>
    ),
  },
];

const black: Service[] = [
  {
    title: "Protecție împotriva dușmanilor",
    desc: "Pentru a îndepărta energiile negative sau persoanele care îți pun rău.",
    icon: <path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5C7.4 20.2 4 16.5 4 11.5v-6L12 2zM9.5 9.5l5 5m0-5l-5 5" strokeLinejoin="round" strokeLinecap="round" />,
  },
  {
    title: "Desfacerea legăturilor karmice",
    desc: "Pentru a elibera sufletul de conexiuni care te țin blocat.",
    icon: (
      <path d="M10 14a4 4 0 0 1 0-5.7l2.3-2.3a4 4 0 0 1 5.7 5.7l-1 1M14 10a4 4 0 0 1 0 5.7l-2.3 2.3a4 4 0 0 1-5.7-5.7l1-1M4 4l16 16" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Răzbunări & corectarea nedreptăților",
    desc: "Atunci când este necesar să restabilești echilibrul.",
    icon: <path d="M12 3v18M5 7l7-2 7 2M5 7l-3 7a4 4 0 0 0 6 0L5 7zm14 0l-3 7a4 4 0 0 0 6 0l-3-7zM8 21h8" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

function Card({ s, tone, delay }: { s: Service; tone: "white" | "black"; delay: number }) {
  const isWhite = tone === "white";
  return (
    <Reveal delay={delay}>
      <div className="card-border group h-full rounded-2xl p-7">
        <div
          className={
            isWhite
              ? "mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-night-950"
              : "mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-mystic-400/40 text-mystic-400 transition group-hover:bg-mystic-500 group-hover:text-white"
          }
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.4}>
            {s.icon}
          </svg>
        </div>
        <h4 className="font-display text-lg font-semibold text-white">{s.title}</h4>
        <p className="mt-3 text-lg leading-relaxed text-purple-100/65">{s.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="servicii" className="relative overflow-hidden py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: "url(/images/altar.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-night-950/85 to-night-950" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Serviciile mele"
            title="Ritualuri pentru fiecare chemare"
            subtitle="Lucrez cu ambele fațete ale magiei, alegând cu grijă calea potrivită situației tale."
          />
        </Reveal>

        <div className="mb-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <h3 className="font-display text-xl tracking-[0.2em] text-gold-300 uppercase">Magia Albă</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-gold-500/60 to-transparent" />
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {white.map((s, i) => (
              <Card key={s.title} s={s} tone="white" delay={i * 120} />
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <h3 className="font-display text-xl tracking-[0.2em] text-mystic-400 uppercase">Magia Neagră</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-mystic-500/60 to-transparent" />
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {black.map((s, i) => (
              <Card key={s.title} s={s} tone="black" delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
