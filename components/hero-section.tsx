export function HeroSection() {
  return (
    <section className="bg-gray-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            LOREM IPSUM IS SIMPLY
            <br />
            DUMMY
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-80 h-80 bg-white rounded-3xl flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
