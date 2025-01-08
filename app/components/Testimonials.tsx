import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "This AI-powered conversion tool saved us months of manual work. Our legacy code is now much more maintainable."
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, InnoSoft",
    content: "I was skeptical at first, but the quality of the converted Java code is impressive. It's clean, readable, and efficient."
  },
  {
    name: "Emily Rodriguez",
    role: "Software Architect, DataDynamics",
    content: "This tool has been a game-changer for our modernization efforts. It's broadened our options and accelerated our timeline."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

