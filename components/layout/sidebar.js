"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Home, Settings, LogOut, Shield } from "lucide-react"

export const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Officers",
        href: "/dashboard/officers",
        icon: Users,
    },
    {
        title: "Accommodations",
        href: "/dashboard/accommodations",
        icon: Home,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
]

export function Sidebar({ className }) {
    const pathname = usePathname()

    return (
        <div className={cn("flex h-full w-64 flex-col bg-card border-r", className)}>
            <div className="flex h-16 items-center border-b px-6">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg font-bold tracking-tight">MOAMS</span>
            </div>
            <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {sidebarItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="border-t p-4">
                <Link href="/" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-red-600">
                    <LogOut className="h-4 w-4" />
                    Logout
                </Link>
            </div>
        </div>
    )
}
