"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQAccordion() {
  const faqs = [
    {
      question: "What is included in the DeCharge Mini Bundle?",
      answer:
        "Each bundle includes 5 DeCharge Mini EV chargers (3.3kW each), professional installation by our operations team, access to the DeCharge mobile app for monitoring and management, and ongoing maintenance support.",
    },
    {
      question: "How much can I earn with the DeCharge Mini Bundle?",
      answer:
        "Earnings vary based on location and usage, but hosts typically earn ₹5,000-8,000 per month per charger. With a bundle of 5 chargers, that's a potential monthly income of ₹25,000-40,000.",
    },
    {
      question: "Do I need technical knowledge to host DeCharge Minis?",
      answer:
        "Not at all! Our operations team handles everything from installation to maintenance. You simply provide the location and collect the earnings.",
    },
    {
      question: "Where are the best locations to install DeCharge Minis?",
      answer:
        "The best locations include apartment complexes, office buildings, retail spaces, restaurants, and public parking areas. Our team will help assess your locations for optimal placement.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Installation typically takes 2-4 hours per charger, depending on the complexity of the location. Our team handles all aspects of installation, including electrical connections.",
    },
    {
      question: "How do I get paid for charging sessions?",
      answer:
        "Earnings are automatically calculated and transferred to your account on a weekly basis. You can track all transactions through the DeCharge mobile app.",
    },
    {
      question: "What happens if a charger needs maintenance?",
      answer:
        "Our system monitors all chargers 24/7. If any issues are detected, our maintenance team is automatically dispatched to resolve them at no additional cost to you.",
    },
    {
      question: "How long is the warranty period?",
      answer: "All DeCharge Mini chargers come with a 2-year comprehensive warranty covering all parts and labor.",
    },
    {
      question: "Can I buy individual chargers instead of a bundle?",
      answer:
        "The bundle offer is exclusive and provides the best value. Individual chargers are available at the regular price of ₹10,000 each without the bundle discount.",
    },
    {
      question: "How does the Solana blockchain integration work?",
      answer:
        "DeCharge uses Solana blockchain for secure, transparent payment processing and to track charging sessions. This ensures all transactions are verifiable and tamper-proof.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#1A2142]">
          <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
