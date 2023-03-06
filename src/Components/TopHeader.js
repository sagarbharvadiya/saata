import React, { useState } from "react";
import logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";

const TopHeader = () => {
  const [modal, sertModal] = useState(false);

    const toggleModal = () => { sertModal(!modal) }
  return (
    <>
    <a href="#" onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></a>
    {modal &&(
      <div className="Top-header-section">
        <div className="Top-Header-wrapper">
          <div className="logo">
            <Link to='/'><img src={logo} alt="Logo"/></Link>
          </div>
          <ul onClick={toggleModal} className="menu">
          <li>
              <NavLink to="/">Certifications</NavLink>
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
              <NavLink to="/Gallery">Gallery</NavLink>
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
    )}
    <div className="Top-header-section-folder">
        <div className="Top-Header-wrapper-folder">
          <div className="logo">
          <Link to='/'><img src={logo} alt="Logo"/></Link>
          </div>
          <ul className="menu-folder">
            <li className="Certifications">
              <NavLink to="/">Certifications</NavLink>
              <ul className="Certifications-folder">
                <li><a>Exam Dates</a></li>
                <li><a>Download Documents</a></li>
                <li><a>Download Forms</a></li>
              </ul>
            </li>
            <li className="Membership">
              <NavLink to="/Membership_Registration" href="#member">Membership</NavLink>
              <ul className="Membership-folder">
                <li><a>Membership Details</a></li>
                <li><a>Registration</a></li>
                <li><a>Renewal / Login</a></li>
              </ul>
            </li>
            <li className="directory">
              <NavLink to="/Certified_Members" href="#directory">Directory</NavLink>
              <ul className="directory-folder">
                <li><a>Certified Members</a></li>
                <li><a>Members</a></li>
              </ul>
            </li>
            <li className="Programs">
              <a href="#prg">Programs</a>
              <ul className="Programs-folder">
                <li><a>TA 101 – Program Details</a></li>
                <li><a>SAATA Calendar 2021 – 2022</a></li>
              </ul>
            </li>
            <li className="Awards">
              <a href="#aw">Awards</a>
              <ul className="Awards-folder">
                <li><a>Professional Excellence Award</a></li>
                <li><a>Service Awards</a></li>
                <li><a>Call for Nominations</a></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="Newsletter">
              <a href="#news">Newsletter</a>
              <ul className="Newsletter-folder">
                <li><a>Current and Previous Issues</a></li>
                <li><a>Newsletter Team</a></li>
                <li><a>Guidelines</a></li>
                <li><a>Advertisement Policy</a></li>
                <li><a>Team that Was</a></li>
              </ul>
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