import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
