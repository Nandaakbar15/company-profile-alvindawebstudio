import "@/app/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Jasa Pembuatan Website",
    "Web Developer Indonesia",
    "Web Developer Bandung",
    "Company Profile Website",
    "Landing Page",
    "Website UMKM",
    "Website Sekolah",
    "Website Perusahaan",
    "Website Laravel",
    "Website Next.js",
    "React Developer",
    "Laravel Developer",
    "Tailwind CSS",
    "AlvindaWebStudio",
  ],
  authors: [
    {
      name: "AlvindaWebStudio",
      url: "https://alvindawebstudio.vercel.app/",
    },
  ],
  creator: "AlvindaWebStudio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nandaakbar974@gmail.com",
  },
  icons: {
    icon: [
      {
        url: "/images/logo-alvindawebstudio.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
