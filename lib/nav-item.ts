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
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: User },
  { title: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { title: "Products", href: "/products", icon: ShoppingBag },
  { title: "Hire Me", href: "/hireme", icon: Briefcase },
  { title: "Contact", href: "/contact", icon: Mail },
];
