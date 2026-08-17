import { education, experience, person, skills } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          About
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          Engineer first, developer always
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          I&apos;m {person.shortName}, an electronic engineer turned software
          developer based on the Gold Coast, Australia. My background spans
          hardware prototyping — from automated traffic-curb painting to
          solar-powered street lighting — through to full-stack product
          delivery. I work in {person.languages.join(" and ")}.
        </p>

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              Experience
            </h3>
            <ul className="mt-4 flex flex-col gap-6">
              {experience.map((item) => (
                <li key={item.role} className="border-l-2 border-border pl-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {item.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              Education
            </h3>
            <ul className="mt-4 flex flex-col gap-6">
              {education.map((item) => (
                <li key={item.name} className="border-l-2 border-border pl-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Technical capabilities
          </h3>
          <div className="mt-4 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.group} className="bg-background p-5">
                <h4 className="text-sm font-semibold">{group.group}</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
