import { Reveal, SectionTitle, Stars } from "./ui";

const offerings = [
  {
    num: "I",
    title: "Citiri de Tarot",
    desc: "Mesaje de la spirite, pentru claritate și înțelepciune.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="h-9 w-9">
        <rect x="7" y="3" width="10" height="16" rx="1.5" transform="rotate(-8 12 11)" />
        <rect x="9" y="5" width="10" height="16" rx="1.5" transform="rotate(8 14 13)" />
        <path d="M14 9.5l.9 1.9 2.1.3-1.5 1.5.4 2.1-1.9-1-1.9 1 .4-2.1-1.5-1.5 2.1-.3z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "II",
    title: "Ritualuri și descântece",
    desc: "Călăuzite de învățăturile bunicilor mele, pentru iubire, protecție și vindecare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="h-9 w-9">
        <path d="M12 2c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0C9 6 10.5 4.5 12 2z" strokeLinejoin="round" />
        <rect x="9.5" y="11" width="5" height="10" rx="1" />
        <path d="M6 21h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "III",
    title: "Rădăcini și ierburi magice",
    desc: "Timpuri vechi de tradiții pentru purificare și împlinire.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="h-9 w-9">
        <path d="M12 22V8M12 8c-4 0-7-3-7-6 3 0 7 2 7 6zm0 0c4 0 7-3 7-6-3 0-7 2-7 6zM12 14c-3 0-5-2-5-4 2 0 5 1 5 4zm0 0c3 0 5-2 5-4-2 0-5 1-5 4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "IV",
    title: "Curățări energetice",
    desc: "Legătura mea cu spiritele strămoșilor mă ajută să îndepărtez orice energie negativă ce îți blochează calea!",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="h-9 w-9">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" strokeLinejoin="round" />
        <path d="M5 17l.7 2 2 .7-2 .7L5 22l-.7-1.6-2-.7 2-.7zM19 15l.6 1.6 1.6.6-1.6.6L19 19.4l-.6-1.6-1.6-.6 1.6-.6z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Offerings() {
  return (
    <section id="oferta" className="relative overflow-hidden py-28">
      <Stars count={40} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,162,78,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Daruri străvechi"
            title="Ce îți pot oferi?"
            subtitle="Fie că ai nevoie de răspunsuri, protecție sau pur și simplu vrei să înveți tainele necunoscutului, eu sunt aici pentru a-ți lumina calea."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 120}>
              <div className="card-border group relative h-full overflow-hidden rounded-2xl p-8">
                <span className="absolute -top-3 right-5 font-display text-7xl text-gold-400/10 transition group-hover:text-gold-400/20">
                  {o.num}
                </span>
                <div className="relative mb-6 text-gold-300 transition group-hover:scale-110 group-hover:text-gold-200">
                  {o.icon}
                </div>
                <h4 className="relative font-display text-lg font-semibold text-white">{o.title}</h4>
                <p className="relative mt-3 text-lg leading-relaxed text-purple-100/65">{o.desc}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-mystic-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-r from-night-800 via-mystic-700/20 to-night-800 px-8 py-14 text-center sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,194,122,0.1),transparent_60%)]" />
            <p className="relative font-display text-2xl leading-snug text-gold-300 sm:text-3xl lg:text-4xl">
              Magia nu este doar un mister…
              <br />
              <span className="gold-text font-semibold">este o putere!</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
