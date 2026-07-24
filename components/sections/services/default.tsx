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
    title: "Company Profile Website",
    description:
      "Website profesional untuk meningkatkan kredibilitas bisnis dan menampilkan informasi perusahaan.",
    icon: <ScanFaceIcon className="size-5 stroke-1" />,
  },
  {
    title: "E-Commerce Website",
    description:
      "Toko online modern dengan fitur katalog produk, keranjang belanja, dan pembayaran.",
    icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
  },
  {
    title: "Landing Page",
    description:
      "Landing page yang dioptimalkan untuk promosi produk, jasa, maupun campaign digital.",
    icon: <EclipseIcon className="size-5 stroke-1" />,
  },
  {
    title: "Custom Web Application",
    description:
      "Aplikasi web sesuai kebutuhan bisnis seperti sistem manajemen, dashboard, atau portal internal.",
    icon: <BlocksIcon className="size-5 stroke-1" />,
  },
  {
    title: "Website Redesign",
    description:
      "Mendesain ulang website lama agar tampil lebih modern, cepat, dan responsif.",
    icon: <FastForwardIcon className="size-5 stroke-1" />,
  },
  {
    title: "Website Maintenance",
    description:
      "Pemeliharaan website, update konten, backup, monitoring, dan perbaikan bug.",
    icon: <RocketIcon className="size-5 stroke-1" />,
  },
  {
    title: "Easy to Manage",
    description: "Website mudah diperbarui sesuai kebutuhan bisnis.",
    icon: <LanguagesIcon className="size-5 stroke-1" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Optimasi website agar lebih mudah ditemukan di mesin pencari seperti Google.",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
  {
    title: "Hosting & Deployment",
    description:
      "Membantu proses deployment, domain, SSL, hingga konfigurasi hosting.",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
];

export default function Services({
  title = "Our Services.",
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
