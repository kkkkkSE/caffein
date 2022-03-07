import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "reset-css";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import CampDetail from "./pages/CampDetail";
import CampApply from "./pages/CampApply";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/CampDetail">CampDetail</Link>
        <Link to="/CampApply">CampApply</Link>
        <Link to="/Community">Community</Link>
      </nav> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CampDetail" element={<CampDetail />}></Route>
          <Route path="/CampApply" element={<CampApply />}></Route>
          <Route path="/Community" element={<Community />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
