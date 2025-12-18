import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { Route } from "next";

export type NavItem = {
  title: string;
  href: Route;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" as Route, icon: Home },
  { title: "About", href: "/about" as Route, icon: User },
  { title: "Portfolio", href: "/portfolio" as Route, icon: FolderOpen },
  { title: "Products", href: "/products" as Route, icon: ShoppingBag },
  { title: "Hire Me", href: "/hireme" as Route, icon: Briefcase },
  { title: "Contact", href: "/contact" as Route, icon: Mail },
];
