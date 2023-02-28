import React from "react";
import logo from '../Images/logo.png'

const TopHeader = () => {
  return (
    <>
      <div className="Top-header-section">
        <div className="Top-Header-wrapper">
          <div className="logo">
            <img src={logo} alt="Logo"/>
          </div>
          <ul className="menu">
            <li>
              <a href="#certify">Certifications</a>
            </li>
            <li>
              <a href="#member">Membership</a>
            </li>
            <li>
              <a href="#directory">Directory</a>
            </li>
            <li>
              <a href="#prg">Programs</a>
            </li>
            <li>
              <a href="#aw">Awards</a>
            </li>
            <li>
              <a href="#gr">Gallery</a>
            </li>
            <li>
              <a href="#news">Newsletter</a>
            </li>
            <li>
              <a href="#art">Articles</a>
            </li>
            <li>
              <a href="#jour">Journals</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
