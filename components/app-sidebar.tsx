"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plane, Hotel, Activity, Bookmark, Settings, ChevronUp, Menu, Plus, Luggage } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar" // Import useSidebar

export function AppSidebar() {
  const pathname = usePathname()
  const { isOpen, setIsOpen } = useSidebar() // Use the sidebar state

  const navItems = [
    { name: "Home", href: "/", icon: Plane },
    { name: "Flights", href: "/flights", icon: Plane },
    { name: "Hotels", href: "/hotels", icon: Hotel },
    { name: "Activities", href: "/activities", icon: Activity },
    { name: "Bookings", href: "/bookings", icon: Bookmark },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col w-64 p-4 bg-sidebar-background text-sidebar-foreground border-r-sidebar-border lg:relative lg:translate-x-0"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Luggage className="w-6 h-6 cheapoair-logo-suitcase" />
            <span className="text-xl font-bold cheapoair-logo-blue">cheapoair.ai</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Plus className="h-5 w-5" />
            <span className="sr-only">New Chat</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground", // Example active state
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto pt-4 border-t border-sidebar-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Guest" />
                      <AvatarFallback>G</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-guest-gradient border-2 border-sidebar-background" />
                  </div>
                  <span className="font-medium">Guest</span>
                </div>
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover text-popover-foreground">
              <DropdownMenuItem>
                <Link href="/auth" className="flex items-center w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </DropdownMenuItem>
              {/* Add other user options here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  )
}
