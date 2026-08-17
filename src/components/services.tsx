import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Services
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          Freelance IT services and custom software development
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bg-background p-6">
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
