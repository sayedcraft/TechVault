"use client";

import Categori from "@/components/Categori";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Features Section */}
      <Feature></Feature>

      {/* Categories Section */}
      <Categori></Categori>

      {/* Testimonials Section */}
      <Testimonial></Testimonial>

      {/* CTA Section */}
      <CTA></CTA>
      
    </div>
  );
}
