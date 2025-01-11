import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import MediaShowcase from "@/components/MediaShowcase";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import VitalityCalculator from "@/components/VitalityCalculator";
import IngredientSpotlight from "@/components/IngredientSpotlight";
import Blog from "@/components/Blog";
import NewsletterSignup from "@/components/NewsletterSignup";
import RegionShipping from "@/components/RegionShipping";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nitric Boost Ultra Review 2025: ED Performance Booster",
  description:
    "Discover how Nitric Boost Ultra can enhance your performance and boost your confidence. Read our 2025 review for all the details.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <ProductShowcase />
        <MediaShowcase />
        <Stats />
        <Benefits />
        <RegionShipping />
        <VitalityCalculator />
        <HowItWorks />
        <IngredientSpotlight />
        <Testimonials />
        <Blog />
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Read Our Blog?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Expert Insights</h3>
                <p className="mb-4">
                  Our blog provides in-depth articles written by healthcare
                  professionals and researchers, offering you the latest
                  scientific findings on ED and nitric oxide boosters.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cutting-edge research on erectile dysfunction</li>
                  <li>
                    Comprehensive guides on nitric oxide and vascular health
                  </li>
                  <li>Expert analysis of natural performance enhancers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Practical Advice</h3>
                <p className="mb-4">
                  Get actionable tips and unbiased reviews to help you make
                  informed decisions about your sexual health and performance.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Natural ways to boost blood flow and performance</li>
                  <li>Lifestyle changes for better erectile function</li>
                  <li>Honest reviews of supplements and treatments</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Explore Our Blog
              </Link>
            </div>
          </div>
        </section>
        <NewsletterSignup />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
