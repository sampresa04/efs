import React from "react";
import "@/css/styles.css";
import Navbar from "@/components/efs/Navbar";
import Hero from "@/components/efs/Hero";
import Services from "@/components/efs/Services";
import About from "@/components/efs/About";
import Clients from "@/components/efs/Clients";
import Coverage from "@/components/efs/Coverage";
import Contact from "@/components/efs/Contact";
import Footer from "@/components/efs/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#143322] overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24 lg:pt-28">
        <div id="top">
          <Hero />
        </div>
        <Services />
        <About />
        <Clients />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
