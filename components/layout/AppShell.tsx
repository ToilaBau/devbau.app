"use client";

import { LayoutProvider } from "@/provider/layout-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSiderbar";
import { Navbar } from "./Navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto px-4 py-6 lg:px-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </LayoutProvider>
  );
}
