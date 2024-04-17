import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"

export default function ProductSorting() {
    return (
        <div className="mt-block flex-between pb-sm border-b">
            <div className="text-2xl font-semibold">0 Items</div>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
