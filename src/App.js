import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AboutUs from "./Components/AboutUs";
import AboutTA from "./Components/AboutTA";
import HistoryOrigin from "./Components/HistoryOrigin";

function App() {
  return (
    <div className="App">
      <TopHeader />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/Gallery' element={<Gallery/>}></Route>
          <Route exact path='/AboutUS' element={<AboutUs/>}></Route>
          <Route exact path='/AboutTA' element={<AboutTA/>}></Route>
          <Route exact path='/HistoryOrigin' element={<HistoryOrigin/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
