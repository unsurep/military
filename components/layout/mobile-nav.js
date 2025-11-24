"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { sidebarItems } from "@/components/layout/sidebar"
import { cn } from "@/lib/utils"

export function MobileNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 md:hidden">
            <div className="flex items-center justify-between px-4 py-2">
                {sidebarItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex flex-1 flex-col items-center justify-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                            <span>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

