'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Comienza a Multiplicar tu Producción Hoy
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Únete a los cientos de productores que ya están transformando su economía rural con SCAR
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
          >
            Solicitar Demo Gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8"
          >
            Hablar con un Asesor
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-foreground/90">
          <div className="flex items-center gap-2 justify-center">
            <Phone className="w-5 h-5" />
            <span>+506 1234-5678</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Mail className="w-5 h-5" />
            <span>contacto@scar.cr</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-primary-foreground/70 text-sm">
          <p>© 2025 SCAR - Sistema de Climatización Agrícola Rural. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
