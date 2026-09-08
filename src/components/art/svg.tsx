import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4 } as const;

export function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn("text-current", className)} aria-hidden="true">
      <defs>
        <path id="seal-top" d="M100,100 m-84,0 a84,84 0 1,1 168,0" />
        <path id="seal-bot" d="M100,100 m-84,0 a84,84 0 1,0 168,0" />
      </defs>
      <circle cx="100" cy="100" r="96" {...S} strokeWidth={1.6} />
      <circle cx="100" cy="100" r="90" {...S} strokeWidth={0.6} strokeDasharray="1 4" />
      <circle cx="100" cy="100" r="68" {...S} strokeWidth={0.8} />
      <text fontSize="8" letterSpacing="2.4" fill="currentColor" className="font-mono">
        <textPath href="#seal-top" startOffset="4%">UNIVERSITY OF DELHI · UNOFFICIAL CONCEPT ·</textPath>
      </text>
      <text fontSize="8" letterSpacing="2.4" fill="currentColor" className="font-mono">
        <textPath href="#seal-bot" startOffset="22%">EST. 1922 · MMXXVI ·</textPath>
      </text>
      {[-40, -20, 0, 20, 40].map((a) => (
        <line key={a} x1="100" y1="50" x2={100 + 13 * Math.sin((a * Math.PI) / 180)} y2={50 - 13 * Math.cos((a * Math.PI) / 180)} {...S} strokeWidth={0.8} />
      ))}
      <path d="M84 74 a16 16 0 0 1 32 0" {...S} strokeWidth={1.2} />
      <line x1="80" y1="74" x2="120" y2="74" {...S} strokeWidth={1} />
      <path d="M70 92 q15 -10 30 0 q15 -10 30 0 v26 q-15 -9 -30 0 q-15 -9 -30 0 z" {...S} strokeWidth={1.2} />
      <line x1="100" y1="92" x2="100" y2="118" {...S} strokeWidth={0.7} />
      {[98, 104, 110].map((y) => (
        <line key={y} x1="76" y1={y + 2} x2="94" y2={y - 1} {...S} strokeWidth={0.5} />
      ))}
      {[98, 104, 110].map((y) => (
        <line key={"r" + y} x1="106" y1={y - 1} x2="124" y2={y + 2} {...S} strokeWidth={0.5} />
      ))}
      <path d="M62 128 q38 30 76 0" {...S} strokeWidth={0.9} />
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 66 + i * 6.8;
        const y = 134 - Math.abs(i - 5) * 1.8;
        return <line key={i} x1={x} y1={y} x2={x + (i < 5 ? -3 : 3)} y2={y - 6} {...S} strokeWidth={0.8} />;
      })}
    </svg>
  );
}

export function DomeArt({ className }: { className?: string }) {
  const arch = (x: number, w: number, top: number, base: number) => `M${x} ${base} V${top} A${w / 2} ${w / 2} 0 0 1 ${x + w} ${top} V${base}`;
  return (
    <svg viewBox="0 0 960 440" className={cn("w-full text-current", className)} aria-hidden="true">
      <circle cx="790" cy="86" r="26" {...S} strokeWidth={0.8} opacity={0.5} />
      {[[180, 84], [214, 64], [700, 72]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} q5 -5 10 0 q5 -5 10 0`} {...S} strokeWidth={0.8} opacity={0.7} />
      ))}
      <line x1="0" y1="400" x2="960" y2="400" {...S} />
      <line x1="60" y1="416" x2="900" y2="416" {...S} strokeWidth={0.6} opacity={0.6} />
      <line x1="120" y1="384" x2="840" y2="384" {...S} strokeWidth={1.2} />
      <path d="M402 152 C402 92 558 92 558 152" {...S} strokeWidth={1.6} />
      <path d="M430 150 C432 108 528 108 530 150" {...S} strokeWidth={0.7} opacity={0.7} />
      <line x1="480" y1="98" x2="480" y2="76" {...S} strokeWidth={1.1} />
      <circle cx="480" cy="72" r="3.2" {...S} strokeWidth={1} />
      <path d="M480 70 l16 4 -16 4" {...S} strokeWidth={0.9} />
      <line x1="402" y1="152" x2="402" y2="192" {...S} strokeWidth={1.1} />
      <line x1="558" y1="152" x2="558" y2="192" {...S} strokeWidth={1.1} />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1={414 + i * 22} y1="158" x2={414 + i * 22} y2="188" {...S} strokeWidth={0.6} />
      ))}
      <line x1="368" y1="192" x2="592" y2="192" {...S} strokeWidth={1.2} />
      <line x1="368" y1="200" x2="592" y2="200" {...S} strokeWidth={0.7} />
      {[330, 594].map((x) => (
        <g key={x}>
          <path d={`M${x} 176 a17 17 0 0 1 34 0`} {...S} strokeWidth={1} />
          <line x1={x + 17} y1="159" x2={x + 17} y2="152" {...S} strokeWidth={0.8} />
          <line x1={x} y1="176" x2={x} y2="196" {...S} strokeWidth={0.9} />
          <line x1={x + 34} y1="176" x2={x + 34} y2="196" {...S} strokeWidth={0.9} />
          <line x1={x - 4} y1="196" x2={x + 38} y2="196" {...S} strokeWidth={0.8} />
        </g>
      ))}
      {[398, 456, 514].map((x) => (
        <path key={x} d={arch(x, 46, 252, 384)} {...S} strokeWidth={1.3} />
      ))}
      <line x1="380" y1="236" x2="580" y2="236" {...S} strokeWidth={0.7} />
      <line x1="140" y1="236" x2="368" y2="236" {...S} strokeWidth={1.1} />
      <line x1="592" y1="236" x2="820" y2="236" {...S} strokeWidth={1.1} />
      <line x1="140" y1="244" x2="368" y2="244" {...S} strokeWidth={0.6} />
      <line x1="592" y1="244" x2="820" y2="244" {...S} strokeWidth={0.6} />
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          <path d={arch(156 + i * 44, 30, 284, 384)} {...S} strokeWidth={0.9} />
          <path d={arch(608 + i * 44, 30, 284, 384)} {...S} strokeWidth={0.9} />
        </g>
      ))}
      {Array.from({ length: 19 }).map((_, i) => (
        <line key={i} x1={146 + i * 12} y1="236" x2={146 + i * 12} y2="244" {...S} strokeWidth={0.5} />
      ))}
      {Array.from({ length: 19 }).map((_, i) => (
        <line key={"r" + i} x1={598 + i * 12} y1="236" x2={598 + i * 12} y2="244" {...S} strokeWidth={0.5} />
      ))}
      {[120, 820].map((x) => (
        <g key={x}>
          <line x1={x} y1="384" x2={x} y2="212" {...S} strokeWidth={1.1} />
          <line x1={x + 20} y1="384" x2={x + 20} y2="212" {...S} strokeWidth={1.1} />
          <path d={`M${x - 2} 212 a12 12 0 0 1 24 0`} {...S} strokeWidth={1} />
          <line x1={x - 4} y1="212" x2={x + 24} y2="212" {...S} strokeWidth={0.8} />
        </g>
      ))}
      <line x1="356" y1="400" x2="604" y2="400" {...S} strokeWidth={0.8} />
      <line x1="336" y1="408" x2="624" y2="408" {...S} strokeWidth={0.7} />
      <line x1="316" y1="416" x2="644" y2="416" {...S} strokeWidth={0.6} />
      {[92, 868].map((x) => (
        <g key={x}>
          <path d={`M${x} 384 C${x - 9} 344 ${x - 9} 320 ${x} 296 C${x + 9} 320 ${x + 9} 344 ${x} 384`} {...S} strokeWidth={0.9} />
          <line x1={x} y1="384" x2={x} y2="392" {...S} strokeWidth={0.8} />
        </g>
      ))}
    </svg>
  );
}

export function LibraryArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={cn("w-full text-current", className)} aria-hidden="true">
      <line x1="20" y1="368" x2="620" y2="368" {...S} />
      {[80, 270, 460].map((x) => (
        <g key={x}>
          <path d={`M${x} 244 V128 A50 50 0 0 1 ${x + 100} 128 V244`} {...S} strokeWidth={1.3} />
          <line x1={x + 50} y1="78" x2={x + 50} y2="244" {...S} strokeWidth={0.6} />
          <line x1={x} y1="160" x2={x + 100} y2="160" {...S} strokeWidth={0.6} />
          <line x1={x} y1="202" x2={x + 100} y2="202" {...S} strokeWidth={0.6} />
          <line x1={x - 8} y1="244" x2={x + 108} y2="244" {...S} strokeWidth={1} />
          <path d={`M${x + 14} 248 L${x + 48} 368 L${x + 128} 368 L${x + 94} 248 Z`} fill="currentColor" stroke="none" opacity={0.06} />
        </g>
      ))}
      <line x1="70" y1="300" x2="570" y2="300" {...S} strokeWidth={1.4} />
      <line x1="70" y1="310" x2="570" y2="310" {...S} strokeWidth={0.7} />
      <line x1="86" y1="310" x2="86" y2="368" {...S} strokeWidth={1} />
      <line x1="554" y1="310" x2="554" y2="368" {...S} strokeWidth={1} />
      {[170, 320, 470].map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 292 q22 -16 44 0 z`} {...S} strokeWidth={1.1} fill="currentColor" fillOpacity={0.12} />
          <line x1={x} y1="292" x2={x} y2="300" {...S} strokeWidth={1} />
        </g>
      ))}
      <rect x="108" y="292" width="34" height="8" {...S} strokeWidth={0.9} />
      <rect x="112" y="284" width="28" height="8" {...S} strokeWidth={0.9} />
      <rect x="110" y="276" width="31" height="8" {...S} strokeWidth={0.9} />
      <path d="M470 292 q12 -7 24 0 q12 -7 24 0 v6 q-12 -6 -24 0 q-12 -6 -24 0 z" {...S} strokeWidth={0.9} />
    </svg>
  );
}

export function MapArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={cn("w-full text-current", className)} aria-hidden="true">
      <path d="M96 214 C112 122 252 88 336 128 C428 172 486 148 512 210 C540 278 428 336 306 326 C184 316 80 306 96 214 Z" {...S} strokeWidth={1} />
      <path d="M146 218 C160 156 262 128 324 158 C396 192 440 178 460 220 C480 266 396 304 306 296 C216 288 132 280 146 218 Z" {...S} strokeWidth={0.7} opacity={0.75} />
      <path d="M196 222 C208 182 272 166 318 186 C368 208 400 200 412 226 C424 258 366 280 306 272 C246 264 184 260 196 222 Z" {...S} strokeWidth={0.55} opacity={0.55} />
      <path d="M52 356 C150 306 208 254 306 232 C404 210 476 158 552 84" {...S} strokeWidth={1.4} strokeDasharray="1 7" strokeLinecap="round" />
      {([[306, 232, "MAIN DOME"], [186, 290, "LAWNS"], [438, 178, "SCIENCES"]] as const).map(([x, y, l]) => (
        <g key={l}>
          <circle cx={x} cy={y} r="4.5" {...S} strokeWidth={1.1} />
          <line x1={x - 9} y1={y} x2={x + 9} y2={y} {...S} strokeWidth={0.6} />
          <line x1={x} y1={y - 9} x2={x} y2={y + 9} {...S} strokeWidth={0.6} />
          <text x={x + 12} y={y - 8} fontSize="8.5" letterSpacing="1.6" fill="currentColor" className="font-mono">{l}</text>
        </g>
      ))}
      <path d="M20 60 C80 90 60 140 110 170" {...S} strokeWidth={0.8} opacity={0.6} />
      <path d="M32 52 C92 82 72 132 122 162" {...S} strokeWidth={0.8} opacity={0.6} />
      <text x="24" y="44" fontSize="8.5" letterSpacing="1.6" fill="currentColor" className="font-mono" opacity={0.7}>YAMUNA →</text>
      <circle cx="560" cy="330" r="24" {...S} strokeWidth={0.9} />
      <line x1="560" y1="306" x2="560" y2="354" {...S} strokeWidth={0.8} />
      <line x1="536" y1="330" x2="584" y2="330" {...S} strokeWidth={0.8} />
      <path d="M560 306 l7 16 h-14 z" fill="currentColor" stroke="none" />
      <text x="554" y="372" fontSize="9" fill="currentColor" className="font-mono">N</text>
      <line x1="60" y1="386" x2="150" y2="386" {...S} strokeWidth={1} />
      <line x1="60" y1="381" x2="60" y2="391" {...S} strokeWidth={0.9} />
      <line x1="105" y1="383" x2="105" y2="389" {...S} strokeWidth={0.7} />
      <line x1="150" y1="381" x2="150" y2="391" {...S} strokeWidth={0.9} />
      <text x="66" y="376" fontSize="8.5" letterSpacing="1.6" fill="currentColor" className="font-mono">200 M</text>
    </svg>
  );
}

export function Flourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 12" className={cn("h-3 w-40 text-current", className)} aria-hidden="true">
      <line x1="0" y1="6" x2="62" y2="6" {...S} strokeWidth={0.9} />
      <path d="M80 1 l5 5 -5 5 -5 -5 z" {...S} strokeWidth={0.9} />
      <line x1="98" y1="6" x2="160" y2="6" {...S} strokeWidth={0.9} />
      <circle cx="70" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="90" cy="6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
