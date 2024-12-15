"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'We offer comprehensive cleaning services for homes of all sizes. Our team will ensure your living space is spotless and comfortable.',
    features: ['Dusting and vacuuming', 'Kitchen and bathroom cleaning', 'Floor mopping', 'Window cleaning'],
  },
  {
    title: 'Office Cleaning',
    description: 'Keep your workplace clean and professional with our office cleaning services. We cater to businesses of all sizes.',
    features: ['Desk and workspace sanitization', 'Common area cleaning', 'Restroom maintenance', 'Trash removal'],
  },
  {
    title: 'Deep Cleaning',
    description: 'For those times when you need an extra thorough clean, our deep cleaning service covers all the details.',
    features: ['Baseboards and crown molding', 'Inside cabinets and drawers', 'Appliance deep clean', 'Carpet shampooing'],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <Link href="/booking">
                <Button>Book Now</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

