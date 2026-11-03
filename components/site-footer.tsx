import { site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.fullName}</p>
        <div className="flex gap-6">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
            Instagram
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
