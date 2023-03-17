import React from "react";
import { Route, Routes } from 'react-router-dom';
import AboutTA from "./Components/AboutTA";
import AboutUs from "./Components/AboutUs";
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
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/Gallery' element={<Gallery/>}></Route>
          <Route exact path='/Membership_Registration' element={<Membership_Registration/>}></Route>
          <Route exact path='/Certified_Members' element={<Certified_Members/>}></Route>
          <Route exact path='/:slug' element={<MembershipDetails/>}></Route>
          <Route exact path='/:slug' element={<TA101ProgramDetails/>}></Route>
          <Route exact path='/AboutUS' element={<AboutUs/>}></Route>
          <Route exact path='/AboutTA' element={<AboutTA/>}></Route>
          <Route exact path='/HistoryOrigin' element={<HistoryOrigin/>}></Route>
          <Route exact path='/Articles' element={<Article/>}></Route>
          <Route exact path='/Article' element={<Articles/>}></Route>
          <Route exact path='/:slug' element={<SaataCalendar/>}></Route>
        </Routes>
        
      <Footer/>
    </>
  );
}

export default App;
