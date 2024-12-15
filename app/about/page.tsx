"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Do It Right
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, Do it Right has been dedicated to providing top-notch cleaning services to homes and businesses. Our journey began with a simple idea: to make spaces not just clean, but truly sparkle.
            </p>
            <p>
              Over the years, we've grown from a small local operation to a trusted name in professional cleaning services, always maintaining our commitment to quality, eco-friendliness, and customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/hero2.jpg"
              alt="SparkleClean Pro team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality", description: "We never compromise on the quality of our work." },
              { title: "Eco-Friendly", description: "We use environmentally safe products and practices." },
              { title: "Customer-Centric", description: "Your satisfaction is our top priority." },
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

