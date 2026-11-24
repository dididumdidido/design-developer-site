import { ChatDemo } from "@/components/site/chat-demo";
import { CtaBand } from "@/components/site/cta-band";
import { Explore } from "@/components/site/explore";
import { Hero } from "@/components/site/hero";
import { PageShell } from "@/components/site/page-shell";
import { Problem } from "@/components/site/problem";
import { Results } from "@/components/site/results";
import { StructuredData } from "@/components/site/structured-data";

export default function Home() {
  return (
    <PageShell>
      <StructuredData />
      <Hero />
      <Problem />
      <ChatDemo />
      <Explore />
      <Results variant="testimonials" />
      <CtaBand />
    </PageShell>
  );
}
