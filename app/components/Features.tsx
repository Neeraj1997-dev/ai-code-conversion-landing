import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Zap, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-6 w-6 md:h-8 md:w-8 mb-2" />,
    title: "Intelligent Code Analysis",
    description: "Our AI deeply understands your legacy code structure and patterns."
  },
  {
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 mb-2" />,
    title: "Rapid Conversion",
    description: "Convert large codebases quickly, saving time and resources."
  },
  {
    icon: <Shield className="h-6 w-6 md:h-8 md:w-8 mb-2" />,
    title: "Maintained Functionality",
    description: "Preserve existing functionality while improving code quality."
  },
  {
    icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8 mb-2" />,
    title: "Enhanced Readability",
    description: "Generate clean, modern Java code that's easy to maintain."
  }
]

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-center">{feature.icon}</div>
              <CardTitle className="text-center text-lg md:text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-center text-sm md:text-base">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

