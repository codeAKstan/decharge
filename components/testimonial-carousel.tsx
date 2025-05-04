"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    image: "/placeholder.svg?key=nzd3m",
    quote:
      "I installed 5 DeCharge Minis at my apartment complex. They're always in use by residents and delivery drivers. I'm making ₹25,000 monthly with minimal effort!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Bangalore",
    image: "/indian-woman-profile.png",
    quote:
      "As a small business owner, the passive income from my DeCharge Minis has been a game-changer. The installation was seamless, and the earnings started flowing immediately.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Delhi",
    image: "/placeholder.svg?key=r9zqu",
    quote:
      "I was skeptical at first, but the ROI has been incredible. My chargers paid for themselves in just 14 months, and now it's all profit. Highly recommend!",
    rating: 4,
  },
  {
    id: 4,
    name: "Ananya Patel",
    location: "Hyderabad",
    image: "/placeholder.svg?key=nwnlx",
    quote:
      "The DeCharge team handled everything from installation to maintenance. All I do is watch the earnings come in. Perfect passive income for busy professionals.",
    rating: 5,
  },
  {
    id: 5,
    name: "Arjun Reddy",
    location: "Chennai",
    image: "/placeholder.svg?height=100&width=100&query=south indian man profile",
    quote:
      "I've tried several passive income opportunities, but DeCharge has been the most reliable. The demand for EV charging in my area is growing every month.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([0, 1, 2])

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length
    setActiveIndex(newIndex)
    updateVisibleTestimonials(newIndex)
  }

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
    setActiveIndex(newIndex)
    updateVisibleTestimonials(newIndex)
  }

  const updateVisibleTestimonials = (index: number) => {
    const visible = [index, (index + 1) % testimonials.length, (index + 2) % testimonials.length]
    setVisibleTestimonials(visible)
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-[#050A1F] border border-[#1A2142] text-white hover:bg-[#0A1232]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                updateVisibleTestimonials(index)
              }}
              className={`w-2 h-2 rounded-full ${
                visibleTestimonials.includes(index) ? "bg-[#5C6BFF]" : "bg-[#1A2142]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-[#050A1F] border border-[#1A2142] text-white hover:bg-[#0A1232]"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((index) => {
          const testimonial = testimonials[index]
          return (
            <Card key={testimonial.id} className="bg-[#050A1F] border-[#1A2142]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-[#FFD700] fill-[#FFD700]" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
