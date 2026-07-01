import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hair">
      {/* Subtle radial vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(245,244,242,0.06) 0%, rgba(10,10,11,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 md:pb-36 md:pt-36">
        <p className="rise text-xs font-medium uppercase tracking-[0.22em] text-mist">
          {hero.eyebrow}
        </p>

        <h1 className="rise mt-5 max-w-4xl font-display text-[2.75rem] font-black leading-[0.98] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {hero.headline}
        </h1>

        <p className="rise mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
          {hero.sub}
        </p>

        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-bone px-7 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-hair px-7 text-sm font-semibold text-bone transition-colors hover:bg-white/5"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
