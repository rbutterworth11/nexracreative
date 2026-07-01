import { clients } from "@/lib/content";

export default function Clients() {
  // Duplicate the list so the marquee loops seamlessly.
  const row = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-b border-hair py-14">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.24em] text-mist">
        Trusted by
      </p>
      <div className="relative flex w-max marquee">
        {row.map((c, i) => (
          <span
            key={i}
            className="mx-8 whitespace-nowrap font-display text-2xl font-extrabold uppercase tracking-tight text-bone/40 sm:mx-12 sm:text-3xl"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
