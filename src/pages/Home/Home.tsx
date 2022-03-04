import { useEffect, useState } from "react";
import styled from "styled-components";
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
      <MainBanner />
      <CampSection />
      <CampSection />
      <SubBanner />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;
