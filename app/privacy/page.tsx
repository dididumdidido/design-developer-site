import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/site/shared";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy | Design Developer",
  description: "How Design Developer handles the information you share with us.",
  alternates: { canonical: "/privacy" },
};

/* Plain-language starting point. Review it (ideally with your attorney) so it matches how you actually work. */
export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <Container className="max-w-3xl py-16 lg:py-24">
          <h1 className="display text-4xl sm:text-5xl">Privacy</h1>
          <p className="mt-3 text-[15px] text-soft">Last updated: November 2026</p>

          <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-body [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium">
            <section>
              <h2>What we collect</h2>
              <p>
                When you book a call or email us, we receive the details you choose to share, such as your name, email,
                phone number, business name and your answers to booking questions. Bookings are handled by Calendly,
                which has its own privacy policy.
              </p>
            </section>
            <section>
              <h2>How we use it</h2>
              <p>
                Only to respond to you, prepare for and hold your strategy call, and deliver the work you hire us for. We
                don&rsquo;t sell your information.
              </p>
            </section>
            <section>
              <h2>Client tools and data</h2>
              <p>
                When we build a digital employee, it only connects to the accounts you approve, such as your inbox,
                calendar or CRM. You keep ownership of those accounts and can remove access at any time.
              </p>
            </section>
            <section>
              <h2>Your choices</h2>
              <p>
                You can ask us to see, correct or delete the information we hold about you by emailing{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
