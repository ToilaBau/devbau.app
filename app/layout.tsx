import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Dev Bau App",
  description: "Developer Bau App brings all your dev tools together in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
