import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const steps = [
  {
    title: "Upload Your Code",
    description: "Securely upload your legacy codebase to our platform."
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes your code structure, patterns, and dependencies."
  },
  {
    title: "Conversion Process",
    description: "The AI converts your code to modern, readable Java."
  },
  {
    title: "Review & Refine",
    description: "Review the converted code and request any necessary refinements."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-center">
                <span className="text-4xl font-bold text-primary">{index + 1}</span>
              </CardTitle>
              <CardTitle className="text-center">{step.title}</CardTitle>
              <CardDescription className="text-center">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

