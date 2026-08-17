import { projects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          Case studies backed by public code
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every project below links to its repository. Professional work,
          academic team projects and personal experiments are labelled
          separately.
        </p>
        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded border border-border p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="rounded border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {project.kind}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
                    Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                  <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
                    Stack
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Stack">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
                    What I built
                  </h4>
                  <ul className="mt-2 flex flex-col gap-2">
                    {project.built.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {project.credit && (
                <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {project.credit}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-accent underline-offset-4 hover:underline"
                >
                  View repository
                </a>
                {project.repoSecondary && (
                  <a
                    href={project.repoSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-accent underline-offset-4 hover:underline"
                  >
                    {project.repoSecondary.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
