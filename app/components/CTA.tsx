import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Legacy Code?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
        Start your journey towards a more maintainable and efficient codebase today.
      </p>
      <Button size="lg">Get Started Now</Button>
    </section>
  )
}

