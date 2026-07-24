import Contacts from "@/components/contacts/default";
import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function ContactPages() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Contacts />
      <Footer />
    </main>
  );
}
