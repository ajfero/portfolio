import { person } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {person.brand} — {person.shortName}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {person.location}
        </p>
      </div>
    </footer>
  );
}
