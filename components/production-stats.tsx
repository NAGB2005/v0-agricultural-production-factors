import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Leaf, Shield } from "lucide-react"

export function ProductionStats() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Incremento en Producción",
      controlled: "+250-400%",
      traditional: "Base 100%",
      color: "text-emerald-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: "Rentabilidad",
      controlled: "+180-300%",
      traditional: "Base 100%",
      color: "text-blue-600",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      label: "Eficiencia de Recursos",
      controlled: "40-60% ahorro",
      traditional: "Uso estándar",
      color: "text-green-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      label: "Tasa de Supervivencia",
      controlled: "95-98%",
      traditional: "60-80%",
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className={`${stat.color} mb-4`}>{stat.icon}</div>
          <h3 className="font-semibold mb-4 text-sm">{stat.label}</h3>
          <div className="space-y-2">
            <div className="bg-emerald-50 p-3 rounded">
              <div className="text-xs text-muted-foreground mb-1">Controlado</div>
              <div className="font-bold text-emerald-700">{stat.controlled}</div>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <div className="text-xs text-muted-foreground mb-1">Tradicional</div>
              <div className="font-bold text-orange-700">{stat.traditional}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
