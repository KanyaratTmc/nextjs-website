import { Button } from "@/components/ui/button"

export function StatsSection() {
  return (
    <div className="flex-1">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold mb-6">สถิติประจำปี</h3>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="flex gap-4">
          <Button className="bg-gray-800 text-white">ดูรายละเอียด</Button>
          <Button variant="outline">เรียนรู้เพิ่มเติม</Button>
        </div>
      </div>
    </div>
  )
}
