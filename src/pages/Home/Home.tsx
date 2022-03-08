import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainBanner from "./components/MainBanner";
import Camp from "./components/Camp";
import SubBanner from "./components/SubBanner";
import Community from "./components/Community";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContWrap" style={{ paddingBottom: "242px" }}>
        <MainBanner />
        <Camp />
        <SubBanner />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
