import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <Sidebar className="hidden md:flex" />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto bg-muted/20 p-6 pb-24 md:pb-6">
                    {children}
                </main>
            </div>
            <MobileNav />
        </div>
    )
}
