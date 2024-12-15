import Link from "next/link"

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
            <Link href="/" className="text-2xl font-bold">Do-<span className='text-primary underline font-extrabold'>IT</span></Link>
              <p>Professional cleaning services for your home and office.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-teal-300 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-teal-300 transition-colors">Services</Link></li>
                <li><Link href="/booking" className="hover:text-teal-300 transition-colors">Book Now</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Clean Street, Sparkle City, SC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@sparkleclean.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Do It Right Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  