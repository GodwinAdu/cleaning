"use client"

import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Features from "@/components/Features";
import WorkShowcase from "@/components/WorkShowcase";
import TeamShowcase from "@/components/TeamShowcase";
import CustomerReviews from "@/components/CustomerReviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/Faq";
import { useEffect, useState } from "react";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
];
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Clean modern interior ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Do It <span className="text-primary">Right Cleaning </span>Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional, eco-friendly cleaning services tailored for your home and office
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-background/20 text-white hover:bg-background/30">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Features />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Residential Cleaning', 'Office Cleaning', 'Deep Cleaning'].map((service, index) => (
              <motion.div
                key={service}
                className="bg-card p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <ul className="space-y-2 mb-4">
                  {['Thorough cleaning', 'Eco-friendly products', 'Trained professionals'].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WorkShowcase />

      <TeamShowcase />

      <ServiceAreas />

      <CustomerReviews />

      <FAQ />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready for a Spotless Space?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/booking">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book Your Cleaning Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

