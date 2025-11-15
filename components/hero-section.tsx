import { Button } from "@/components/ui/button"
import { Thermometer, Droplets, Wind, Sun } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 px-4 md:py-32">
      <div className="absolute inset-0 bg-[url('/agricultural-field-with-greenhouse-technology.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-2">
            <Thermometer className="w-6 h-6 text-primary-foreground/80" />
            <Droplets className="w-6 h-6 text-primary-foreground/80" />
            <Wind className="w-6 h-6 text-primary-foreground/80" />
            <Sun className="w-6 h-6 text-primary-foreground/80" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
          SCAR: La Climatización Inteligente que Potencia tu Economía Rural
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mb-8 text-pretty leading-relaxed">
          Tecnología de monitoreo y control de bajo costo para la estabilización y crecimiento de huertos, aves de corral y ganado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
            onClick={() => document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Calcula tu Rentabilidad Ahora
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8"
          >
            Ver Demostración
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "+300%", label: "Productividad" },
            { value: "60%", label: "Ahorro Recursos" },
            { value: "97%", label: "Supervivencia" },
            { value: "6-12", label: "Meses ROI" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
