import type React from "react"
import { Card } from "@/components/ui/card"

interface FactorCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FactorCard({ icon, title, description }: FactorCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4 text-emerald-600">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}
