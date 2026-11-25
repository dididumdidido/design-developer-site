import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bookingHref, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function SectionTitle({
  title,
  subtitle,
  center = false,
  className,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <h2 className="display text-3xl leading-tight sm:text-[2.6rem]">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-soft">{subtitle}</p>}
    </div>
  );
}

/** Primary CTA. Opens the calendar section, or a pre-filled email until a calendar is connected. */
export function BookButton({
  size = "lg",
  className,
  arrow = true,
}: {
  size?: "sm" | "default" | "lg";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Button asChild size={size} className={className}>
      <a href={bookingHref}>
        {site.ctaLabel}
        {arrow && <ArrowRight aria-hidden />}
      </a>
    </Button>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 whitespace-nowrap", className)}>
      <Image src="/brand/dd-mark-black.png" alt="" width={600} height={767} className="h-8 w-auto" priority />
      <span className="font-display text-[1.2rem] font-semibold tracking-[-0.02em] text-ink">Design Developer</span>
    </span>
  );
}
