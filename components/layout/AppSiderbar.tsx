"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { navItems } from "@/lib/nav-item";
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex-1 bg-sidebar">
        <SidebarHeader className="border-b border-sidebar-border bg-sidebar relative">
          <div className="flex items-center justify-center px-4 py-6 bg-sidebar">
            <p>Hello</p>
          </div>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>FOR YOUR</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon  />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <div>Sub</div>
        </SidebarGroup>
        <SidebarFooter>
          <div>Footer</div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}