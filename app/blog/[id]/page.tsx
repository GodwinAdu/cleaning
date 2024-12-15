"use client"

import { notFound, useParams } from 'next/navigation'
import { motion } from 'framer-motion'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Spotless Home",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Benefits of Green Cleaning",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "How to Deep Clean Your Kitchen",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    date: "2023-05-29",
  },
]

export default function BlogPost() {
    const params = useParams()
  const post = blogPosts.find(post => post.id === parseInt(params.id as string))

  if (!post) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          className="text-center text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {post.date}
        </motion.p>
        <motion.div
          className="prose lg:prose-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>{post.content}</p>
        </motion.div>
      </div>
    </div>
  )
}

