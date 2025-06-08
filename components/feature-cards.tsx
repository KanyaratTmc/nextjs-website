export function FeatureCards() {
  const features = [
    { title: "LOREM IPSUM", description: "Lorem ipsum dolor sit amet" },
    { title: "DOLOR SIT", description: "Consectetur adipiscing elit" },
    { title: "CONSECTETUR", description: "Sed do eiusmod tempor" },
    { title: "ADIPISCING", description: "Incididunt ut labore" },
    { title: "TEMPOR", description: "Et dolore magna aliqua" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
