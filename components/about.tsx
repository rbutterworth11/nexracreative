import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-hair">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl">
            {about.heading}
          </h2>
        </div>
        <div>
          <div className="space-y-5">
            {about.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-mist sm:text-lg">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
            {about.capabilities.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2.5 text-sm text-bone"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bone/60" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
