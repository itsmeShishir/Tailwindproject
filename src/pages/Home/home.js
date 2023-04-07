import React from "react";
import Header from "../../Components/Header/header";
import Pricing from "../../Components/Pricing/pricing";
import Footer from "../../Components/Footer/footer";
import Review from "../../Components/reviews/Review";
import GetinTouch from "../../Components/getinTouch/GetinTouch";
import LeadingMedicine from "../../Components/Leading/LeadingMedicine";
import Hero from "../../Components/hero/Hero";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LeadingMedicine />
      <Review />
      <Pricing />
      <GetinTouch />
      <Footer />
    </>
  );
}

export default Home;
