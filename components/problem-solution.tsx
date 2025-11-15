"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2, TrendingDown, TrendingUp } from 'lucide-react'

export function ProblemSolution() {
  const [activeView, setActiveView] = useState<"problem" | "solution">("problem")

  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Estrés Térmico",
      description: "Reduce la producción de leche/huevos y la ganancia de peso"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Riesgo Biológico",
      description: "Alta humedad propicia plagas, hongos y enfermedades respiratorias"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Desperdicio",
      description: "Uso ineficiente de agua y nutrientes por falta de datos"
    }
  ]

  const solutions = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Productividad Máxima",
      description: "Variables óptimas constantes = Rendimiento maximizado"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Prevención Proactiva",
      description: "Control de humedad y ventilación previene la mayoría de los patógenos"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Eficiencia Total",
      description: "Uso de insumos solo cuando es estrictamente necesario"
    }
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          La Problemática vs. El Beneficio
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">
          El contraste entre la producción tradicional y la tecnificada
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeView === "problem" ? "default" : "outline"}
            onClick={() => setActiveView("problem")}
            className="gap-2"
          >
            <TrendingDown className="w-4 h-4" />
            Antes: La Problemática
          </Button>
          <Button
            variant={activeView === "solution" ? "default" : "outline"}
            onClick={() => setActiveView("solution")}
            className="gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Después: La Solución SCAR
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activeView === "problem" ? (
            problems.map((item, i) => (
              <Card key={i} className="p-6 border-destructive/20 bg-destructive/5">
                <div className="text-destructive mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))
          ) : (
            solutions.map((item, i) => (
              <Card key={i} className="p-6 border-primary/20 bg-primary/5">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
