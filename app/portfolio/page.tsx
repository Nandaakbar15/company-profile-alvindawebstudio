import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import Portfolio from "@/components/sections/portfolio/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}
