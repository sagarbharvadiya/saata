import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import NewsLetter from "./Pages/NewsLetter";
import ContentReference from './Pages/ContentReference';
import NewsLetterList from './Pages/NewsLetterList';
import NewsletterTeam from './Pages/NewsletterTeam';

function App() {
  const location = useLocation();
  const activeSlug = location.pathname.split('/').pop(); // Get the last part of the URL path
  useEffect(() => {
    document.body.classList.add(`page-${activeSlug}`); // Add the class to the body tag
    return () => {
      document.body.classList.remove(`page-${activeSlug}`); // Remove the class from the body tag when the component unmounts
    };
  }, [activeSlug]);
  return (
    <>
      <TopHeader activeSlug={activeSlug}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='basicpage/:slug' element={<BasicPage />}></Route>
        <Route exact path='/newsletter/:slug' element={<NewsLetter />}></Route>
        <Route exact path='/content/:slug' element={<ContentReference />}></Route>
        <Route exact path='/newsletterlist/:slug' element={<NewsLetterList />}></Route>
       <Route exact path='/newsletterTeam/:slug' element={<NewsletterTeam/>}></Route>
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
