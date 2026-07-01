import { contact, site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-mist sm:text-lg">
          {contact.sub}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-bone px-8 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            {site.email}
          </a>
          <div className="flex items-center gap-6 text-sm text-mist">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Instagram
            </a>
            <span className="text-hair">/</span>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
