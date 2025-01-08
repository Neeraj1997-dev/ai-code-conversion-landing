import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is the AI-powered code conversion?",
    answer: "Our AI achieves a high level of accuracy, typically converting over 95% of code correctly. Any remaining issues are usually minor and easily addressed during the review phase."
  },
  {
    question: "What types of legacy code can be converted?",
    answer: "Our tool specializes in converting various legacy languages to Java, including COBOL, Fortran, and older versions of Java. Contact us for specific language support."
  },
  {
    question: "How long does the conversion process take?",
    answer: "The conversion time depends on the size and complexity of your codebase. Typically, we can convert several thousand lines of code within hours."
  },
  {
    question: "Is my code kept secure and confidential?",
    answer: "Absolutely. We use enterprise-grade encryption and security measures to ensure your code remains completely confidential throughout the conversion process."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 md:px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

