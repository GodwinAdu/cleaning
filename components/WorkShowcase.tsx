'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const workItems = [
  { 
    title: 'Luxury Home Cleaning',
    description: 'Complete house cleaning for a 5000 sq ft mansion',
    imageSrc: '/work-1.jpg',
  },
  { 
    title: 'Office Deep Clean',
    description: 'Thorough cleaning of a 20-story office building',
    imageSrc: '/work-2.jpg',
  },
  { 
    title: 'Post-Construction Cleanup',
    description: 'Detailed cleaning after a major home renovation',
    imageSrc: '/work-3.jpg',
  },
  { 
    title: 'Event Venue Preparation',
    description: 'Pre and post-event cleaning for a large convention center',
    imageSrc: '/work-4.jpg',
  },
]

const WorkShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(item.imageSrc)}
                  />
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src={selectedImage || ''}
                    alt="Selected work"
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkShowcase

