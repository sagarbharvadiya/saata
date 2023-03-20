import React, { useState } from "react";
import logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";
const TopHeader = () => {
  const [modal, sertModal] = useState(false);
  // const { slug } = useParams();
  const toggleModal = () => { sertModal(!modal) }




  return (
    
    <>
      <a href="#/" onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></a>
      {modal && (
        <div className="Top-header-section">
          <div className="Top-Header-wrapper">
            <div className="logo">
              <Link to='/'><img src={logo} alt="Logo" /></Link>
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
                <NavLink to="/Articles">Articles</NavLink>
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
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </div>
          <ul className="menu-folder">
            <li className="Certifications">
              <a href="/">Certifications</a>
              <ul className="Certifications-folder">
                <li><a href="/">Exam Dates</a></li>
                <li><a href="/">Download Documents</a></li>
                <li><a href="/">Download Forms</a></li>
              </ul>
            </li>
            <li className="Membership">
              <a href="#member">Membership</a>
              <ul className="Membership-folder">
                <li><NavLink to='/membership-details'>Membership Details</NavLink></li>
                <li><NavLink to="/membershipRegistration" href="#">Registration</NavLink></li>
                <li><a href="/">Renewal / Login</a></li>
              </ul>
            </li>
            <li className="directory">
              <a href="#directory">Directory</a>
              <ul className="directory-folder">
                <li><NavLink to="/CertifiedMembers">Certified Members</NavLink></li>
                <li><a href="/">Members</a></li>
              </ul>
            </li>
            <li className="Programs">
              <a href="#prg">Programs</a>
              <ul className="Programs-folder">
                <li><NavLink to='/ta-101-program-details'>TA 101 - Program Details</NavLink></li>
                <li><NavLink to="saata-calendar-2021-2022">SAATA Calendar 2021 - 2022</NavLink></li>
              </ul>
            </li>
            <li className="Awards">
              <a href="#aw">Awards</a>
              <ul className="Awards-folder">
                <li><a href="/">Professional Excellence Award</a></li>
                <li><a href="/">Service Awards</a></li>
                <li><a href="/">Call for Nominations</a></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="Newsletter">
              <a href="#news">Newsletter</a>
              <ul className="Newsletter-folder">
                <li><a href="/">Current and Previous Issues</a></li>
                <li><a href="/">Newsletter Team</a></li>
                <li><a href="/">Guidelines</a></li>
                <li><a href="/">Advertisement Policy</a></li>
                <li><a href="/">Team that Was</a></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Articles">Articles</NavLink>
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