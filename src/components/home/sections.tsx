"use client";
import { Figure, LibraryArt, MapArt, DomeArt, Crest } from "@/components/art/svg";
import { Count, FadeUp, MaskLines } from "@/components/motion/kit";
import { ADMission_STEPS, EVENTS, FACULTIES, NOTICES, STATS, TIMELINE } from "@/data/site";

export function Heritage() {
  return (
    <section id="heritage" className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-36">
          <p className="micro text-brass">02 / Heritage</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            <MaskLines lines={[<>Built for</>, <>the <em className="text-maroon">long</em></>, <>now.</>]} />
          </h2>
          <FadeUp delay={0.4} className="mt-6 max-w-xs text-sm leading-relaxed text-ink-2">
            From a legislative act to a city of ninety-one colleges — the timeline of an institution
            that never stopped accreting.
          </FadeUp>
        </div>
      </div>
      <div className="lg:col-span-8">
        {TIMELINE.map((t, i) => (
          <FadeUp key={t.year} delay={i * 0.05}>
            <div className="group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-baseline last:border-b">
              <span className="font-display text-4xl md:text-5xl text-maroon md:col-span-2 transition-transform duration-500 group-hover:translate-x-2">{t.year}</span>
              <h3 className="font-display italic text-xl md:text-2xl md:col-span-4">{t.title}</h3>
              <p className="text-sm leading-relaxed text-ink-2 md:col-span-6">{t.body}</p>
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
      <div className="shell grid gap-px md:grid-cols-4">
        {STATS.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08} className="border-t border-paper/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0">
            <p className="font-display text-5xl md:text-6xl text-brass-2 tracking-tight">
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
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
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
            <a href="#academics" className="group -mx-3 grid grid-cols-12 items-baseline gap-4 border-t border-line px-3 py-6 transition-colors duration-500 hover:bg-paper-2/70 last:border-b">
              <span className="micro col-span-2 md:col-span-1 text-brass">{String(i + 1).padStart(2, "0")}</span>
              <span className="col-span-10 md:col-span-7 font-display text-2xl md:text-4xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 group-hover:italic">
                {f.name}
              </span>
              <span className="micro col-span-6 md:col-span-2 text-ink-2">{f.programs} programmes</span>
              <span className="micro col-span-4 md:col-span-1 text-ink-2">{f.depts} depts</span>
              <span className="col-span-2 md:col-span-1 text-right text-maroon opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">→</span>
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
          <blockquote className="mt-6 font-display text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
            <MaskLines lines={[<>“The campus is</>, <>a city that</>, <><em className="text-maroon">thinks</em>.”</>]} />
          </blockquote>
          <FadeUp delay={0.4} className="micro mt-6 text-ink-2">— Marginalia, North Campus lawns</FadeUp>
          <FadeUp delay={0.5} className="mt-10 space-y-4 text-sm leading-relaxed text-ink-2 max-w-md">
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
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
          <MaskLines lines={[<>Read it</>, <>before it's</>, <><em className="text-maroon">official</em>.</>]} />
        </h2>
        <div className="mt-12">
          {NOTICES.map((n, i) => (
            <FadeUp key={n.title} delay={i * 0.04}>
              <a href="#notices" className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-5 last:border-b">
                <span className="micro col-span-3 md:col-span-2 text-ink-2">{n.date}</span>
                <span className="col-span-9 md:col-span-7 text-sm md:text-base leading-snug underline-offset-4 group-hover:underline group-hover:decoration-maroon group-hover:decoration-2">
                  {n.title}
                </span>
                <span className="micro col-span-8 md:col-span-2 text-ink-2">{n.tag}</span>
                <span className="col-span-4 md:col-span-1 text-right">
                  {n.isNew ? <span className="micro bg-maroon px-2 py-1 text-paper">New</span> : <span className="text-ink-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>}
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3}><a href="#notices" className="micro mt-8 inline-block border-b border-maroon pb-1 text-maroon">View all notices →</a></FadeUp>
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
                  <p className="font-display text-lg leading-snug group-hover:italic transition-all">{e.title}</p>
                  <p className="micro mt-2 text-ink-2">{e.venue}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#notices" className="micro mt-6 inline-block border border-line px-4 py-2.5 transition-colors hover:border-ink hover:bg-paper-2">Full calendar →</a>
        </FadeUp>
      </div>
    </section>
  );
}

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-maroon py-24 text-paper md:py-36">
      <Crest className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-paper/10 animate-spin-slow" />
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
              <p className="mt-2 text-sm text-paper/70 leading-relaxed">{s.d}</p>
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
