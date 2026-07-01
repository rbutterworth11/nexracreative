import { site } from "@/lib/content";

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="font-display text-lg font-black tracking-wordmark text-bone">
          {site.name}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mist">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-bone"
          >
            {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-bone"
          >
            {site.instagramHandle}
          </a>
        </div>

        <p className="text-xs text-mist/70">
          © {year} {site.fullName}
        </p>
      </div>
    </footer>
  );
}
