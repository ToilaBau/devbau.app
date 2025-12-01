"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Bell,
  Menu,
  PlusIcon,
} from "lucide-react";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  const currentIcon =
    resolvedTheme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    );
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled={true}>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {currentIcon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="flex h-16 items-center px-6">
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="hidden md:flex">
          <Link
            href="/"
            className="font-semibold text-lg hover:text-primary transition-colors">
            Casino Royal
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {/* Theme Toggle */}
          <ThemeToggleButton />

          {/* Sign In/Sign Up buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Đăng ký</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}