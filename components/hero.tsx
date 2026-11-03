import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="border-b border-hair">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 md:pb-28 md:pt-32">
        <h1 className="rise max-w-4xl font-display text-[2.75rem] font-black leading-[0.98] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {hero.headline}
        </h1>

        <p className="rise mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
          {hero.sub}
        </p>

        <div className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-bone px-7 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-bone underline decoration-hair underline-offset-[6px] transition-colors hover:decoration-bone"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
