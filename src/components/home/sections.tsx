
"use client";
import { Crest, DomeArt, Figure, Flourish, LibraryArt, MapArt } from "@/components/art/svg";
import { Count, FadeUp, Marquee, MaskLines } from "@/components/motion/kit";
import { ADMission_STEPS, EVENTS, FACULTIES, NOTICES, STATS, TIMELINE } from "@/data/site";

const ISSUE = [
  { n: "02", t: "Heritage — built for the long now", d: "p. 02", href: "#heritage" },
  { n: "03", t: "Academics — sixteen faculties, one pursuit", d: "p. 03", href: "#academics" },
  { n: "04", t: "Campus — a city that thinks", d: "p. 04", href: "#campus" },
  { n: "05", t: "Notices — read it before it's official", d: "p. 05", href: "#notices" },
  { n: "06", t: "Admissions — the 2026–27 gate", d: "p. 06", href: "#admissions" },
];

export function IssueIndex() {
  return (
    <section className="shell py-16 md:py-20">
      <div className="flex items-end justify-between gap-6">
        <p className="micro text-brass">In this issue</p>
        <Flourish className="hidden text-maroon md:block" />
      </div>
      <div className="mt-6">
        {ISSUE.map((r, i) => (
          <FadeUp key={r.n} delay={i * 0.05}>
            <a href={r.href} className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-4 last:border-b">
              <span className="micro col-span-2 text-brass md:col-span-1">{r.n}</span>
              <span className="col-span-10 font-display text-xl tracking-tight transition-all duration-500 group-hover:translate-x-2 group-hover:italic group-hover:text-maroon md:col-span-7 md:text-3xl">
                {r.t}
              </span>
              <span className="hidden translate-y-[-6px] border-b border-dotted border-ink/30 md:col-span-3 md:block" />
              <span className="micro col-span-12 text-ink-2 md:col-span-1 md:text-right">{r.d}</span>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function WordBand() {
  const words = ["Arts", "Sciences", "Law", "Commerce", "Medicine", "Music", "Management", "Mathematics", "Education", "Fine Arts"];
  return (
    <Marquee className="border-y border-line bg-paper-2/50 py-6">
      {words.map((w) => (
        <span key={w} className="text-stroke whitespace-nowrap px-8 font-display text-5xl tracking-tight md:text-7xl">
          {w} ✦
        </span>
      ))}
    </Marquee>
  );
}

export function Heritage() {
  return (
    <section id="heritage" className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-36">
          <p className="micro text-brass">02 / Heritage</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            <MaskLines lines={[<>Built for</>, <>the <em className="text-maroon">long</em></>, <>now.</>]} />
          </h2>
          <Flourish className="mt-6 text-brass" />
          <FadeUp delay={0.4} className="mt-6 max-w-xs text-sm leading-relaxed text-ink-2">
            From a legislative act to a city of ninety-one colleges — the timeline of an institution that never stopped accreting.
          </FadeUp>
        </div>
      </div>
      <div className="lg:col-span-8">
        {TIMELINE.map((t, i) => (
          <FadeUp key={t.year} delay={i * 0.05}>
            <div className="group grid gap-4 border-t border-line py-8 last:border-b md:grid-cols-12 md:items-baseline">
              <span className="col-span-2 font-display text-4xl text-maroon transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">{t.year}</span>
              <h3 className="col-span-10 font-display italic text-xl md:col-span-4 md:text-2xl">{t.title}</h3>
              <p className="col-span-12 text-sm leading-relaxed text-ink-2 md:col-span-6">{t.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="bg-ink py-20 text-paper md:py-24">
      <div className="shell grid gap-10 md:grid-cols-4 md:gap-0">
        {STATS.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08} className="border-t border-paper/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0 md:first:border-l-0 md:first:pl-0">
            <p className="font-display text-5xl tracking-tight text-brass-2 md:text-6xl">
              <Count to={s.value} suffix={s.suffix} />
            </p>
            <p className="micro mt-3 text-paper">{s.label}</p>
            <p className="mt-1 text-xs text-paper/50">{s.note}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Academics() {
  return (
    <section id="academics" className="shell py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="micro text-brass">03 / Academics</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            <MaskLines lines={[<>Sixteen faculties.</>, <>One <em className="text-maroon">pursuit</em>.</>]} />
          </h2>
        </div>
        <FadeUp delay={0.3} className="micro max-w-xs text-ink-2">
          Programmes from certificate to chair — hover a faculty to begin reading its index.
        </FadeUp>
      </div>
      <div className="mt-14">
        {FACULTIES.map((f, i) => (
          <FadeUp key={f.name} delay={i * 0.03}>
            <a href="#academics" className="group -mx-3 grid grid-cols-12 items-baseline gap-4 border-t border-line px-3 py-6 transition-colors duration-500 last:border-b hover:bg-paper-2/70">
              <span className="micro col-span-2 text-brass md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="col-span-10 font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 group-hover:italic md:col-span-7 md:text-4xl">
                {f.name}
              </span>
              <span className="micro col-span-6 text-ink-2 md:col-span-2">{f.programs} programmes</span>
              <span className="micro col-span-4 text-ink-2 md:col-span-1">{f.depts} depts</span>
              <span className="col-span-2 text-right text-maroon opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 md:col-span-1">→</span>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Campus() {
  return (
    <section id="campus" className="border-y border-line bg-paper-2/50 py-24 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="micro text-brass">04 / Campus</p>
          <blockquote className="mt-6 font-display text-3xl leading-[1.1] tracking-tight md:text-[2.75rem]">
            <MaskLines lines={[<>“The campus is</>, <>a city that</>, <><em className="text-maroon">thinks</em>.”</>]} />
          </blockquote>
          <FadeUp delay={0.4} className="micro mt-6 text-ink-2">— Marginalia, North Campus lawns</FadeUp>
          <Flourish className="mt-8 text-maroon" />
          <FadeUp delay={0.5} className="mt-8 max-w-md space-y-4 text-sm leading-relaxed text-ink-2">
            <p>Red sandstone colonnades, reading rooms with green lamps, and grounds where autumn arrives with examination dates.</p>
            <p>Every plate below is drawn, not photographed — line work standing in for a hundred acres.</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-7">
          <Figure index="Pl. I" label="The main building, elevated" meta="Line study · 2026">
            <DomeArt />
          </Figure>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Figure index="Pl. II" label="Reading room, late afternoon" meta="Line study">
              <LibraryArt />
            </Figure>
            <Figure index="Pl. III" label="The campus as contour" meta="Survey, redrawn" className="md:mt-14">
              <MapArt />
            </Figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Notices() {
  return (
    <section id="notices" className="shell grid gap-14 py-24 md:py-32 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="micro text-brass">05 / Notices & circulars</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
          <MaskLines lines={[<>Read it</>, <>before it's</>, <><em className="text-maroon">official</em>.</>]} />
        </h2>
        <div className="mt-12">
          {NOTICES.map((n, i) => (
            <FadeUp key={n.title} delay={i * 0.04}>
              <a href="#notices" className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-5 last:border-b">
                <span className="micro col-span-3 text-ink-2 md:col-span-2">{n.date}</span>
                <span className="col-span-9 text-sm leading-snug underline-offset-4 group-hover:underline group-hover:decoration-maroon group-hover:decoration-2 md:col-span-7 md:text-base">
                  {n.title}
                </span>
                <span className="micro col-span-8 text-ink-2 md:col-span-2">{n.tag}</span>
                <span className="col-span-4 text-right md:col-span-1">
                  {n.isNew ? (
                    <span className="micro bg-maroon px-2 py-1 text-paper">New</span>
                  ) : (
                    <span className="text-ink-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  )}
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3}>
          <a href="#notices" className="micro mt-8 inline-block border-b border-maroon pb-1 text-maroon">View all notices →</a>
        </FadeUp>
      </div>
      <div className="lg:col-span-5">
        <FadeUp delay={0.2} className="border border-line bg-paper p-6 md:p-8">
          <p className="micro text-brass">Next on campus</p>
          <div className="mt-6 divide-y divide-line">
            {EVENTS.map((e) => (
              <div key={e.title} className="group flex gap-5 py-5 first:pt-0 last:pb-0">
                <div className="w-14 shrink-0 text-center">
                  <p className="font-display text-4xl leading-none text-maroon">{e.day}</p>
                  <p className="micro mt-1 text-ink-2">{e.month}</p>
                </div>
                <div>
                  <p className="font-display text-lg leading-snug transition-all group-hover:italic">{e.title}</p>
                  <p className="micro mt-2 text-ink-2">{e.venue}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#notices" className="micro mt-6 inline-block border border-line px-4 py-2.5 transition-colors hover:border-ink hover:bg-paper-2">
            Full calendar →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-maroon py-24 text-paper md:py-36">
      <Crest className="animate-spin-slow pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-paper/10" />
      <div className="shell relative">
        <p className="micro text-brass-2">06 / Admissions</p>
        <h2 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.94] tracking-[-0.02em]">
          <MaskLines lines={[<>Admissions</>, <>2026–27 are</>, <><em className="text-brass-2">open</em>.</>]} />
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {ADMission_STEPS.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.1} className="border-t border-paper/30 pt-5">
              <p className="micro text-brass-2">{s.n}</p>
              <p className="mt-3 font-display text-2xl leading-tight">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.d}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.5} className="mt-14 flex flex-wrap gap-4">
          <a href="#top" className="micro bg-paper px-7 py-4 text-maroon transition-colors hover:bg-brass-2 hover:text-ink">Begin on CSAS portal →</a>
          <a href="#notices" className="micro border border-paper/40 px-7 py-4 transition-colors hover:border-paper">Download eligibility brochure</a>
        </FadeUp>
      </div>
    </section>
  );
}
