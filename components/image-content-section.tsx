import { Button } from "@/components/ui/button"

export function ImageContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">บริการ</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Button className="bg-gray-800 text-white">ดูรายละเอียด</Button>
          </div>
          <div className="flex-1">
            <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
