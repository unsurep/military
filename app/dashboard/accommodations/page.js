import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Home } from "lucide-react"

const blocks = [
    {
        name: "Block A",
        type: "Married Quarters",
        total: 20,
        occupied: 18,
        rooms: Array.from({ length: 20 }, (_, i) => ({
            number: `A-${101 + i}`,
            status: i < 18 ? "Occupied" : "Vacant",
        })),
    },
    {
        name: "Block B",
        type: "Single Officers",
        total: 30,
        occupied: 25,
        rooms: Array.from({ length: 30 }, (_, i) => ({
            number: `B-${201 + i}`,
            status: i < 25 ? "Occupied" : "Vacant",
        })),
    },
    {
        name: "Transit Camp",
        type: "Transit",
        total: 15,
        occupied: 5,
        rooms: Array.from({ length: 15 }, (_, i) => ({
            number: `T-${1 + i}`,
            status: i < 5 ? "Occupied" : "Vacant",
        })),
    },
]

export default function AccommodationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Accommodations</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Block/Room
                </Button>
            </div>

            <div className="grid gap-6">
                {blocks.map((block, index) => (
                    <Card key={index}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <CardTitle className="flex items-center gap-2">
                                        <Home className="h-5 w-5 text-muted-foreground" />
                                        {block.name}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">{block.type}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm text-muted-foreground">
                                        <span className="font-medium text-foreground">{block.occupied}</span> / {block.total} Occupied
                                    </div>
                                    <div className="h-2 w-24 rounded-full bg-secondary/20">
                                        <div
                                            className="h-2 rounded-full bg-secondary"
                                            style={{ width: `${(block.occupied / block.total) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                                {block.rooms.map((room, i) => (
                                    <div
                                        key={i}
                                        className={`
                      flex aspect-square flex-col items-center justify-center rounded-md border text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer
                      ${room.status === "Occupied"
                                                ? "bg-muted/50 text-muted-foreground border-transparent"
                                                : "bg-background border-dashed border-muted-foreground/50 text-foreground"
                                            }
                    `}
                                        title={`${room.number} - ${room.status}`}
                                    >
                                        <span>{room.number.split("-")[1]}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
