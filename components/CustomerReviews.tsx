'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const reviews = [
    {
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely amazing service! My house has never been cleaner. The team was professional and thorough.',
    },
    {
        name: 'Mark Thompson',
        rating: 4,
        comment: 'Great job on our office space. The staff was courteous and efficient. Will definitely use again.',
    },
    {
        name: 'Lisa Chen',
        rating: 5,
        comment: "I'm impressed with their attention to detail. They didn't miss a spot! Highly recommend for deep cleaning.",
    },
    {
        name: 'John Davis',
        rating: 5,
        comment: 'Exceptional service! They transformed our post-construction mess into a spotless home.',
    },
    {
        name: 'Emily Wilson',
        rating: 4,
        comment: "Reliable and consistent. They've been cleaning our office for months and always do a great job.",
    },
]

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    }

    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-card p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < reviews[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-lg mb-4">&quot;{reviews[currentIndex].comment}&quot;</p>
                        <p className="font-semibold">{reviews[currentIndex].name}</p>
                    </motion.div>
                    <div className="flex justify-center mt-8 space-x-4">
                        <Button onClick={prevReview} variant="outline">Previous</Button>
                        <Button onClick={nextReview} variant="outline">Next</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews

