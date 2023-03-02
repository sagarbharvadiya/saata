import React from "react";
import AboutTA from "./Components/AboutTA";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import BoardOfMembers from "./Components/Board_of_members";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HistoryOrigin from "./Components/HistoryOrigin";
import InfoSection from "./Components/InfoSection";
import TopHeader from "./Components/TopHeader";


function App() {
  return (
    <div className="App">
      <TopHeader />
      <Banner />
      <InfoSection />
      <BoardOfMembers/>
      <AboutTA/>
      <AboutUs/>
      <HistoryOrigin/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
