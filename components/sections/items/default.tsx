import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

const DEFAULT_ITEMS: ItemProps[] = [
  {
    title: "Fast Perfomance",
    description: "Website yang cepat dengan optimasi perfoma dan SEO",
    icon: <ScanFaceIcon className="size-5 stroke-1" />,
  },
  {
    title: "Responsive design",
    description: "Tampilan optimal di desktop",
    icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
  },
  {
    title: "Modern UI/UX",
    description: "Desain profesional yang meningkatkan kepercayaan pelanggan",
    icon: <EclipseIcon className="size-5 stroke-1" />,
  },
  {
    title: "SEO Friendly",
    description: "Membantu website lebih mudah ditemukan di Google",
    icon: <BlocksIcon className="size-5 stroke-1" />,
  },
  {
    title: "Secure Development",
    description: "Website dibuat mengikuti praktik keamanan modern",
    icon: <FastForwardIcon className="size-5 stroke-1" />,
  },
  {
    title: "Custom Solutions",
    description: "Setiap proyek disesuaikan dengan kebutuhan klien.",
    icon: <RocketIcon className="size-5 stroke-1" />,
  },
  {
    title: "Easy to Manage",
    description: "Website mudah diperbarui sesuai kebutuhan bisnis.",
    icon: <LanguagesIcon className="size-5 stroke-1" />,
  },
  {
    title: "CMS friendly",
    description: "Setiap proyek disesuaikan dengan kebutuhan klien.",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
  {
    title: "Ongoing Support",
    description: "Tetap mendapatkan bantuan setelah website selesai.",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
];

export default function Items({
  title = "Why Choose AlvindaWebStudio.",
  items = DEFAULT_ITEMS,
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item) => (
              <Item key={item.title}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
