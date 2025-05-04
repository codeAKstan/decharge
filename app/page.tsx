import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Zap,
  Clock,
  IndianRupee,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  CloudLightningIcon as Lightning,
  Smartphone,
  Wallet,
  MapPin,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import { BundleCalculator } from "@/components/bundle-calculator"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ChargerModel } from "@/components/charger-model"
import { FAQAccordion } from "@/components/faq-accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050A1F] text-white overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1A2142] bg-[#050A1F]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/decharge-logo.png" alt="DeCharge Logo" width={130} height={32} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#offer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Offer
            </Link>
            <Link href="#specs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Specs
            </Link>
            <Link href="#deployment" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Deployment
            </Link>
            <Link href="#rewards" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Rewards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-[#3D4EAF] text-white hover:bg-[#3D4EAF]/20">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90">Buy Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3D4EAF]/20 blur-[100px]"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 text-sm">
                  Limited Time Offer • Only 400 Bundles
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Power India's <span className="text-[#5C6BFF]">EV Revolution</span> & Earn Passive Income
                </h1>
                <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Get 5 DeCharge Mini chargers for just ₹8,000 each with our exclusive bundle offer. Limited stock
                  available!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90 text-lg">
                    Claim Your Bundle <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#3D4EAF] text-white hover:bg-[#3D4EAF]/20">
                    Learn More
                  </Button>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-2">Bundle Sale Ends In:</p>
                  <CountdownTimer targetDate="2025-06-03T23:59:59" />
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#3D4EAF]/20 rounded-full blur-[60px]"></div>
                <div className="relative z-10 w-full h-full">
                  <ChargerModel />
                </div>
                <Badge className="absolute bottom-0 right-0 bg-[#FF4D4D] text-white hover:bg-[#FF4D4D]/90 px-4 py-1.5">
                  10% OFF • Limited Time
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-[#0A1232] py-6 border-y border-[#1A2142]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-[#5C6BFF]">400</p>
                <p className="text-sm text-gray-300">Bundles Available</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-[#5C6BFF]">3.3kW</p>
                <p className="text-sm text-gray-300">Charging Power</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-[#5C6BFF]">₹8,000</p>
                <p className="text-sm text-gray-300">Per Charger</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-[#5C6BFF]">5X</p>
                <p className="text-sm text-gray-300">ROI Potential</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offer Details Section */}
        <section id="offer" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The DeCharge Mini Bundle</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get 5 DeCharge Mini chargers at an exclusive price and join India's fastest-growing EV charging network.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#0A1232] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Bundle Details</h3>
                  <Badge className="bg-[#FF4D4D] text-white hover:bg-[#FF4D4D]/90">10% OFF</Badge>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                    <p className="text-gray-300">Regular Price (per charger)</p>
                    <p className="text-lg font-medium line-through">₹10,000</p>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                    <p className="text-gray-300">Bundle Price (per charger)</p>
                    <p className="text-lg font-medium">₹9,000</p>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                    <p className="text-gray-300">Promo Discount</p>
                    <p className="text-lg font-medium text-[#FF4D4D]">-₹1,000</p>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-white font-medium">Final Price (per charger)</p>
                    <p className="text-2xl font-bold text-[#5C6BFF]">₹8,000</p>
                  </div>
                </div>

                <div className="bg-[#3D4EAF]/10 rounded-xl p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                    <div>
                      <p className="font-medium">Limited Time Offer</p>
                      <p className="text-sm text-gray-300">
                        Only 400 bundles available. Secure yours before they're gone!
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90 text-lg py-6">
                  Claim Your Bundle Now
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-[#5C6BFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Perfect for Indian Streets</h4>
                    <p className="text-gray-300">
                      Compact 3.3kW chargers designed specifically for India's urban environment and EV market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                    <IndianRupee className="h-6 w-6 text-[#5C6BFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Passive Income Generator</h4>
                    <p className="text-gray-300">
                      Earn consistent revenue as India's EV adoption grows. Perfect for gig riders and delivery fleets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-[#5C6BFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Community Deployment</h4>
                    <p className="text-gray-300">
                      Our operations team handles installation and maintenance. You just collect the earnings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-[#5C6BFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Built on Solana</h4>
                    <p className="text-gray-300">
                      Powered by blockchain technology for transparent, secure, and efficient transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charger Specs Section */}
        <section id="specs" className="py-20 bg-[#0A1232]">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Technical Specifications
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">DeCharge Mini Specs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Compact, powerful, and designed specifically for India's EV market.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center order-2 lg:order-1">
                <div className="absolute inset-0 bg-[#3D4EAF]/20 rounded-full blur-[60px]"></div>
                <div className="relative z-10 w-full h-full">
                  <ChargerModel showDetails={true} />
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <Tabs defaultValue="specs" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#050A1F]">
                    <TabsTrigger value="specs">Specs</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs" className="space-y-4 mt-6">
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Power Output</p>
                      <p className="font-medium">3.3kW</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Input Voltage</p>
                      <p className="font-medium">220-240V AC</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Connector Type</p>
                      <p className="font-medium">Type 2</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Dimensions</p>
                      <p className="font-medium">25 × 15 × 10 cm</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Weight</p>
                      <p className="font-medium">2.5 kg</p>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <p className="text-gray-300">IP Rating</p>
                      <p className="font-medium">IP65 (Weatherproof)</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="space-y-4 mt-6">
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Smart Charging</p>
                        <p className="text-sm text-gray-300">Optimizes charging based on grid load and time of day</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">LED Status Indicator</p>
                        <p className="text-sm text-gray-300">Clear visual feedback on charging status</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Overheat Protection</p>
                        <p className="text-sm text-gray-300">Automatically adjusts charging to prevent overheating</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Tamper-Proof Design</p>
                        <p className="text-sm text-gray-300">Secure installation with anti-theft mechanisms</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="connectivity" className="space-y-4 mt-6">
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Solana Blockchain Integration</p>
                        <p className="text-sm text-gray-300">Secure and transparent payment processing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">4G Connectivity</p>
                        <p className="text-sm text-gray-300">Always connected to the DeCharge network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[#1A2142]">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Mobile App Control</p>
                        <p className="text-sm text-gray-300">Monitor and manage your chargers remotely</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Real-time Analytics</p>
                        <p className="text-sm text-gray-300">Track usage, earnings, and performance metrics</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90">
                    Get Technical Datasheet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India EV Market Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Market Opportunity
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">India's EV Revolution</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The perfect time to invest in India's rapidly growing electric vehicle infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#0A1232] border-[#1A2142] overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF]"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                      <Lightning className="h-6 w-6 text-[#5C6BFF]" />
                    </div>
                    <p className="text-3xl font-bold text-[#5C6BFF]">43%</p>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Annual EV Growth</h3>
                  <p className="text-gray-300">
                    India's EV market is growing at 43% annually, creating massive demand for charging infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0A1232] border-[#1A2142] overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF]"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                      <Smartphone className="h-6 w-6 text-[#5C6BFF]" />
                    </div>
                    <p className="text-3xl font-bold text-[#5C6BFF]">2M+</p>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Gig Economy Riders</h3>
                  <p className="text-gray-300">
                    Over 2 million delivery and ride-share drivers are transitioning to electric vehicles.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0A1232] border-[#1A2142] overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF]"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#5C6BFF]" />
                    </div>
                    <p className="text-3xl font-bold text-[#5C6BFF]">90%</p>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Charging Gap</h3>
                  <p className="text-gray-300">
                    90% of urban areas lack adequate charging infrastructure, creating a massive opportunity.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-[#0A1232] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Government Support</h3>
                  <p className="text-gray-300 mb-6">
                    India's government is actively supporting EV adoption with incentives and policies that benefit
                    charging infrastructure providers.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">GST reduction from 18% to 5% on EV chargers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">FAME II subsidies for charging infrastructure</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Special electricity tariffs for EV charging</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px]">
                  <Image
                    src="/Charger_01.png?key=de8v8"
                    alt="Indian EV Market"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1232] to-transparent rounded-xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xl font-bold">Join India's Green Mobility Revolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Deployment Section */}
        <section id="deployment" className="py-20 bg-[#0A1232]">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Hassle-Free Setup
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Community Deployment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We handle everything from installation to maintenance. You just collect the earnings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#050A1F] border-[#1A2142]">
                <CardContent className="p-6 pt-8">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg inline-flex mb-4">
                    <div className="bg-[#5C6BFF] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Purchase Your Bundle</h3>
                  <p className="text-gray-300">
                    Secure your bundle of 5 DeCharge Mini chargers at the exclusive price of ₹8,000 per charger.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#050A1F] border-[#1A2142]">
                <CardContent className="p-6 pt-8">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg inline-flex mb-4">
                    <div className="bg-[#5C6BFF] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Location Assessment</h3>
                  <p className="text-gray-300">
                    Our team evaluates your locations for optimal placement and maximum earning potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#050A1F] border-[#1A2142]">
                <CardContent className="p-6 pt-8">
                  <div className="bg-[#3D4EAF]/20 p-3 rounded-lg inline-flex mb-4">
                    <div className="bg-[#5C6BFF] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Professional Installation</h3>
                  <p className="text-gray-300">
                    Our operations team handles the complete installation process, ensuring optimal performance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-[#050A1F] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                  <h3 className="text-2xl font-bold">We Handle Everything</h3>
                  <p className="text-gray-300">
                    Our full-service approach means you don't need technical knowledge or installation expertise. We
                    take care of:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Site assessment and preparation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Electrical connections and wiring</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Network configuration and testing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Regular maintenance and updates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">24/7 monitoring and support</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5C6BFF] mt-0.5" />
                      <p className="text-gray-300">Payment processing and distribution</p>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90">
                    Learn About Our Installation Process
                  </Button>
                </div>

                <div className="lg:col-span-2 relative h-[300px]">
                  <Image
                    src="/Charger_02.png?key=o2p82"
                    alt="Professional Installation"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Calculate Your Returns
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Earnings Potential</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how quickly your DeCharge Mini bundle can pay for itself and start generating passive income.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#0A1232] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
                <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
                <BundleCalculator />
              </div>

              <div className="space-y-8">
                <div className="bg-[#0A1232] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
                  <h3 className="text-xl font-bold mb-4">Earning Potential</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Average Daily Usage</p>
                      <p className="font-medium">4-6 hours per charger</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Charging Rate</p>
                      <p className="font-medium">₹15-20 per kWh</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#1A2142]">
                      <p className="text-gray-300">Monthly Revenue (per charger)</p>
                      <p className="font-medium">₹5,000-8,000</p>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <p className="text-white font-medium">ROI Timeline</p>
                      <p className="text-xl font-bold text-[#5C6BFF]">12-18 months</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A1232] rounded-2xl p-6 md:p-8 border border-[#1A2142]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#3D4EAF]/20 p-3 rounded-lg">
                      <Wallet className="h-6 w-6 text-[#5C6BFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Long-Term Growth</h3>
                      <p className="text-gray-300">
                        As EV adoption increases in India, your earnings potential grows exponentially.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[200px] mb-4">
                    <div className="absolute bottom-0 left-0 right-0 h-[180px] flex items-end">
                      <div className="w-1/6 h-[30%] bg-[#3D4EAF]/30 rounded-t-md mx-0.5"></div>
                      <div className="w-1/6 h-[40%] bg-[#3D4EAF]/50 rounded-t-md mx-0.5"></div>
                      <div className="w-1/6 h-[55%] bg-[#3D4EAF]/70 rounded-t-md mx-0.5"></div>
                      <div className="w-1/6 h-[70%] bg-[#3D4EAF] rounded-t-md mx-0.5"></div>
                      <div className="w-1/6 h-[85%] bg-[#5C6BFF]/80 rounded-t-md mx-0.5"></div>
                      <div className="w-1/6 h-full bg-[#5C6BFF] rounded-t-md mx-0.5"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 border-t border-[#1A2142]"></div>
                    <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between text-xs text-gray-400">
                      <span>Year 1</span>
                      <span>Year 2</span>
                      <span>Year 3</span>
                      <span>Year 4</span>
                      <span>Year 5</span>
                      <span>Year 6</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mt-8">
                    *Projected growth based on current EV adoption trends in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-[#0A1232]">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Hosts Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied DeCharge hosts across India who are earning passive income.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-[#3D4EAF]/20 text-[#5C6BFF] hover:bg-[#3D4EAF]/30 px-4 py-1.5 mb-4">
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about the DeCharge Mini Bundle Sale.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1232]">
          <div className="container">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3D4EAF]/20 blur-[100px]"></div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <Badge className="bg-[#FF4D4D]/20 text-[#FF4D4D] hover:bg-[#FF4D4D]/30 px-4 py-1.5 mb-4">
                    Limited Time Offer • Only 400 Bundles
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold">Join India's EV Revolution Today</h2>
                  <p className="text-xl text-gray-300">
                    Secure your DeCharge Mini bundle now and start earning passive income while powering India's
                    sustainable future.
                  </p>

                  <div className="pt-4">
                    <p className="text-sm text-gray-400 mb-2">Bundle Sale Ends In:</p>
                    <CountdownTimer targetDate="2025-06-03T23:59:59" />
                  </div>

                  <div className="pt-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#3D4EAF] to-[#5C6BFF] hover:opacity-90 text-lg px-8 py-6"
                    >
                      Claim Your Bundle Now <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm text-gray-400 mt-4">No technical knowledge required. We handle everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1A2142] bg-[#050A1F] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image src="/decharge-logo.png" alt="DeCharge Logo" width={130} height={32} className="h-8 w-auto" />
              </Link>
              <p className="text-gray-400 max-w-md mb-6">
                DeCharge is a decentralized EV charging network helping everyday people own the future of energy.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About DeCharge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Become a Host
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Find Chargers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1A2142] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} DeCharge Network. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Powered by Solana Blockchain</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
