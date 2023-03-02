import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <TopHeader />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Gallery' element={<Gallery/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
