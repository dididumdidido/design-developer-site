import * as React from "react";

import { cn } from "@/lib/utils";

/** shadcn Card: flat white surface with a 1px border. */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("surface text-card-foreground", className)} {...props} />
  )
);
Card.displayName = "Card";

export { Card };
