import { Calendar } from "lucide-react"

export function ContentGrid() {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ข่าวสารและกิจกรรม</h2>

        <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-800 text-white rounded">Ongoing</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Upcoming</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Past Event</button>
        </div>

        <div className="grid grid-cols-12 gap-2 mb-8">
          {months.map((month, index) => (
            <div key={index} className="text-center text-sm font-medium py-2">
              {month}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Event Date</span>
                </div>
                <h3 className="font-semibold mb-2">Event Title</h3>
                <p className="text-gray-600 text-sm">Event description goes here...</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Event Date</span>
                </div>
                <h3 className="font-semibold mb-2">Event Title</h3>
                <p className="text-gray-600 text-sm">Event description goes here...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
