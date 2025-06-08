import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    { title: "Business Service", description: "Complete business solutions" },
    { title: "Consulting", description: "Expert consulting services" },
    { title: "Development", description: "Custom development solutions" },
    { title: "Marketing", description: "Digital marketing strategies" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ข่าวสารและกิจกรรม</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-800 text-white">ดูทั้งหมด</Button>
        </div>
      </div>
    </section>
  )
}
