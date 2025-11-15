import { Card } from "@/components/ui/card"
import { Thermometer, Droplets, Wind, Sun, Activity, Shield } from 'lucide-react'

export function ControlledFactors() {
  const factors = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Temperatura",
      description: "Control preciso 18-32°C según especie y etapa",
      benefit: "+40% productividad"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Humedad",
      description: "Rango óptimo 50-70% para prevenir patógenos",
      benefit: "90% menos enfermedades"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Ventilación",
      description: "Renovación constante de aire para calidad ambiental",
      benefit: "Mejor conversión alimenticia"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Iluminación",
      description: "Ciclos programados para estimular crecimiento",
      benefit: "+25% rendimiento"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoreo 24/7",
      description: "Alertas en tiempo real de cualquier desviación",
      benefit: "Respuesta inmediata"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bioseguridad",
      description: "Control de acceso y condiciones sanitarias",
      benefit: "97% supervivencia"
    }
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Factores Controlados por SCAR
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto leading-relaxed">
          Cada variable ambiental es monitoreada y ajustada automáticamente para mantener las condiciones óptimas de producción
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((factor, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{factor.icon}</div>
              <h3 className="font-bold text-xl mb-2">{factor.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {factor.description}
              </p>
              <div className="text-secondary font-semibold text-sm">
                {factor.benefit}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
