import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { BookButton, Container } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
          <p className="text-[14px] font-semibold text-primary">404</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">That page doesn&rsquo;t exist.</h1>
          <p className="mt-4 text-lg text-soft">The link may be old, or the address has a typo.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="outline">
              <a href="/">Back to home</a>
            </Button>
            <BookButton />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
