import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface ComparisonProps {
  type: string
  controlled: {
    title: string
    features: string[]
    results: Record<string, string>
  }
  traditional: {
    title: string
    features: string[]
    results: Record<string, string>
  }
}

export function ComparisonSection({ type, controlled, traditional }: ComparisonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Controlled System */}
      <Card className="p-6 border-2 border-emerald-500 bg-emerald-50/50">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          <h3 className="text-2xl font-bold text-emerald-900">{controlled.title}</h3>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-emerald-800">Características:</h4>
          <ul className="space-y-2">
            {controlled.features.map((feature, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-3 text-emerald-900">Resultados:</h4>
          <div className="space-y-2">
            {Object.entries(controlled.results).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="capitalize text-emerald-800">{key}:</span>
                <span className="font-bold text-emerald-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Traditional System */}
      <Card className="p-6 border-2 border-orange-400 bg-orange-50/50">
        <div className="flex items-center gap-2 mb-6">
          <XCircle className="w-6 h-6 text-orange-600" />
          <h3 className="text-2xl font-bold text-orange-900">{traditional.title}</h3>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-orange-800">Características:</h4>
          <ul className="space-y-2">
            {traditional.features.map((feature, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed">
                <XCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-3 text-orange-900">Resultados:</h4>
          <div className="space-y-2">
            {Object.entries(traditional.results).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="capitalize text-orange-800">{key}:</span>
                <span className="font-bold text-orange-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
