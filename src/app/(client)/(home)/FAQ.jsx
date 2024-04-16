import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/const"

export default function FAQ() {
  return (
    <section>
      {/* Heading */}
      <h2 className="md:text-center">Frequently Asked Questions</h2>

      {/* Content Block */}
      <div className="mt-block mx-auto w-full md:w-2/3 lg:w-1/2">
        {faqs.map(item => (
          <Accordion type="single" collapsible key={item.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
