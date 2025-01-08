import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
      AI Agent Legacy Code Conversion
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-muted-foreground">
        Transform your outdated codebase into modern, readable Java. Broaden your modernization paths and solve legacy code challenges for the long term.
      </p>
      <Button size="lg" className="w-full md:w-auto">Start Your Conversion</Button>
    </section>
  )
}

