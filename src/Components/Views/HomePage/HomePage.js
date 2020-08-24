import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import HeroSection from "../HomePage//HeroSection/HeroSection";
import ArticleSection from "../HomePage/ArticleSection/ArticleSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticleSection />
    </div>
  );
}

export default HomePage;
