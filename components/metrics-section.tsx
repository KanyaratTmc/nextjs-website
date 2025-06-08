import { TrendingUp, Users, Award, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MetricsSection() {
  const metrics = [
    { icon: TrendingUp, value: "15,165", label: "ราย" },
    { icon: Users, value: "20,260", label: "ราย" },
    { icon: Award, value: "80,435", label: "ราย" },
    { icon: Target, value: "48,768", label: "ราย" },
    { icon: Zap, value: "7,717", label: "ราย" },
  ]

  const additionalMetrics = [
    { icon: TrendingUp, value: "15,165", label: "ราย" },
    { icon: Users, value: "20,260", label: "ราย" },
    { icon: Award, value: "80,435", label: "ราย" },
    { icon: Target, value: "48,768", label: "ราย" },
    { icon: Zap, value: "7,717", label: "ราย" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">สถิติประจำปี</h2>

        <div className="grid grid-cols-5 gap-8 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            )
          })}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">กลุ่มธุรกิจ</h3>

        <div className="grid grid-cols-5 gap-8 mb-8">
          {additionalMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button className="bg-gray-800 text-white">ดูรายละเอียด</Button>
        </div>
      </div>
    </section>
  )
}
