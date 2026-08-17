import { person, social } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          Have a project in mind?
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          I&apos;m available for freelance projects, consulting engagements and
          ongoing support work. Email me with a short description of what you
          need and I&apos;ll reply with next steps.
        </p>
        <div className="mt-8">
          <a
            href={`mailto:${person.email}`}
            className="inline-block rounded bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {person.email}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-5" aria-label="Profiles">
          {social
            .filter((s) => s.name !== "Email")
            .map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {s.name}
                </a>
              </li>
            ))}
        </ul>
        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Privacy: contacting me by email shares only the information you choose
          to send. This site does not run analytics, tracking scripts or
          third-party cookies, and no visitor data is collected or stored.
        </p>
      </div>
    </section>
  );
}
