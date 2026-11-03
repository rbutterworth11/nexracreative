import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-hair">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:gap-16">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl">
          {about.heading}
        </h2>
        <div>
          {about.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-mist sm:text-lg">
              {p}
            </p>
          ))}
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-bone">
            {about.capabilities.map((c) => (
              <li key={c} className="border-l border-hair pl-3">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
