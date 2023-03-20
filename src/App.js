import React from "react";
import { Route, Routes } from 'react-router-dom';
import { AboutTA,Footer,TopHeader,TA101ProgramDetails,HistoryOrigin,MembershipDetails,SaataCalendar  } from "./Components";
import { About,Home,Article,Articles,Gallery, CertifiedMembers, MembershipRegistration } from "./Pages";


function App() {

  return (
    <>
      <TopHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:slug' element={<MembershipDetails />} />
        <Route exact path='/:slug' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/membership_registration' element={<MembershipRegistration />} />
        <Route exact path='/certified_members' element={<CertifiedMembers />} />
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
