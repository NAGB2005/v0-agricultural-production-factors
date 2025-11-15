import { HeroSection } from "@/components/hero-section"
import { ProblemSolution } from "@/components/problem-solution"
import { RoiCalculator } from "@/components/roi-calculator"
import { ControlledFactors } from "@/components/controlled-factors"
import { TechnicalSpecs } from "@/components/technical-specs"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <RoiCalculator />
      <ControlledFactors />
      <TechnicalSpecs />
      <Testimonials />
      <CtaSection />
    </main>
  )
}
