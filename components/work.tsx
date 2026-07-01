import { projects, type Project } from "@/lib/content";

function Media({ project }: { project: Project }) {
  if (project.video) {
    return (
      <video
        className="h-full w-full object-cover"
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
    );
  }
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={project.image}
        alt={`${project.client} — ${project.title}`}
        className="h-full w-full object-cover"
      />
    );
  }
  // Placeholder until the film / still is added
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/[0.05] to-transparent">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-hair">
        <svg className="h-5 w-5 text-bone" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-mist">
        Film coming soon
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-hair">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-bone sm:text-5xl">
            Selected Work
          </h2>
          <span className="hidden text-sm text-mist sm:block">
            {projects.length.toString().padStart(2, "0")} projects
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={`${p.client}-${i}`}
              className="group overflow-hidden rounded-xl border border-hair bg-white/[0.02] transition-colors hover:border-white/25"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Media project={p} />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-bone">
                    {p.client}
                  </h3>
                  <p className="mt-0.5 text-sm text-mist">{p.title}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs uppercase tracking-wide text-mist">
                    {p.category}
                  </p>
                  {p.year && (
                    <p className="mt-0.5 text-xs text-mist/70">{p.year}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
