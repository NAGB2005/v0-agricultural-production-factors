import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Productor Avícola",
      location: "Valle Central",
      quote: "En 8 meses recuperé mi inversión. La mortalidad bajó de 28% a solo 4%. SCAR cambió completamente mi operación.",
      rating: 5
    },
    {
      name: "María Rodríguez",
      role: "Ganadera Lechera",
      location: "Región Norte",
      quote: "La producción de leche aumentó 35% al controlar el estrés térmico. Los animales están más saludables y felices.",
      rating: 5
    },
    {
      name: "José Hernández",
      role: "Invernadero Hidropónico",
      location: "Costa Sur",
      quote: "Cosechas constantes todo el año. El control de temperatura y humedad es perfecto. Multipliqué mis ingresos por 3.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Lo que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Resultados reales de productores que transformaron su negocio
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="border-t pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
