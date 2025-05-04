"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function BundleCalculator() {
  const [chargerUsage, setChargerUsage] = useState(5) // hours per day
  const [chargingRate, setChargingRate] = useState(18) // rupees per kWh
  const [numChargers, setNumChargers] = useState(5) // default bundle size

  // Calculate earnings
  const dailyEarningsPerCharger = chargerUsage * 3.3 * chargingRate * 0.8 // 80% efficiency
  const monthlyEarningsPerCharger = dailyEarningsPerCharger * 30
  const monthlyEarningsTotal = monthlyEarningsPerCharger * numChargers
  const yearlyEarningsTotal = monthlyEarningsTotal * 12

  // Calculate ROI
  const investmentCost = numChargers * 8000
  const roiMonths = Math.ceil(investmentCost / monthlyEarningsTotal)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Daily Usage (hours)</label>
            <span className="text-sm font-medium">{chargerUsage} hours</span>
          </div>
          <Slider
            value={[chargerUsage]}
            min={1}
            max={10}
            step={1}
            onValueChange={(value) => setChargerUsage(value[0])}
            className="py-4"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Charging Rate (₹/kWh)</label>
            <span className="text-sm font-medium">₹{chargingRate}/kWh</span>
          </div>
          <Slider
            value={[chargingRate]}
            min={10}
            max={25}
            step={1}
            onValueChange={(value) => setChargingRate(value[0])}
            className="py-4"
          />
        </div>
      </div>

      <div className="bg-[#050A1F] rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">Daily Earnings (per charger)</p>
          <p className="font-medium">₹{Math.round(dailyEarningsPerCharger)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-300">Monthly Earnings (per charger)</p>
          <p className="font-medium">₹{Math.round(monthlyEarningsPerCharger)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-300">Monthly Earnings (all chargers)</p>
          <p className="font-medium">₹{Math.round(monthlyEarningsTotal)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-300">Yearly Earnings (all chargers)</p>
          <p className="font-medium">₹{Math.round(yearlyEarningsTotal)}</p>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-[#1A2142]">
          <p className="text-white font-medium">Return on Investment</p>
          <p className="text-xl font-bold text-[#5C6BFF]">{roiMonths} months</p>
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90">
        Calculate Your Custom ROI
      </Button>
    </div>
  )
}
