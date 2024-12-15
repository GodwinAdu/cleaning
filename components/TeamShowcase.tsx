import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin } from 'lucide-react';


const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    imageSrc: '/team-1.jpg',
    bio: 'With over 15 years of experience in the cleaning industry, Jane leads our team with passion and expertise.',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'John Smith',
    role: 'Head of Operations',
    imageSrc: '/team-2.jpg',
    bio: 'John ensures that every cleaning job is executed to perfection, maintaining our high standards of quality.',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Emily Brown',
    role: 'Customer Relations Manager',
    imageSrc: '/team-3.jpg',
    bio: 'Emily is dedicated to ensuring our clients receive the best possible service and support.',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Michael Lee',
    role: 'Head of Green Initiatives',
    imageSrc: '/team-4.jpg',
    bio: 'Michael leads our efforts in using eco-friendly products and sustainable cleaning practices.',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
]

const TeamShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamShowcase

