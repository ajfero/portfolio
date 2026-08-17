import Image from "next/image";
import Link from "next/link";
import { person, social } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-20 pt-16 md:px-6 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {person.location}
      </p>
      <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {person.shortName}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted-foreground md:text-base">
            {person.role}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            I design and build custom web applications, REST APIs and
            database-backed systems for businesses that need reliable software.
            Trained as an electronic engineer, I bring hardware-grade rigour to
            every layer of the stack — available for freelance projects and
            consulting in English or Spanish.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="rounded border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent"
            >
              See my work
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-5" aria-label="Profiles">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <Image
            src={person.avatar || "/placeholder.svg"}
            alt={`Portrait of ${person.shortName}`}
            width={200}
            height={200}
            priority
            className="rounded border border-border"
          />
        </div>
      </div>
    </section>
  );
}
