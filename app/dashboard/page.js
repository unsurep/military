import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Home, AlertCircle, Activity } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm py-1 px-3">
                        Last updated: Just now
                    </Badge>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Officers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                        <p className="text-xs text-muted-foreground">+12 from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">84%</div>
                        <p className="text-xs text-muted-foreground">324/385 Units Occupied</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">Requests pending</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Transit Units</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">Available now</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                {
                                    user: "Maj. Gen. Smith",
                                    action: "Approved allocation request #1234",
                                    time: "2 hours ago",
                                },
                                {
                                    user: "Lt. Col. Johnson",
                                    action: "Updated Block A status to Maintenance",
                                    time: "4 hours ago",
                                },
                                {
                                    user: "Capt. Williams",
                                    action: "Registered new officer profile",
                                    time: "Yesterday",
                                },
                                {
                                    user: "System",
                                    action: "Monthly occupancy report generated",
                                    time: "Yesterday",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{item.user}</p>
                                        <p className="text-sm text-muted-foreground">{item.action}</p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">New Allocation</p>
                                <p className="text-xs text-muted-foreground">Assign room to officer</p>
                            </div>
                            <Home className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">Register Officer</p>
                                <p className="text-xs text-muted-foreground">Add new personnel</p>
                            </div>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">Report Issue</p>
                                <p className="text-xs text-muted-foreground">Log maintenance request</p>
                            </div>
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
