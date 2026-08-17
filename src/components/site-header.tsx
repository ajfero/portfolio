import Link from "next/link";
import { person } from "@/lib/content";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-foreground"
          aria-label={`${person.brand} — back to top`}
        >
          AJ<span className="text-accent">FERO</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 md:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
