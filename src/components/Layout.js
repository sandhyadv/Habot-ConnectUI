import React from "react";
import Footer from "./Footer";
import Cards from "./Cards";
import YoutubeSection from "./YoutubeSection";
import PlacesSection from "./PlacesSection";
import HeroSection from "./HeroSection";
import Header from "./Header/Header";

const Layout = () => {


  return (
    <>
      <Header />
      <HeroSection />
      <PlacesSection />
      <YoutubeSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Layout;
