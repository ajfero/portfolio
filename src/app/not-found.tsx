import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        404
      </p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-2 rounded border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent"
      >
        Back home
      </Link>
    </main>
  );
}
