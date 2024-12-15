'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { ModeToggle } from "@/components/ui/mode-toggle"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
    { href: '/booking', label: 'Book Now' },
  ]

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Do-<span className='text-primary underline font-extrabold'>IT</span></Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {/* <ModeToggle /> */}
          <Button className="hidden md:inline-flex">Get a Quote</Button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <motion.nav 
        className="md:hidden bg-background fixed top-14 right-0 w-64 h-full p-4 border-l "
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block hover:text-primary transition-colors" onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  )
}

export default Header

