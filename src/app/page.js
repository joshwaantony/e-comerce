// app/page.js

import AboutSection from "@/components/home/AboutSection";
import CategorySection from "@/components/home/CategorySection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ProductSection from "@/components/home/ProductSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Navbar from "@/components/newArrival/Navbar";



export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}