import React from "react";
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import MembershipRegistration from "./Pages/MembershipRegistration";
import CertifiedMembers from "./Pages/CertifiedMembers";
import Article from "./Pages/Article";
import Articles from "./Pages/ArticleDetail";
import BasicPage from './Pages/BasicPage'

function App() {

  return (
    <>
      <TopHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:slug' element={<BasicPage/>}></Route>
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/membershipregistration' element={<MembershipRegistration />} />
        <Route exact path='/Certifiedmembers' element={<CertifiedMembers />} />
        <Route exact path='/articles' element={<Article />} />
        <Route exact path='/article' element={<Articles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
