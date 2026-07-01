import Link from "next/link";
import { site } from "@/lib/content";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-black tracking-wordmark text-bone"
          aria-label={`${site.fullName} home`}
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mist transition-colors hover:text-bone"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
