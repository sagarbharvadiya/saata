import React from "react";
import Banner from "./Components/Banner";
import BoardOfMembers from "./Components/Board_of_members";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import InfoSection from "./Components/InfoSection";
import TopHeader from "./Components/TopHeader";


function App() {
  return (
    <div className="App">
      <TopHeader />
      <Banner />
      <InfoSection />
      <BoardOfMembers/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
