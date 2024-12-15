"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Spotless Home",
    excerpt: "Discover the secrets to maintaining a clean and organized living space with these expert tips.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Benefits of Green Cleaning",
    excerpt: "Learn why eco-friendly cleaning products are better for your health and the environment.",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "How to Deep Clean Your Kitchen",
    excerpt: "A step-by-step guide to giving your kitchen a thorough, professional-level cleaning.",
    date: "2023-05-29",
  },
]

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cleaning Tips & Insights
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

