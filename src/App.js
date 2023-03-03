import React from "react";
import AboutTA from "./Components/AboutTA";
import AboutUs from "./Components/AboutUs";
import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Membership_Registration from "./Pages/Membreship-registration";

function App() {
  return (
    <div className="App">
      <TopHeader />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Gallery' element={<Gallery/>}></Route>
          <Route exact path='/Membership_Registration' element={<Membership_Registration/>}></Route>
        </Routes>
        <AboutTA/>
        <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
