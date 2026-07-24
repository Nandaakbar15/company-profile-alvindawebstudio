/* eslint-disable simple-import-sort/imports */
import type { Portfolio } from "@/types/portfolio";
import Image from "next/image";

import { Section } from "../../ui/section";

export const portfolioData: Portfolio[] = [
  {
    title: "Simpeg App",
    subtitle: "Aplikasi mengelola asn berbasis website",
    image: "/images/portfolio/simpeg-app.png",
  },
  {
    title: "Company Profile CV. Gilang Kencana Mulya",
    subtitle: "Website profil perusahaan CV. Gilang Kencana Mulya",
    image: "/images/portfolio/cv-gilang-kencana-mulya.png",
  },
  {
    title: "Aplikasi PWA Julenak",
    subtitle: "Aplikasi mini e-commerce jual / lelang ternak berbasis website",
    image: "/images/portfolio/julenak-app.png",
  },
  {
    title: "Simkos App",
    subtitle: "Aplikasi mengelola kos-kosan berbasis website",
    image: "/images/portfolio/simkos-app.png",
  },
  {
    title: "Kopi Senjaku",
    subtitle: "Website kafe kopi senjaku",
    image: "/images/portfolio/kopisenjaku.png",
  },
];

interface PortfolioProps {
  title?: string;
  description?: string;
  portfolios?: Portfolio[];
  className?: string;
}

export default function Portfolio({
  title = "Our Portfolio",
  description = "Beberapa proyek yang telah kami kerjakan dengan berbagai teknologi modern",
  portfolios = portfolioData,
  className,
}: PortfolioProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[560px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            {description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="group bg-card relative overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <div className="bg-muted relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
