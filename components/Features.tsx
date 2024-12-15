import { motion } from 'framer-motion'
import { Sparkles, Clock, Leaf, Shield } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Professional Cleaning',
    description: 'Our expert team delivers top-notch cleaning services using the latest techniques and equipment.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Flexible Scheduling',
    description: 'Book a time that works best for your busy schedule, including evenings and weekends.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Eco-Friendly Products',
    description: 'We use environmentally safe cleaning solutions that are effective and safe for your family and pets.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: '100% Satisfaction Guarantee',
    description: 'Your satisfaction is our top priority. If you are not happy, we will re-clean at no additional cost.',
  },
]

const Features = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SparkleClean Pro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-card p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

