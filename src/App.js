import React from "react";
import { Route, Routes } from 'react-router-dom';
import AboutTA from "./Components/AboutTA";
// import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Membership_Registration from "./Pages/Membreship-registration";
import About from "./Pages/About";
import HistoryOrigin from "./Components/HistoryOrigin";
import Certified_Members from "./Pages/Certified-Members";
import Article from "./Pages/Article";
import Articles from "./Pages/Artical_detail";
import MembershipDetails from "./Components/MembershipDetails";
import TA101ProgramDetails from "./Components/TA101ProgramDetails";
import SaataCalendar from "./Components/SaataCalendar";


function App() {

  return (
    <>
      <TopHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:slug' element={<MembershipDetails />} />
        <Route exact path='/:slug' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/membership_registration' element={<Membership_Registration />} />
        <Route exact path='/certified_members' element={<Certified_Members />} />
        <Route exact path='/ta-101-program-details:slug' element={<TA101ProgramDetails />} />
        
        <Route exact path='/about-ta:slug' element={<AboutTA />} />
        <Route exact path='/:slug' element={<HistoryOrigin />} />
        <Route exact path='/articles' element={<Article />} />
        <Route exact path='/article' element={<Articles />} />
        <Route exact path='/:slug' element={<SaataCalendar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
