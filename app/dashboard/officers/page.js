import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react"

const officers = [
    {
        id: 1,
        name: "Col. James Anderson",
        serviceNumber: "SVC-88219",
        rank: "Colonel",
        unit: "1st Infantry Division",
        status: "Serving",
        accommodation: "Block A - Room 101",
    },
    {
        id: 2,
        name: "Maj. Sarah Mitchell",
        serviceNumber: "SVC-99321",
        rank: "Major",
        unit: "Logistics Corps",
        status: "On-posting",
        accommodation: "Transit Camp - Room 12",
    },
    {
        id: 3,
        name: "Capt. David Chen",
        serviceNumber: "SVC-77442",
        rank: "Captain",
        unit: "Signal Regiment",
        status: "Serving",
        accommodation: "Block B - Room 204",
    },
    {
        id: 4,
        name: "Lt. Col. Michael Ross",
        serviceNumber: "SVC-66553",
        rank: "Lt. Colonel",
        unit: "Medical Corps",
        status: "Retired",
        accommodation: "Vacating",
    },
    {
        id: 5,
        name: "Lt. Emily White",
        serviceNumber: "SVC-55664",
        rank: "Lieutenant",
        unit: "Intelligence",
        status: "Serving",
        accommodation: "Block C - Room 305",
    },
]

export default function OfficersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Officers Management</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Register Officer
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Officer Directory</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search by name or ID..."
                                    className="pl-8"
                                />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Name</th>
                                    <th className="px-4 py-3 font-medium">Service Number</th>
                                    <th className="px-4 py-3 font-medium">Rank</th>
                                    <th className="px-4 py-3 font-medium">Unit</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 font-medium">Accommodation</th>
                                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {officers.map((officer) => (
                                    <tr key={officer.id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-4 py-3 font-medium">{officer.name}</td>
                                        <td className="px-4 py-3">{officer.serviceNumber}</td>
                                        <td className="px-4 py-3">{officer.rank}</td>
                                        <td className="px-4 py-3">{officer.unit}</td>
                                        <td className="px-4 py-3">
                                            <Badge
                                                variant={
                                                    officer.status === "Serving"
                                                        ? "success"
                                                        : officer.status === "Retired"
                                                            ? "secondary"
                                                            : "warning"
                                                }
                                            >
                                                {officer.status}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3">{officer.accommodation}</td>
                                        <td className="px-4 py-3 text-right">
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
