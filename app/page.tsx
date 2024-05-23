"use client"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import DownloadSection from "@/components/download-section"
import CardsSection from "@/components/cards-section"
import PriceSection from "@/components/price-section"
import HowItWorks from "@/components/how-it-works"

export default function IndexPage() {

  return (
    <section className="flex w-full flex-col ">
      <HeroSection />
      <CardsSection />
      <HowItWorks />
      <TestimonialSection />
      <PriceSection />
      <DownloadSection />
      <Footer />
    </section >
  )
}
