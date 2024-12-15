'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { Calendar } from '@/components/ui/calendar'
// import { format } from 'date-fns'
import { toast } from '@/hooks/use-toast'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(),
    time: '',
    service: '',
    address: '',
    notes: '',
  })

  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData(prevData => ({ ...prevData, date }))
      // Simulate fetching available times
      setTimeout(() => {
        setAvailableTimes(['09:00', '11:00', '13:00', '15:00', '17:00'])
      }, 500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    toast({
      title: "Booking Submitted",
      description: "We've received your booking request. We'll contact you soon to confirm.",
    })
    // Here you would typically send the data to your backend
  }

  return (
    <div className="py-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book a Cleaning Service
        </motion.h1>
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <Label>Service</Label>
              <RadioGroup onValueChange={(value) => handleSelectChange('service', value)} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="residential" />
                  <Label htmlFor="residential">Residential Cleaning</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="office" />
                  <Label htmlFor="office">Office Cleaning</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="deep" id="deep" />
                  <Label htmlFor="deep">Deep Cleaning</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label>Date</Label>
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                className="rounded-md border"
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Select onValueChange={(value) => handleSelectChange('time', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="notes">Special Notes</Label>
              <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Book Now</Button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

