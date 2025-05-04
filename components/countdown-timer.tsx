"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-[#0A1232] border border-[#1A2142] rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
          {timeLeft.days}
        </div>
        <span className="text-xs text-gray-400 mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-[#0A1232] border border-[#1A2142] rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
          {timeLeft.hours}
        </div>
        <span className="text-xs text-gray-400 mt-1">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-[#0A1232] border border-[#1A2142] rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
          {timeLeft.minutes}
        </div>
        <span className="text-xs text-gray-400 mt-1">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-[#0A1232] border border-[#1A2142] rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
          {timeLeft.seconds}
        </div>
        <span className="text-xs text-gray-400 mt-1">Seconds</span>
      </div>
    </div>
  )
}
