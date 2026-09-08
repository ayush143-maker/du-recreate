import { Crest } from "@/components/art/svg";
import { Marquee } from "@/components/motion/kit";
import { NAV } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Marquee className="border-b border-paper/15 py-6" reverse>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="text-stroke px-6 font-display text-6xl md:text-8xl tracking-tight whitespace-nowrap">
            University of Delhi ✦
          </span>
        ))}
      </Marquee>
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Crest className="h-20 w-20 text-brass-2" />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug">
            A century of minds, <em className="text-brass-2">retold</em> in paper, ink and brass.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="micro text-brass-2 mb-4">Index</p>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="micro text-paper/70 hover:text-paper transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="micro text-brass-2 mb-4">Disclaimer</p>
          <p className="text-sm leading-relaxed text-paper/70">
            This is an <strong className="text-paper">unofficial student concept redesign</strong> created purely as a
            portfolio piece. It is not affiliated with, endorsed by, or connected to the University of Delhi. All names,
            dates and figures shown are placeholder data for demonstration. For official information visit the
            university's genuine website. This site is deliberately blocked from search engines.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="shell micro flex flex-col gap-2 py-5 text-paper/60 md:flex-row md:items-center md:justify-between">
          <span>© 2026 · Concept by a student · Not the University of Delhi</span>
          <span>Built with Next.js · Tailwind v4 · Framer Motion · Zero stock images</span>
        </div>
      </div>
    </footer>
  );
}
