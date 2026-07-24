"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface MenuItem {
  title: string;
  href: string;
  isLink: boolean;
}

interface NavigationProps {
  menuItems?: MenuItem[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Services",
      isLink: true,
      href: "/services",
    },
    {
      title: "Our Portfolio",
      isLink: true,
      href: "/portfolio",
    },
    {
      title: "Contacts",
      isLink: true,
      href: "/contacts",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href={item.href || ""}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
