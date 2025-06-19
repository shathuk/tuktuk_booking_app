'use client'

import { useState } from 'react'
import 'aos/dist/aos.css'

const faqs = [
  {
    question: "How do I book a Tuk-Tuk?",
    answer: "You can book easily through our website's 'Book Now' button and choose your preferred location and time.",
  },
  {
    question: "Are the drivers trustworthy?",
    answer: "Yes! All our drivers are background-checked, trained, and rated by previous customers.",
  },
  {
    question: "Can I book in advance?",
    answer: "Absolutely! You can book days or even weeks in advance with instant confirmation.",
  },
  {
    question: "Is there a cancellation fee?",
    answer: "No. You can cancel your ride up to 1 hour before your booking time without any fee.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white px-4 text-black" data-aos="fade-up">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 font-medium text-lg flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-xl">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  style={{ backgroundColor: "#FEFCE8" }}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 p-4' : 'max-h-0 p-0'
                  } text-gray-700 bg-white border-t`}
                >
                  <div className="opacity-90">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
