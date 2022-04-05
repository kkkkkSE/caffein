import { useMediaQuery } from "react-responsive";

import Header from "components/Header";
import Footer from "components/Footer";

import MainBanner from "./components/MainBanner";
import Camp from "./components/Camp";
import SubBanner from "./components/SubBanner";
import Community from "./components/Community";

function Home() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      <Header />
      <MainBanner />
      <div
        style={
          isMobileScreen ? { padding: "36px 0 0" } : { padding: "64px 0 242px" }
        }
      >
        <Camp />
        <SubBanner />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
