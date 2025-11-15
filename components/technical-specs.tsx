import { Card } from "@/components/ui/card"
import { Cpu, Wifi, Battery, Zap } from 'lucide-react'

export function TechnicalSpecs() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Especificaciones Técnicas
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <Cpu className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Hardware Robusto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Sensores industriales de alta precisión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Resistente a ambientes húmedos y polvorientos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Instalación plug-and-play sin obra civil</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <Wifi className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Conectividad Total</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">WiFi, 4G y conexión satelital disponible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">App móvil para monitoreo desde cualquier lugar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Notificaciones instantáneas de alertas</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <Battery className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Bajo Consumo</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Consumo eléctrico mínimo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Compatible con paneles solares</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Batería de respaldo integrada</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <Zap className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Automatización</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Control automático de ventiladores y calefacción</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Programación de horarios y ciclos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Integración con sistemas de riego y alimentación</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
