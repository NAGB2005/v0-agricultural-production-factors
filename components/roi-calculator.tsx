"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign } from 'lucide-react'

export function RoiCalculator() {
  const [animals, setAnimals] = useState(100)
  const [currentLoss, setCurrentLoss] = useState(30)
  const [animalValue, setAnimalValue] = useState(50)
  const [results, setResults] = useState<any>(null)

  const calculateROI = () => {
    // Cálculo simplificado del ROI
    const currentLosses = animals * (currentLoss / 100) * animalValue
    const withSCAR = animals * (5 / 100) * animalValue // 5% pérdidas con SCAR
    const savings = currentLosses - withSCAR
    const productivityGain = animals * animalValue * 0.3 // 30% más producción
    const totalBenefit = savings + productivityGain
    const systemCost = 2000 // Costo estimado del sistema
    const monthlyROI = (totalBenefit / systemCost) * 100
    const paybackMonths = systemCost / (totalBenefit / 12)

    setResults({
      currentLosses: currentLosses.toFixed(2),
      withSCAR: withSCAR.toFixed(2),
      savings: savings.toFixed(2),
      productivityGain: productivityGain.toFixed(2),
      totalBenefit: totalBenefit.toFixed(2),
      monthlyROI: monthlyROI.toFixed(1),
      paybackMonths: paybackMonths.toFixed(1)
    })
  }

  return (
    <section id="roi-calculator" className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simulador de Retorno de la Inversión
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubre cuánto puedes ahorrar y ganar con SCAR
          </p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <Label htmlFor="animals" className="text-base mb-2">Número de Animales</Label>
              <Input
                id="animals"
                type="number"
                value={animals}
                onChange={(e) => setAnimals(Number(e.target.value))}
                className="text-lg"
              />
            </div>
            <div>
              <Label htmlFor="loss" className="text-base mb-2">Pérdidas Actuales (%)</Label>
              <Input
                id="loss"
                type="number"
                value={currentLoss}
                onChange={(e) => setCurrentLoss(Number(e.target.value))}
                className="text-lg"
              />
            </div>
            <div>
              <Label htmlFor="value" className="text-base mb-2">Valor por Animal ($)</Label>
              <Input
                id="value"
                type="number"
                value={animalValue}
                onChange={(e) => setAnimalValue(Number(e.target.value))}
                className="text-lg"
              />
            </div>
          </div>

          <Button onClick={calculateROI} size="lg" className="w-full mb-8">
            <Calculator className="w-5 h-5 mr-2" />
            Calcular mi ROI
          </Button>

          {results && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-destructive" />
                    <h3 className="font-bold text-lg">Sin SCAR</h3>
                  </div>
                  <div className="text-3xl font-bold text-destructive mb-1">
                    ${results.currentLosses}
                  </div>
                  <p className="text-sm text-muted-foreground">Pérdidas anuales</p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-lg">Con SCAR</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    ${results.withSCAR}
                  </div>
                  <p className="text-sm text-muted-foreground">Pérdidas reducidas</p>
                </Card>
              </div>

              <Card className="p-6 bg-secondary/10 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-secondary" />
                  <div>
                    <h3 className="font-bold text-xl">Beneficio Total Anual</h3>
                    <p className="text-sm text-muted-foreground">Ahorro + Productividad</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-secondary mb-4">
                  ${results.totalBenefit}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{results.paybackMonths}</div>
                    <div className="text-sm text-muted-foreground">Meses para recuperar inversión</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{results.monthlyROI}%</div>
                    <div className="text-sm text-muted-foreground">ROI anual</div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
