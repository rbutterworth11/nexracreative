import { contact, site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-mist sm:text-lg">{contact.sub}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex min-h-[54px] max-w-full items-center justify-center break-all rounded-full bg-bone px-8 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
