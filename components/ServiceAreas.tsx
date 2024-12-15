import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const areas = [
  'Downtown',
  'Suburbs',
  'Business District',
  'Residential Areas',
  'Surrounding Cities',
]

const ServiceAreas = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Service Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas

