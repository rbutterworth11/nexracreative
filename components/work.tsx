import { projects, type Project } from "@/lib/content";

function Media({ project }: { project: Project }) {
  const alt = `${project.client} — ${project.title}`;
  if (project.video) {
    return (
      <video
        className="h-full w-full object-cover"
        src={project.video}
        poster={project.poster}
        aria-label={alt}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={project.image} alt={alt} loading="lazy" className="h-full w-full object-cover" />;
}

function Meta({ p }: { p: Project }) {
  return (
    <>
      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold text-bone sm:text-xl">{p.client}</h3>
        <p className="mt-0.5 text-sm text-mist">{p.title}</p>
      </div>
      <p className="shrink-0 text-right text-xs uppercase tracking-wide text-mist">
        {p.category}
        {p.year && <span className="block normal-case tracking-normal text-mist/70">{p.year}</span>}
      </p>
    </>
  );
}

export default function Work() {
  // Projects with a film/still show as cards; the rest as a clean list,
  // so the page never shows empty placeholders.
  const withMedia = projects.filter((p) => p.video || p.image);
  const textOnly = projects.filter((p) => !p.video && !p.image);

  return (
    <section id="work" className="scroll-mt-20 border-b border-hair">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-bone sm:text-5xl">
          Selected work
        </h2>

        {withMedia.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {withMedia.map((p, i) => (
              <article key={`${p.client}-${i}`} className="overflow-hidden rounded-xl border border-hair">
                <div className="aspect-video bg-black">
                  <Media project={p} />
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <Meta p={p} />
                </div>
              </article>
            ))}
          </div>
        )}

        {textOnly.length > 0 && (
          <ul className="mt-10 border-t border-hair">
            {textOnly.map((p, i) => (
              <li key={`${p.client}-${i}`} className="flex items-start justify-between gap-4 border-b border-hair py-5 sm:py-6">
                <Meta p={p} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
