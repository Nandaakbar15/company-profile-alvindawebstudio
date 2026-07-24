import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import Services from "@/components/sections/services/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function ServicesPages() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}
