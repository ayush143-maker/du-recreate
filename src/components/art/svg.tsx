import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4 } as const;

/** Rotating institutional seal — textPath ke saath */
export function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn("text-current", className)} aria-hidden="true">
      <defs>
        <path id="seal" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
      </defs>
      <circle cx="100" cy="100" r="96" {...S} strokeWidth={1.6} />
      <circle cx="100" cy="100" r="72" {...S} strokeWidth={0.8} />
      <text className="font-mono" fontSize="8.2" letterSpacing="2.6" fill="currentColor">
        <textPath href="#seal">UNIVERSITY OF DELHI · UNOFFICIAL DESIGN CONCEPT · EST. 1922 ·</textPath>
      </text>
      {/* dome */}
      <path d="M86 78 a14 14 0 0 1 28 0" {...S} />
      <line x1="100" y1="64" x2="100" y2="56" {...S} />
      <circle cx="100" cy="53" r="2.4" {...S} />
      <line x1="82" y1="78" x2="118" y2="78" {...S} />
      {/* open book */}
      <path d="M72 96 q14 -9 28 0 q14 -9 28 0 v26 q-14 -9 -28 0 q-14 -9 -28 0 z" {...S} />
      <line x1="100" y1="96" x2="100" y2="122" {...S} strokeWidth={0.8} />
      {/* laurel */}
      <path d="M64 132 q36 26 72 0" {...S} strokeWidth={0.9} />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 68 + i * 8;
        return <line key={i} x1={x} y1={138 - Math.abs(i - 4) * 1.6} x2={x + 3} y2={131 - Math.abs(i - 4) * 1.6} {...S} strokeWidth={0.9} />;
      })}
    </svg>
  );
}

/** North-campus elevation: dome, chhatris, arched colonnade */
export function DomeArt({ className }: { className?: string }) {
  const arch = (x: number, w: number, top: number, base: number) =>
    `M${x} ${base} V${top} A${w / 2} ${w / 2} 0 0 1 ${x + w} ${top} V${base}`;
  return (
    <svg viewBox="0 0 900 420" className={cn("w-full text-current", className)} aria-hidden="true">
      <line x1="0" y1="382" x2="900" y2="382" {...S} />
      <line x1="40" y1="396" x2="860" y2="396" {...S} strokeWidth={0.8} />
      {/* central dome + drum */}
      <path d="M382 152 a68 68 0 0 1 136 0" {...S} strokeWidth={1.6} />
      <line x1="450" y1="84" x2="450" y2="64" {...S} />
      <circle cx="450" cy="60" r="3.4" {...S} />
      <line x1="382" y1="152" x2="382" y2="196" {...S} />
      <line x1="518" y1="152" x2="518" y2="196" {...S} />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={394 + i * 22} y1="158" x2={394 + i * 22} y2="192" {...S} strokeWidth={0.8} />
      ))}
      {/* chhatris */}
      {[332, 532].map((x) => (
        <g key={x}>
          <path d={`M${x} 176 a18 18 0 0 1 36 0`} {...S} />
          <line x1={x} y1="176" x2={x} y2="196" {...S} strokeWidth={0.9} />
          <line x1={x + 36} y1="176" x2={x + 36} y2="196" {...S} strokeWidth={0.9} />
        </g>
      ))}
      {/* cornice */}
      <line x1="250" y1="196" x2="650" y2="196" {...S} />
      <line x1="250" y1="210" x2="650" y2="210" {...S} strokeWidth={0.8} />
      {/* central arches */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={arch(272 + i * 52, 36, 268, 382)} {...S} />
      ))}
      {/* wings */}
      <line x1="60" y1="238" x2="250" y2="238" {...S} />
      <line x1="650" y1="238" x2="840" y2="238" {...S} />
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={i}>
          <path d={arch(84 + i * 44, 28, 286, 382)} {...S} strokeWidth={1} />
          <path d={arch(676 + i * 44, 28, 286, 382)} {...S} strokeWidth={1} />
        </g>
      ))}
      {/* steps */}
      <line x1="360" y1="396" x2="540" y2="396" {...S} strokeWidth={0.8} />
      <line x1="340" y1="408" x2="560" y2="408" {...S} strokeWidth={0.8} />
    </svg>
  );
}

/** Reading room: arched windows, light shafts, banker lamps */
export function LibraryArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={cn("w-full text-current", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const x = 60 + i * 100;
        return (
          <g key={i}>
            <path d={`M${x} 190 V92 A28 28 0 0 1 ${x + 56} 92 V190`} {...S} />
            <line x1={x} y1="140" x2={x + 56} y2="140" {...S} strokeWidth={0.7} />
            <line x1={x + 28} y1="92" x2={x + 28} y2="190" {...S} strokeWidth={0.7} />
            <line x1={x + 10} y1="196" x2={x - 14} y2="330" {...S} strokeWidth={0.6} opacity={0.45} />
            <line x1={x + 46} y1="196" x2={x + 70} y2="330" {...S} strokeWidth={0.6} opacity={0.45} />
          </g>
        );
      })}
      <line x1="20" y1="330" x2="580" y2="330" {...S} />
      <rect x="90" y="300" width="420" height="10" {...S} strokeWidth={1} />
      {[150, 290, 430].map((x) => (
        <g key={x}>
          <path d={`M${x} 292 a16 8 0 0 1 32 0`} {...S} strokeWidth={1} />
          <line x1={x + 16} y1="292" x2={x + 16} y2="300" {...S} strokeWidth={1} />
        </g>
      ))}
      <line x1="20" y1="368" x2="580" y2="368" {...S} strokeWidth={0.8} />
    </svg>
  );
}

/** Campus map: contours, dotted walks, markers, compass */
export function MapArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={cn("w-full text-current", className)} aria-hidden="true">
      <path d="M90 210 C110 120 250 90 330 130 C420 175 470 150 500 210 C530 275 420 330 300 320 C180 310 70 300 90 210 Z" {...S} strokeWidth={0.9} />
      <path d="M140 215 C160 155 260 130 320 160 C390 195 430 180 450 220 C470 265 390 300 300 292 C210 284 122 275 140 215 Z" {...S} strokeWidth={0.7} opacity={0.7} />
      <path d="M190 220 C205 180 270 165 315 185 C365 208 395 200 405 225 C415 255 360 275 300 268 C240 261 178 258 190 220 Z" {...S} strokeWidth={0.6} opacity={0.5} />
      <path d="M60 350 C160 300 200 250 300 230 C400 210 470 160 540 90" {...S} strokeDasharray="1 7" strokeLinecap="round" strokeWidth={1.6} />
      {[[300, 230], [180, 288], [430, 176]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" {...S} />
          <line x1={x - 9} y1={y} x2={x + 9} y2={y} {...S} strokeWidth={0.7} />
          <line x1={x} y1={y - 9} x2={x} y2={y + 9} {...S} strokeWidth={0.7} />
        </g>
      ))}
      <circle cx="530" cy="330" r="22" {...S} strokeWidth={0.9} />
      <line x1="530" y1="312" x2="530" y2="348" {...S} strokeWidth={0.9} />
      <path d="M530 312 l6 12 h-12 z" fill="currentColor" stroke="none" />
      <text x="524" y="372" className="font-mono" fontSize="10" fill="currentColor">N</text>
      <line x1="60" y1="372" x2="140" y2="372" {...S} />
      <line x1="60" y1="368" x2="60" y2="376" {...S} strokeWidth={0.9} />
      <line x1="140" y1="368" x2="140" y2="376" {...S} strokeWidth={0.9} />
      <text x="66" y="362" className="font-mono" fontSize="9" fill="currentColor">200 m</text>
    </svg>
  );
}

/** Framed plate with corner ticks + caption — image placeholder */
export function Figure({ index, label, meta, children, className }: { index: string; label: string; meta?: string; children: ReactNode; className?: string }) {
  return (
    <figure className={cn("group relative border border-line bg-paper-2/60", className)}>
      {["-top-px -left-px border-t border-l", "-top-px -right-px border-t border-r", "-bottom-px -left-px border-b border-l", "-bottom-px -right-px border-b border-r"].map((p) => (
        <span key={p} className={cn("absolute h-3 w-3 border-ink", p)} />
      ))}
      <div className="overflow-hidden p-6 md:p-10 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]">{children}</div>
      <figcaption className="flex items-baseline justify-between gap-4 border-t border-line px-4 py-3">
        <span className="micro text-brass">{index}</span>
        <span className="font-display italic text-sm md:text-base">{label}</span>
        <span className="micro text-ink-2 text-right">{meta}</span>
      </figcaption>
    </figure>
  );
}
