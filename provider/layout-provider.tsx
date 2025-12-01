"use client";

import { createContext, useContext } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type LayoutContextValue = {
  isMobile: boolean;
};

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <LayoutContext.Provider value={{ isMobile }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error("useLayout must be used within LayoutProvider");
  return ctx;
}