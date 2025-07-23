import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import Image from "next/image"
import { SidebarItem } from "@/components/ui/sidebar-item"
import { Home, Users, BarChart2, Settings, HelpCircle, User2, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#082145]">
      <SidebarHeader>
        <div className="flex justify-center">
          <Image src='/logo-moldsoft-branca.svg' width={180} height={55} alt="Logo Mold IA X" className="w-[180px] h-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="Principal">
          <SidebarItem icon={<Home/>} href="/">
            Dashboard
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="text-slate-50 text-xl">
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem className="text-lg">
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-lg">
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-lg">
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}
