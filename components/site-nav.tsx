import Link from "next/link";
import { site } from "@/lib/content";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-ink/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-black tracking-wordmark text-bone"
          aria-label={`${site.fullName} home`}
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          <Link href="/#work" className="text-sm font-medium text-mist transition-colors hover:text-bone">
            Work
          </Link>
          <Link href="/#services" className="hidden text-sm font-medium text-mist transition-colors hover:text-bone sm:inline">
            Services
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-[40px] items-center rounded-full bg-bone px-4 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
