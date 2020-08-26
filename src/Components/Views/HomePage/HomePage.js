import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import HeroSection from "../HomePage//HeroSection/HeroSection";
import ArticleSection from "../HomePage/ArticleSection/ArticleSection";
import ServiceSection from "../HomePage/ServiceSection/ServiceSection";
import ContactSection from "../HomePage/ContactSection/ContactSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticleSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
