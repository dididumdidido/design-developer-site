import { Menu } from "lucide-react";

import { BookButton, Wordmark } from "@/components/site/shared";
import { nav } from "@/lib/content";

/** Sticky header. Mobile menu uses <details>, so it works without JavaScript. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="Design Developer home" className="py-2">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-3 text-[14px] font-medium text-soft transition-colors hover:text-ink xl:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookButton size="sm" arrow={false} className="hidden sm:inline-flex" />
          <details className="group relative lg:hidden">
            <summary
              className="grid size-11 cursor-pointer list-none place-items-center rounded-full text-ink hover:bg-muted [&::-webkit-details-marker]:hidden"
              aria-label="Menu"
            >
              <Menu className="size-5" />
            </summary>
            <div className="absolute right-0 top-13 w-64 rounded-xl border border-border bg-white p-2 shadow-lg">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-body hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
              <BookButton size="default" arrow={false} className="mt-2 w-full" />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
