import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to grow your business with us?</h2>
        <Button className="bg-white text-gray-800 hover:bg-gray-100">Apply for Membership</Button>
      </div>
    </section>
  )
}
