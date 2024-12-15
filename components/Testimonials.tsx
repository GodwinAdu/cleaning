'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    text: 'SparkleClean Pro did an amazing job! My house has never been cleaner. Their attention to detail is impressive.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    text: 'I\'ve been using their office cleaning service for months. The team is always punctual and thorough. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    text: 'The deep cleaning service was worth every penny. They got rid of stains I thought were permanent!',
    rating: 4,
  },
  {
    name: 'Emily Brown',
    text: 'As a busy professional, I appreciate their flexible scheduling. They work around my timetable, and the results are always fantastic.',
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4 text-lg italic">&quot;{testimonials[currentIndex].text}&quot;</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

