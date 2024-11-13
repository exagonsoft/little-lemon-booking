import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import FeaturedSection from "../components/Hero/FeaturedSection";
import MetaTags from "../components/ui/MetaTags";

const HomePage = () => {
  return (
    <main className="">
      <MetaTags
        title="Welcome Friend"
        description="Welcome to Little Lemon, where each dish is crafted with love and
          authentic flavors. From fresh, vibrant salads to hearty main courses,
          our menu celebrates the best of Mediterranean cuisine. Join us for a
          taste that feels like home, but with a twist that keeps you coming
          back."
        imageUrl="%PUBLIC_URL%/hero-splash.png"
      />
      <HeroSection />
      <FeaturedSection />
    </main>
  );
};

export default HomePage;
