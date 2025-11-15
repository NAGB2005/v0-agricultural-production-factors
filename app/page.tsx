import { ComparisonSection } from "@/components/comparison-section"
import { FactorCard } from "@/components/factor-card"
import { ProductionStats } from "@/components/production-stats"
import { Sprout, Beef, Bird } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Control de Factores en la Producción Agropecuaria
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl text-pretty leading-relaxed">
            La diferencia entre una producción eficiente y rentable versus métodos tradicionales radica en el control
            preciso de los factores ambientales y nutricionales.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            ¿Por Qué es Importante el Control de Factores?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FactorCard
              icon={<Sprout className="w-12 h-12" />}
              title="Mayor Productividad"
              description="El control preciso de temperatura, humedad y nutrición puede aumentar la producción hasta un 300%"
            />
            <FactorCard
              icon={<Beef className="w-12 h-12" />}
              title="Mejor Calidad"
              description="Productos más uniformes, saludables y con mejores características comerciales"
            />
            <FactorCard
              icon={<Bird className="w-12 h-12" />}
              title="Reducción de Pérdidas"
              description="Menor mortalidad, enfermedades y desperdicios en todo el ciclo productivo"
            />
          </div>
        </div>
      </section>

      {/* Agricultura Comparison */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sprout className="w-10 h-10 text-emerald-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Producción Agrícola</h2>
          </div>
          <ComparisonSection
            type="Agricultura"
            controlled={{
              title: "Sistema Controlado",
              features: [
                "Riego automatizado por goteo con sensores de humedad",
                "Control de pH y nutrientes del suelo",
                "Invernaderos con temperatura y humedad reguladas",
                "Iluminación LED programable según ciclo de cultivo",
                "Monitoreo constante de plagas con sistemas de alerta",
                "Fertilización precisa basada en análisis de suelo",
              ],
              results: {
                yield: "300-400%",
                quality: "95% grado A",
                water: "60% menos agua",
                losses: "5-10% pérdidas",
              },
            }}
            traditional={{
              title: "Método Criollo/Tradicional",
              features: [
                "Riego manual o por inundación sin medición",
                "Fertilización empírica sin análisis previo",
                "Cultivo a cielo abierto expuesto a clima",
                "Dependencia total de luz solar natural",
                "Control de plagas reactivo y manual",
                "Uso excesivo de agua y recursos",
              ],
              results: {
                yield: "100% (base)",
                quality: "60% grado A",
                water: "Uso estándar",
                losses: "30-40% pérdidas",
              },
            }}
          />
        </div>
      </section>

      {/* Ganadería Comparison */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Beef className="w-10 h-10 text-amber-700" />
            <h2 className="text-3xl md:text-4xl font-bold">Producción Ganadera</h2>
          </div>
          <ComparisonSection
            type="Ganadería"
            controlled={{
              title: "Sistema Controlado",
              features: [
                "Alimentación balanceada con dietas formuladas",
                "Control de temperatura en establos (18-24°C)",
                "Ventilación forzada y renovación de aire",
                "Programa sanitario preventivo estricto",
                "Monitoreo de peso y salud individual",
                "Agua limpia y fresca disponible 24/7",
              ],
              results: {
                yield: "250% más carne/leche",
                quality: "Carne premium AAA",
                health: "98% tasa supervivencia",
                time: "30% menos tiempo",
              },
            }}
            traditional={{
              title: "Método Criollo/Tradicional",
              features: [
                "Pastoreo libre sin suplementación",
                "Animales expuestos a temperaturas extremas",
                "Ventilación natural insuficiente",
                "Vacunación básica o inexistente",
                "Sin control de peso ni registros",
                "Agua de fuentes naturales sin tratamiento",
              ],
              results: {
                yield: "100% (base)",
                quality: "Carne estándar",
                health: "75-80% supervivencia",
                time: "Ciclo completo",
              },
            }}
          />
        </div>
      </section>

      {/* Avicultura Comparison */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Bird className="w-10 h-10 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Producción Avícola</h2>
          </div>
          <ComparisonSection
            type="Avicultura"
            controlled={{
              title: "Sistema Controlado",
              features: [
                "Temperatura constante 32°C (inicio) a 21°C (final)",
                "Humedad relativa controlada 50-70%",
                "Iluminación programada para estimular crecimiento",
                "Alimento balanceado por etapa de crecimiento",
                "Bioseguridad estricta y vacunación completa",
                "Densidad óptima: 10 aves/m²",
              ],
              results: {
                yield: "400% más producción",
                quality: "Peso uniforme 2.5kg",
                health: "97% supervivencia",
                time: "42 días a mercado",
              },
            }}
            traditional={{
              title: "Método Criollo/Tradicional",
              features: [
                "Aves expuestas a variaciones de temperatura",
                "Sin control de humedad ambiental",
                "Luz natural únicamente",
                "Alimentación con granos y sobras",
                "Vacunación mínima o nula",
                "Crianza libre sin control de densidad",
              ],
              results: {
                yield: "100% (base)",
                quality: "Peso variable 1-1.5kg",
                health: "60-70% supervivencia",
                time: "90-120 días",
              },
            }}
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Impacto Económico del Control de Factores
          </h2>
          <ProductionStats />
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">La Tecnificación es el Futuro</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Los sistemas de producción controlados no solo aumentan significativamente la productividad y rentabilidad,
            sino que también son más sostenibles, utilizan menos recursos naturales y generan productos de mayor
            calidad. La inversión inicial se recupera rápidamente gracias a la eficiencia y reducción de pérdidas.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3-5x</div>
              <div className="text-sm text-muted-foreground">Mayor producción</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Menos pérdidas</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Ahorro en recursos</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
