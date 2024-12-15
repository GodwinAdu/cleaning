'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly, non-toxic cleaning products that are safe for your family and pets. Our products are effective at cleaning and disinfecting without harsh chemicals.',
  },
  {
    question: 'How often should I schedule a cleaning service?',
    answer: 'The frequency of cleaning depends on your specific needs. We offer weekly, bi-weekly, and monthly services. For homes with pets or children, we often recommend weekly or bi-weekly cleanings.',
  },
  {
    question: 'Are your cleaning staff insured and bonded?',
    answer: 'Yes, all our cleaning professionals are fully insured and bonded. We also conduct thorough background checks on all our employees for your peace of mind.',
  },
  {
    question: 'What if I\'m not satisfied with the cleaning service?',
    answer: 'Your satisfaction is our top priority. If you\'re not completely satisfied with our service, please let us know within 24 hours and we\'ll re-clean the areas you\'re unhappy with at no additional cost.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-50 rounded-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

