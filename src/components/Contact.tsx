import { useState, type FormEvent } from "react";
import { Ornament, PentacleRing, Reveal, Stars } from "./ui";

const subjects = [
  "Citire de Tarot",
  "Ritual de iubire",
  "Protecție spirituală",
  "Vindecare energetică",
  "Desfacerea legăturilor karmice",
  "Corectarea unei nedreptăți",
  "Curățare energetică",
  "Altceva",
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-lg text-white placeholder:text-purple-100/35 outline-none transition focus:border-gold-400/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(228,194,122,0.12)]";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-night-900 to-night-950" />
      <Stars count={50} />
      <PentacleRing className="animate-spin-slow pointer-events-none absolute -left-52 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-gold-400/[0.07]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="mb-3 font-display text-xs tracking-[0.35em] text-mystic-400 uppercase">Chemarea străveche</p>
            <h2 className="font-display text-3xl leading-tight font-semibold text-gold-300 sm:text-4xl lg:text-5xl">
              Călătoria ta magică începe acum
            </h2>
            <Ornament className="my-6 justify-start" />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xl leading-relaxed text-purple-100/80">
              Dacă ai ajuns aici, înseamnă că sufletul tău a simțit chemarea străveche. Lasă-mă să te ghidez și să îți
              deschid porțile unei lumi ascunse, unde puterea reală stă în{" "}
              <span className="text-gold-300">încredere și în cunoaștere</span>.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-10 space-y-5">
              {[
                {
                  k: "Confidențialitate",
                  v: "Fiecare poveste rămâne între noi. Discreția este o lege sacră.",
                },
                {
                  k: "Răspuns",
                  v: "Îți răspund personal în cel mult 24 de ore.",
                },
                {
                  k: "Consultație",
                  v: "Prima discuție este pentru a înțelege situația ta și calea potrivită.",
                },
              ].map((i) => (
                <li key={i.k} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold-400" />
                  <div>
                    <p className="font-display text-sm tracking-[0.2em] text-gold-300 uppercase">{i.k}</p>
                    <p className="mt-1 text-lg text-purple-100/65">{i.v}</p>
                  </div>
                </li>
              ))}
              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold-400" />
                <div>
                  <p className="font-display text-sm tracking-[0.2em] text-gold-300 uppercase">Telefon</p>
                  <a
                    href="tel:+40721689843"
                    className="mt-1 inline-block font-display text-lg font-semibold tracking-wide text-gold-200 transition hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
                  >
                    0721689843
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold-400" />
                <div>
                  <p className="font-display text-sm tracking-[0.2em] text-gold-300 uppercase">Rețele sociale</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {[
                      { label: "TikTok", href: "https://www.tiktok.com/@tarotulelenei?lang=en" },
                      { label: "Instagram", href: "https://www.instagram.com/witch_of_good/?__d=11" },
                      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61563219621385" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-purple-100/70 underline decoration-gold-500/40 underline-offset-4 transition hover:text-gold-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-3">
          <div className="card-border relative rounded-3xl p-8 hover:translate-y-0 sm:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="animate-glow mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/60 text-gold-300">
                  <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-gold-300">Mesajul tău a fost trimis</h3>
                <p className="mt-4 max-w-md text-xl text-purple-100/70 italic">
                  Spiritele au auzit chemarea ta. Te voi contacta în curând, {form.name || "suflet drag"}.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: subjects[0], message: "" });
                  }}
                  className="mt-8 font-display text-xs tracking-[0.25em] text-mystic-400 uppercase hover:text-gold-300"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-display text-[11px] tracking-[0.25em] text-gold-400/80 uppercase">
                      Numele tău
                    </label>
                    <input
                      required
                      className={inputCls}
                      placeholder="Cum te numești?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-display text-[11px] tracking-[0.25em] text-gold-400/80 uppercase">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className={inputCls}
                      placeholder="adresa@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-display text-[11px] tracking-[0.25em] text-gold-400/80 uppercase">
                    Ce te aduce aici?
                  </label>
                  <select
                    className={inputCls + " appearance-none"}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-night-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-display text-[11px] tracking-[0.25em] text-gold-400/80 uppercase">
                    Povestea ta
                  </label>
                  <textarea
                    required
                    rows={5}
                    className={inputCls + " resize-none"}
                    placeholder="Spune-mi ce îți apasă sufletul..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_auto] py-4 font-display text-xs tracking-[0.3em] text-night-950 uppercase transition hover:bg-right hover:shadow-[0_0_30px_rgba(228,194,122,0.4)]"
                >
                  Trimite chemarea
                </button>
                <p className="text-center text-sm text-purple-100/40 italic">
                  Magia trebuie folosită cu respect și responsabilitate.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
