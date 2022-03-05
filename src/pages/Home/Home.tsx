import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainBanner from "./components/MainBanner";
import CampSection from "./components/CampSection";
import SubBanner from "./components/SubBanner";
import Community from "./components/Community";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContWrap" style={{ paddingBottom: "242px" }}>
        <MainBanner />
        <CampSection />
        <SubBanner />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
